from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorClient
from models.user import AdminUserCreate, AdminUserLogin, Token, AdminUser
from utils.security import verify_password, get_password_hash, create_access_token
from datetime import timedelta
import os

router = APIRouter(prefix="/auth", tags=["Authentication"])

# Get DB connection
def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client

@router.post("/register", response_model=AdminUser)
async def register_admin(user: AdminUserCreate):
    """Register a new admin user"""
    db, client = get_db()
    
    try:
        # Check if user already exists
        existing_user = await db.admin_users.find_one(
            {"$or": [{"username": user.username}, {"email": user.email}]},
            {"_id": 0}
        )
        
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username or email already registered"
            )
        
        # Create new user
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

@router.post("/login", response_model=Token)
async def login(user_data: AdminUserLogin):
    """Login and get access token"""
    db, client = get_db()
    
    try:
        # Find user
        user = await db.admin_users.find_one(
            {"username": user_data.username},
            {"_id": 0}
        )
        
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Verify password
        if not verify_password(user_data.password, user["hashed_password"]):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Create access token
        access_token_expires = timedelta(minutes=1440)  # 24 hours
        access_token = create_access_token(
            data={"sub": user["username"]},
            expires_delta=access_token_expires
        )
        
        return {"access_token": access_token, "token_type": "bearer"}
    
    finally:
        client.close()
