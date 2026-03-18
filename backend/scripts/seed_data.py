"""
Data Seeding Script
Migrates data from frontend mockData.js to MongoDB
Run this script once to populate the database
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
import os
import sys

# Add parent directory to path to import models
sys.path.append(str(Path(__file__).parent.parent))

from utils.security import get_password_hash

# Load environment variables
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

async def seed_brands():
    """Seed brands collection"""
    print("Seeding brands...")
    
    brands = [
        {
            "id": "canobond-001",
            "name": "CanoBond",
            "slug": "canobond",
            "tagline": "German Intelligence. Unshakeable Bond.",
            "description": "Professional-grade adhesives and construction chemicals for superior bonding and durability",
            "brand_color": "#E67E22",
            "light_color": "#FFF5EE",
            "logo": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png",
            "banner_image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/t1pe2odd_Screenshot%202026-03-16%20at%208.27.06%E2%80%AFPM.png",
            "sections": {
                "adhesives": {"title": "Tile Adhesives"},
                "grouts": {"title": "Grouts & Solutions"},
                "cleaning": {"title": "Cleaning Solutions"}
            }
        },
        {
            "id": "blackberry-001",
            "name": "Blackberry",
            "slug": "blackberry",
            "tagline": "Premium Solutions for Perfect Finishes",
            "description": "Sophisticated chemical products designed for professional applications and premium finishes",
            "brand_color": "#8E44AD",
            "light_color": "#F4ECF7",
            "logo": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png",
            "banner_image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/7d6mkjxi_Screenshot%202026-03-16%20at%203.59.46%E2%80%AFPM.png",
            "sections": {
                "adhesives": {"title": "Tile Adhesives"},
                "grouts": {"title": "Grouts & Solutions"},
                "cleaning": {"title": "Cleaning Solutions"}
            }
        },
        {
            "id": "furniture-001",
            "name": "Furniture",
            "slug": "furniture",
            "tagline": "Luxury Living",
            "description": "Contemporary furniture designed for modern living with elegance and comfort",
            "brand_color": "#7D6608",
            "light_color": "#FFF9E6",
            "logo": "",
            "banner_image": "https://images.unsplash.com/photo-1628744876497-eb30460be9f6"
        }
    ]
    
    # Clear existing brands
    await db.brands.delete_many({})
    
    # Insert new brands
    await db.brands.insert_many(brands)
    print(f"✅ Seeded {len(brands)} brands")

async def seed_products():
    """Seed products collection"""
    print("Seeding products...")
    
    # CanoBond Products
    canobond_products = [
        {
            "id": "cb-ct333",
            "code": "CT-333",
            "name": "Polymer Grey Tile Adhesive",
            "brand": "canobond",
            "category": "Standard Adhesive",
            "section": "adhesives",
            "description": "Polymer-based grey tile adhesive for ceramic tiles and small format natural stone",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/jeehwvnl_image.png",
            "specs": {
                "standard": "C1T as per EN / TYPE 1 as per IS",
                "thickness": "Up to 15mm",
                "weight": "20 KG",
                "coverage": "1.2kg/m²/mm",
                "shelfLife": "12 months"
            },
            "features": ["Water retention", "Easy mixing", "Indoor/Outdoor", "Vertical & Horizontal"],
            "applications": ["Ceramic tiles", "Terracotta", "Clay tiles", "Natural stone"]
        },
        {
            "id": "cb-vt777",
            "code": "VT-777",
            "name": "High Performance Vitrified Adhesive",
            "brand": "canobond",
            "category": "Premium Adhesive",
            "section": "adhesives",
            "description": "High-performance polymer-modified adhesive for vitrified and low-porosity tiles",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/pqu66w3b_image.png",
            "specs": {
                "standard": "C2TE as per EN / TYPE 3 as per IS",
                "thickness": "Up to 15mm",
                "weight": "20 KG",
                "coverage": "1.2kg/m²/mm",
                "colors": "Grey & White"
            },
            "features": ["Visible fibres", "Exceptional bond", "Water resistant", "Flexible"],
            "applications": ["Vitrified tiles", "Glass mosaic", "Natural stone", "Swimming pools"]
        },
        {
            "id": "cb-ewt888",
            "code": "EWT-888",
            "name": "Ultra Flexible Large Format Adhesive",
            "brand": "canobond",
            "category": "Professional Grade",
            "section": "adhesives",
            "description": "Highly flexible adhesive for large format tiles with enhanced slip resistance",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/f4octibf_image.png",
            "specs": {
                "standard": "C2T E S2 as per EN / TYPE 4 T S2 as per IS",
                "thickness": "Up to 15mm",
                "weight": "20 KG",
                "colors": "Grey & White"
            },
            "features": ["High polymer", "Slip resistant", "Large format", "Extreme flexibility"],
            "applications": ["Large tiles >1200mm", "Granite", "High deformation areas", "External facade"]
        },
        {
            "id": "cb-iwt666",
            "code": "IWT-666",
            "name": "Thin Set Premium Adhesive",
            "brand": "canobond",
            "category": "Wet Area Specialist",
            "section": "adhesives",
            "description": "High polymer-modified thin set adhesive for vitrified tiles in wet conditions",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/azx7fpft_image.png",
            "specs": {
                "standard": "C2TE as per EN / TYPE 3 as per IS",
                "thickness": "Up to 12mm",
                "weight": "20 KG",
                "colors": "Grey & White"
            },
            "features": ["Water resistant", "Longer open time", "Tile-on-tile", "Pool safe"],
            "applications": ["Swimming pools", "Bathrooms", "Water bodies", "Wet rooms"]
        }
    ]
    
    # Blackberry Products
    blackberry_products = [
        {
            "id": "bb-ct333",
            "code": "CT-333",
            "name": "Polymer Grey Tile Adhesive",
            "brand": "blackberry",
            "category": "Tile Adhesive",
            "section": "adhesives",
            "description": "Polymer-based grey tile adhesive for ceramic tiles",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/oyw8un96_Screenshot%202026-03-16%20at%204.43.01%E2%80%AFPM.png",
            "features": ["Water retention", "Easy mixing", "Indoor/Outdoor"]
        },
        {
            "id": "bb-tilegrout",
            "name": "Tile Grout",
            "brand": "blackberry",
            "category": "Grout",
            "section": "grouts",
            "description": "Polymer-based sanded cement grout for wall/floor tiles",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/3vsbxhjh_Screenshot%202026-03-16%20at%203.58.27%E2%80%AFPM.png",
            "features": ["24 colors", "Weather resistant", "Non-cracking"],
            "colors": ["White", "Grey", "Beige", "Black", "Brown", "And 19 more..."]
        },
        {
            "id": "bb-epoxygrout",
            "name": "Epoxy Grout",
            "brand": "blackberry",
            "category": "Premium Grout",
            "section": "grouts",
            "description": "Three component chemical resistant epoxy grout",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ezw90l00_Screenshot%202026-03-16%20at%203.59.17%E2%80%AFPM.png",
            "features": ["Stain free", "Chemical resistant", "Weather resistant"],
            "specs": {
                "packaging": "1KG & 5KG",
                "colors": "24 colors available"
            }
        },
        {
            "id": "bb-tilecleaner",
            "name": "Tile Cleaner",
            "brand": "blackberry",
            "category": "Cleaning",
            "section": "cleaning",
            "description": "Heavy duty hydrochloric-based cleaner",
            "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fpgffh2i_Screenshot%202026-03-16%20at%203.57.48%E2%80%AFPM.png",
            "features": ["Fast acting", "Removes cement", "Professional grade"]
        }
    ]
    
    # Furniture Products
    furniture_products = [
        {
            "id": "fur-sofa-001",
            "name": "Luxury Sofa",
            "brand": "furniture",
            "category": "Living Room",
            "description": "Elegant modern sofa for premium living spaces",
            "image": "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=srgb&fm=jpg&q=85",
            "price": "Contact for pricing"
        },
        {
            "id": "fur-chair-001",
            "name": "Designer Chair",
            "brand": "furniture",
            "category": "Seating",
            "description": "Contemporary chair with premium upholstery",
            "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&q=85",
            "price": "Contact for pricing"
        },
        {
            "id": "fur-table-001",
            "name": "Dining Table",
            "brand": "furniture",
            "category": "Dining",
            "description": "Modern dining table for sophisticated interiors",
            "image": "https://images.unsplash.com/photo-1639173925921-5d5fd027713c?crop=entropy&cs=srgb&fm=jpg&q=85",
            "price": "Contact for pricing"
        }
    ]
    
    all_products = canobond_products + blackberry_products + furniture_products
    
    # Clear existing products
    await db.products.delete_many({})
    
    # Insert new products
    await db.products.insert_many(all_products)
    print(f"✅ Seeded {len(all_products)} products")

async def seed_company_info():
    """Seed company information"""
    print("Seeding company info...")
    
    company_info = {
        "id": "company_info",
        "name": "CANO Crystal",
        "tagline": "Excellence in Every Structure",
        "description": "CANO Crystal delivers high-performance tile adhesives designed for strength, precision, and long-term durability.",
        "mission": "To manufacture reliable, high-performance tile adhesive solutions that deliver consistent bonding strength, application ease, and long-term durability across all construction environments.",
        "vision": "To become a trusted name in tile fixing solutions by setting new benchmarks in quality, performance, and application reliability.",
        "stats": {
            "plants": "10+",
            "personnel": "300+",
            "projects": "562+",
            "customerSatisfaction": "99%"
        },
        "contact": {
            "email": "Info@canocrystal.com",
            "phone": "+91 89379 88585",
            "address": "Plot No 29, Sector 142, Noida, Uttar Pradesh India 201305",
            "manufacturing": "CANO DRYMIX Alwar (Rajasthan)"
        },
        "certifications": [
            "ISO 9001:2015",
            "ISO 14001:2018",
            "ISI Certified",
            "TÜV SUD",
            "CE Marking",
            "German Quality"
        ]
    }
    
    # Clear and insert
    await db.company_info.delete_many({})
    await db.company_info.insert_one(company_info)
    print("✅ Seeded company info")

async def create_default_admin():
    """Create default admin user"""
    print("Creating default admin user...")
    
    # Check if admin already exists
    existing_admin = await db.admin_users.find_one({"username": "admin"})
    
    if existing_admin:
        print("⚠️  Admin user already exists, skipping...")
        return
    
    admin_user = {
        "id": "admin-001",
        "email": "admin@canocrystal.com",
        "username": "admin",
        "hashed_password": get_password_hash("admin123"),  # Change this password!
        "is_active": True,
        "created_at": "2024-03-18T12:00:00Z"
    }
    
    await db.admin_users.insert_one(admin_user)
    print("✅ Created default admin user")
    print("   Username: admin")
    print("   Password: admin123")
    print("   ⚠️  IMPORTANT: Change this password after first login!")

async def main():
    """Main seeding function"""
    print("\n" + "="*50)
    print("🌱 Starting Database Seeding...")
    print("="*50 + "\n")
    
    try:
        await seed_brands()
        await seed_products()
        await seed_company_info()
        await create_default_admin()
        
        print("\n" + "="*50)
        print("✅ Database seeding completed successfully!")
        print("="*50 + "\n")
        
        print("📊 Summary:")
        brands_count = await db.brands.count_documents({})
        products_count = await db.products.count_documents({})
        print(f"  - Brands: {brands_count}")
        print(f"  - Products: {products_count}")
        print(f"  - Company Info: 1")
        print(f"  - Admin Users: 1")
        
        print("\n🔐 Default Admin Credentials:")
        print("  Username: admin")
        print("  Password: admin123")
        print("  ⚠️  Change this password immediately!\n")
        
    except Exception as e:
        print(f"\n❌ Error during seeding: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(main())
