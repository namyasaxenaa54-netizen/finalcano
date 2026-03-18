from fastapi import APIRouter, HTTPException, status, Query
from motor.motor_asyncio import AsyncIOMotorClient
from models.product import Product
from typing import List, Optional
import os

router = APIRouter(prefix="/products", tags=["Products"])

def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client

@router.get("", response_model=List[Product])
async def get_all_products(
    brand: Optional[str] = Query(None, description="Filter by brand (canobond, blackberry, furniture)"),
    section: Optional[str] = Query(None, description="Filter by section (adhesives, grouts, cleaning)")
):
    """Get all products with optional filters"""
    db, client = get_db()
    
    try:
        query = {}
        if brand:
            query["brand"] = brand
        if section:
            query["section"] = section
        
        products = await db.products.find(query, {"_id": 0}).to_list(1000)
        return products
    finally:
        client.close()

@router.get("/{product_id}", response_model=Product)
async def get_product_by_id(product_id: str):
    """Get a specific product by ID"""
    db, client = get_db()
    
    try:
        product = await db.products.find_one({"id": product_id}, {"_id": 0})
        
        if not product:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Product with ID '{product_id}' not found"
            )
        
        return product
    finally:
        client.close()
