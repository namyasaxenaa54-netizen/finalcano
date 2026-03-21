from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.user import AdminUserCreate, AdminUserLogin, Token, AdminUser
from utils.security import verify_password, get_password_hash, create_access_token
from datetime import timedelta
import os

router = APIRouter(prefix="/auth", tags=["Authentication"])


# 🔌 DB CONNECTION
def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client


# 📝 REGISTER ADMIN
@router.post("/register", response_model=AdminUser)
async def register_admin(user: AdminUserCreate):
    db, client = get_db()

    try:
        existing_user = await db.admin_users.find_one(
            {"$or": [{"username": user.username}, {"email": user.email}]},
            {"_id": 0}
        )

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Username or email already registered"
            )

        admin_user = AdminUser(
            email=user.email,
            username=user.username,
            hashed_password=get_password_hash(user.password)
        )

        user_dict = admin_user.model_dump()
        user_dict['created_at'] = user_dict['created_at'].isoformat()

        await db.admin_users.insert_one(user_dict)
        return admin_user

    finally:
        client.close()


# 🔐 LOGIN (AUTO CREATES DEFAULT ADMIN)
@router.post("/login", response_model=Token)
async def login(user_data: AdminUserLogin):
    db, client = get_db()

    try:
        # 🔥 CREATE DEFAULT ADMIN IF NOT EXISTS
        existing = await db.admin_users.find_one({"username": "admin"})
        if not existing:
            await db.admin_users.insert_one({
                "username": "admin",
                "email": "admin@gmail.com",
                "hashed_password": get_password_hash("admin123"),
                "created_at": "2026-01-01"
            })
            print("✅ Default admin created: admin / admin123")

        # 🔍 FIND USER
        user = await db.admin_users.find_one(
            {"username": user_data.username},
            {"_id": 0}
        )

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Incorrect username or password"
            )

        # 🔑 VERIFY PASSWORD
        if not verify_password(user_data.password, user["hashed_password"]):
            raise HTTPException(
                status_code=401,
                detail="Incorrect username or password"
            )

        # 🎟️ CREATE TOKEN
        access_token = create_access_token(
            data={"sub": user["username"]},
            expires_delta=timedelta(minutes=1440)
        )

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }

    finally:
        client.close()
