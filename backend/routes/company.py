from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.company import CompanyInfo
import os

router = APIRouter(prefix="/company", tags=["Company"])

def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client

@router.get("-info", response_model=CompanyInfo)
async def get_company_info():
    """Get company information"""
    db, client = get_db()
    
    try:
        company_info = await db.company_info.find_one({"id": "company_info"}, {"_id": 0})
        
        if not company_info:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Company information not found"
            )
        
        return company_info
    finally:
        client.close()
