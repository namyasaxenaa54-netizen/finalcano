from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorClient
from models.brand import BrandCreate, BrandUpdate, Brand
from models.product import ProductCreate, ProductUpdate, Product
from models.company import CompanyInfoUpdate, CompanyInfo
from middleware.auth_middleware import get_current_user
from typing import List
import os

router = APIRouter(prefix="/admin", tags=["Admin"], dependencies=[Depends(get_current_user)])

def get_db():
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    return db, client

# ========== BRAND MANAGEMENT ==========

@router.post("/brands", response_model=Brand)
async def create_brand(brand: BrandCreate):
    """Create a new brand"""
    db, client = get_db()
    
    try:
        brand_obj = Brand(**brand.model_dump())
        brand_dict = brand_obj.model_dump()
        
        await db.brands.insert_one(brand_dict)
        return brand_obj
    finally:
        client.close()

@router.put("/brands/{brand_id}", response_model=Brand)
async def update_brand(brand_id: str, brand_update: BrandUpdate):
    """Update a brand"""
    db, client = get_db()
    
    try:
        # Get existing brand
        existing_brand = await db.brands.find_one({"id": brand_id}, {"_id": 0})
        
        if not existing_brand:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Brand with ID '{brand_id}' not found"
            )
        
        # Update only provided fields
        update_data = brand_update.model_dump(exclude_unset=True)
        
        if update_data:
            await db.brands.update_one(
                {"id": brand_id},
                {"$set": update_data}
            )
        
        # Get updated brand
        updated_brand = await db.brands.find_one({"id": brand_id}, {"_id": 0})
        return updated_brand
    finally:
        client.close()

@router.delete("/brands/{brand_id}")
async def delete_brand(brand_id: str):
    """Delete a brand"""
    db, client = get_db()
    
    try:
        result = await db.brands.delete_one({"id": brand_id})
        
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Brand with ID '{brand_id}' not found"
            )
        
        return {"message": "Brand deleted successfully"}
    finally:
        client.close()

# ========== PRODUCT MANAGEMENT ==========

@router.post("/products", response_model=Product)
async def create_product(product: ProductCreate):
    """Create a new product"""
    db, client = get_db()
    
    try:
        product_obj = Product(**product.model_dump())
        product_dict = product_obj.model_dump()
        
        await db.products.insert_one(product_dict)
        return product_obj
    finally:
        client.close()

@router.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: str, product_update: ProductUpdate):
    """Update a product"""
    db, client = get_db()
    
    try:
        # Get existing product
        existing_product = await db.products.find_one({"id": product_id}, {"_id": 0})
        
        if not existing_product:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Product with ID '{product_id}' not found"
            )
        
        # Update only provided fields
        update_data = product_update.model_dump(exclude_unset=True)
        
        if update_data:
            await db.products.update_one(
                {"id": product_id},
                {"$set": update_data}
            )
        
        # Get updated product
        updated_product = await db.products.find_one({"id": product_id}, {"_id": 0})
        return updated_product
    finally:
        client.close()

@router.delete("/products/{product_id}")
async def delete_product(product_id: str):
    """Delete a product"""
    db, client = get_db()
    
    try:
        result = await db.products.delete_one({"id": product_id})
        
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Product with ID '{product_id}' not found"
            )
        
        return {"message": "Product deleted successfully"}
    finally:
        client.close()

# ========== COMPANY INFO MANAGEMENT ==========

@router.put("/company-info", response_model=CompanyInfo)
async def update_company_info(company_update: CompanyInfoUpdate):
    """Update company information"""
    db, client = get_db()
    
    try:
        # Update only provided fields
        update_data = company_update.model_dump(exclude_unset=True)
        
        if update_data:
            await db.company_info.update_one(
                {"id": "company_info"},
                {"$set": update_data},
                upsert=True
            )
        
        # Get updated company info
        updated_info = await db.company_info.find_one({"id": "company_info"}, {"_id": 0})
        return updated_info
    finally:
        client.close()

@router.get("/stats")
async def get_admin_stats():
    """Get statistics for admin dashboard"""
    db, client = get_db()
    
    try:
        brands_count = await db.brands.count_documents({})
        products_count = await db.products.count_documents({})
        
        # Get product counts by brand
        canobond_count = await db.products.count_documents({"brand": "canobond"})
        blackberry_count = await db.products.count_documents({"brand": "blackberry"})
        furniture_count = await db.products.count_documents({"brand": "furniture"})
        
        return {
            "total_brands": brands_count,
            "total_products": products_count,
            "products_by_brand": {
                "canobond": canobond_count,
                "blackberry": blackberry_count,
                "furniture": furniture_count
            }
        }
    finally:
        client.close()
