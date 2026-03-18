from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.brand import Brand
from typing import List
import os

router = APIRouter(prefix="/brands", tags=["Brands"])

def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client

@router.get("", response_model=List[Brand])
async def get_all_brands():
    """Get all brands"""
    db, client = get_db()
    
    try:
        brands = await db.brands.find({}, {"_id": 0}).to_list(100)
        return brands
    finally:
        client.close()

@router.get("/{brand_slug}", response_model=Brand)
async def get_brand_by_slug(brand_slug: str):
    """Get a specific brand by slug (canobond, blackberry, furniture)"""
    db, client = get_db()
    
    try:
        brand = await db.brands.find_one({"slug": brand_slug}, {"_id": 0})
        
        if not brand:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Brand '{brand_slug}' not found"
            )
        
        return brand
    finally:
        client.close()
