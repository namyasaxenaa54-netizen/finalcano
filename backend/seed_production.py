"""
Production Database Seeding Script
Run this once after deploying to production to populate MongoDB Atlas with all products
"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone

async def seed_production_database():
    """Seed production MongoDB Atlas with all brands and products"""
    
    # Get MongoDB connection from environment
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME', 'canocrystal_db')
    
    if not mongo_url:
        print("❌ ERROR: MONGO_URL environment variable not set!")
        return
    
    print(f"🔗 Connecting to MongoDB Atlas...")
    print(f"   Database: {db_name}")
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    try:
        # Test connection
        await client.server_info()
        print("✅ Successfully connected to MongoDB Atlas")
        
        # Check if data already exists
        existing_products = await db.products.count_documents({})
        existing_brands = await db.brands.count_documents({})
        
        print(f"\n📊 Current database state:")
        print(f"   Products: {existing_products}")
        print(f"   Brands: {existing_brands}")
        
        if existing_products > 0 or existing_brands > 0:
            response = input("\n⚠️  Database already has data. Do you want to:\n   1. Skip seeding\n   2. Add missing data only\n   3. Clear and reseed all\nChoice (1/2/3): ")
            
            if response == "1":
                print("✅ Skipping seeding")
                return
            elif response == "3":
                print("🗑️  Clearing existing data...")
                await db.products.delete_many({})
                await db.brands.delete_many({})
                await db.company_info.delete_many({})
                print("✅ Data cleared")
        
        # Seed Brands
        print("\n📦 Seeding brands...")
        brands = [
            {
                "id": "canobond",
                "slug": "canobond",
                "name": "CanoBond",
                "tagline": "German Intelligence. Unshakeable Bond.",
                "description": "Premium tile adhesives and grouts engineered with German precision for unmatched performance and reliability.",
                "brand_color": "#E07B39",
                "light_color": "#FFF5EB",
                "logo": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png",
                "banner_image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/t1pe2odd_Screenshot%202026-03-16%20at%208.27.06%E2%80%AFPM.png"
            },
            {
                "id": "blackberry",
                "slug": "blackberry",
                "name": "Blackberry",
                "tagline": "Premium Solutions for Perfect Finishes",
                "description": "High-performance tile adhesives and grouts designed for professional results in every application.",
                "brand_color": "#8E44AD",
                "light_color": "#F4ECF7",
                "logo": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png",
                "banner_image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/7d6mkjxi_Screenshot%202026-03-16%20at%203.59.46%E2%80%AFPM.png"
            },
            {
                "id": "furniture",
                "slug": "furniture",
                "name": "Furniture Collection",
                "tagline": "Elegance Meets Functionality",
                "description": "Premium furniture solutions combining aesthetic beauty with practical design.",
                "brand_color": "#2C5F2D",
                "light_color": "#E8F5E9",
                "logo": "",
                "banner_image": "https://images.unsplash.com/photo-1628744876497-eb30460be9f6"
            }
        ]
        
        for brand in brands:
            await db.brands.update_one(
                {"id": brand["id"]},
                {"$set": brand},
                upsert=True
            )
        print(f"✅ Seeded {len(brands)} brands")
        
        # Seed CanoBond Products
        print("\n📦 Seeding CanoBond products...")
        canobond_products = [
            # ADHESIVES
            {
                "id": "cb-ct333",
                "code": "CT-333",
                "name": "Polymer Grey Tile Adhesive",
                "brand": "canobond",
                "category": "Standard Adhesive",
                "section": "adhesives",
                "description": "Polymer-based grey tile adhesive for ceramic tiles and small format natural stone",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/jeehwvnl_image.png",
                "specs": {"standard": "C1T as per EN / TYPE 1 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
                "features": ["Water retention", "Easy mixing", "Indoor/Outdoor"],
                "applications": ["Ceramic tiles", "Natural stone", "Interior walls"]
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
                "specs": {"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
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
                "specs": {"standard": "C2T E S2 as per EN / TYPE 4 T S2 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
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
                "specs": {"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 12mm", "weight": "20 KG"},
                "features": ["Water resistant", "Longer open time", "Tile-on-tile", "Pool safe"],
                "applications": ["Swimming pools", "Bathrooms", "Water bodies", "Wet rooms"]
            },
            {
                "id": "cb-cvt444",
                "code": "CVT-444",
                "name": "Anti-Skid Grey Adhesive",
                "brand": "canobond",
                "category": "Standard Adhesive",
                "section": "adhesives",
                "description": "Advanced polymer enriched anti-skid adhesive for ceramic and natural stones",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/gygsnn8f_image.png",
                "specs": {"standard": "C2T as per EN / TYPE 2 as per IS", "thickness": "Up to 10mm", "weight": "20 KG"},
                "features": ["Anti-skid", "Perfect adherence", "Extended open time"],
                "applications": ["Ceramic tiles", "Natural stone", "Interior walls"]
            },
            # GROUTS
            {
                "id": "cb-tilegrout",
                "name": "Tile Grout",
                "brand": "canobond",
                "category": "Grout",
                "section": "grouts",
                "description": "Polymer-based sanded cement grout for wall/floor tiles & natural stone",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/8p19sbhd_Screenshot%202026-03-14%20at%204.04.24%E2%80%AFPM.png",
                "specs": {"weight": "1KG", "colors": "24 colors", "shelfLife": "12 months"},
                "features": ["Reduced water absorption", "Abrasion resistant", "Non-cracking", "Weather resistant"],
                "applications": ["Wall tiles", "Floor tiles", "Natural stone", "Ceramic tiles"]
            },
            {
                "id": "cb-epoxygrout",
                "name": "Epoxy Grout",
                "brand": "canobond",
                "category": "Premium Grout",
                "section": "grouts",
                "description": "Three component chemical resistant epoxy grout - stain free and durable",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/6dysg2u0_Screenshot%202026-03-14%20at%204.03.57%E2%80%AFPM.png",
                "specs": {"packaging": "1KG & 5KG", "colors": "24 colors", "shelfLife": "24 months"},
                "features": ["Stain free", "Chemical resistant", "Weather resistant", "Non-toxic"],
                "applications": ["Hospitals", "Kitchens", "Swimming pools", "High traffic areas"]
            },
            {
                "id": "cb-grouthardener",
                "name": "Grout Hardener",
                "brand": "canobond",
                "category": "Grout Additive",
                "section": "grouts",
                "description": "Synthetic polymer emulsion additive for cement grouts",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/d5ddyzw8_Screenshot%202026-03-20%20at%203.03.47%E2%80%AFPM.png",
                "specs": {"packaging": "300ml bottle", "pH": ">8", "shelfLife": "12 months"},
                "features": ["Improves adhesion", "Increases flexibility", "Reduces permeability"],
                "applications": ["Cement grouts", "Wall tiles", "Floor tiles"]
            },
            {
                "id": "cb-epoxyglitter",
                "name": "Epoxy Grout Glitter",
                "brand": "canobond",
                "category": "Decorative",
                "section": "grouts",
                "description": "Decorative glitter additive for epoxy grout",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cgpvgtvp_Screenshot%202026-03-20%20at%203.07.32%E2%80%AFPM.png",
                "specs": {"weight": "100g", "colors": "Multiple colors"},
                "features": ["Decorative finish", "Easy to mix", "Long-lasting sparkle"],
                "applications": ["Decorative tiles", "Feature walls", "Luxury installations"]
            },
            # CLEANING
            {
                "id": "cb-tilecleaner",
                "name": "Tile Cleaner",
                "brand": "canobond",
                "category": "Cleaning",
                "section": "cleaning",
                "description": "Heavy duty hydrochloric-based cleaner for tile maintenance",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0bjq3emc_Screenshot%202026-03-20%20at%203.08.27%E2%80%AFPM.png",
                "specs": {"packaging": "1 Litre", "shelfLife": "24 months"},
                "features": ["Fast acting", "Removes cement film", "Removes efflorescence"],
                "applications": ["After installation", "Regular maintenance", "Heavy duty cleaning"]
            }
        ]
        
        for product in canobond_products:
            await db.products.update_one(
                {"id": product["id"]},
                {"$set": product},
                upsert=True
            )
        print(f"✅ Seeded {len(canobond_products)} CanoBond products")
        
        # Seed Blackberry Products
        print("\n📦 Seeding Blackberry products...")
        blackberry_products = [
            # ADHESIVES
            {
                "id": "bb-ct333",
                "code": "CT-333",
                "name": "Polymer Grey Tile Adhesive",
                "brand": "blackberry",
                "category": "Standard Adhesive",
                "section": "adhesives",
                "description": "Polymer-based grey tile adhesive for ceramic tiles",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/oyw8un96_Screenshot%202026-03-16%20at%204.43.01%E2%80%AFPM.png",
                "specs": {"standard": "C1T as per EN / TYPE 1 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
                "features": ["Water retention", "Easy mixing", "Indoor/Outdoor"],
                "applications": ["Ceramic tiles", "Natural stone", "Interior walls"]
            },
            {
                "id": "bb-cvt444",
                "code": "CVT-444",
                "name": "Anti-Skid Grey Adhesive",
                "brand": "blackberry",
                "category": "Standard Adhesive",
                "section": "adhesives",
                "description": "Advanced polymer enriched anti-skid adhesive",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/w76owp3h_Screenshot%202026-03-16%20at%204.43.17%E2%80%AFPM.png",
                "specs": {"standard": "C2T as per EN / TYPE 2 as per IS", "thickness": "Up to 10mm", "weight": "20 KG"},
                "features": ["Anti-skid", "Perfect adherence", "Extended open time"],
                "applications": ["Ceramic tiles", "Natural stone", "Interior walls"]
            },
            {
                "id": "bb-vt777",
                "code": "VT-777",
                "name": "High Performance Vitrified Adhesive",
                "brand": "blackberry",
                "category": "Premium Adhesive",
                "section": "adhesives",
                "description": "High-performance polymer-modified adhesive for vitrified tiles",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/uswmrksn_Screenshot%202026-03-16%20at%204.43.50%E2%80%AFPM.png",
                "specs": {"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
                "features": ["Visible fibres", "Exceptional bond", "Water resistant", "Flexible"],
                "applications": ["Vitrified tiles", "Glass mosaic", "Natural stone"]
            },
            {
                "id": "bb-ewt888",
                "code": "EWT-888",
                "name": "Ultra Flexible Large Format Adhesive",
                "brand": "blackberry",
                "category": "Professional Grade",
                "section": "adhesives",
                "description": "Highly flexible adhesive for large format tiles",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/qub1sm7d_Screenshot%202026-03-16%20at%204.44.05%E2%80%AFPM.png",
                "specs": {"standard": "C2T E S2 as per EN / TYPE 4 T S2 as per IS", "thickness": "Up to 15mm", "weight": "20 KG"},
                "features": ["High polymer", "Slip resistant", "Large format", "Extreme flexibility"],
                "applications": ["Large tiles >1200mm", "Granite", "External facade"]
            },
            {
                "id": "bb-iwt666",
                "code": "IWT-666",
                "name": "Thin Set Premium Adhesive",
                "brand": "blackberry",
                "category": "Wet Area Specialist",
                "section": "adhesives",
                "description": "High polymer-modified thin set adhesive for wet conditions",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/n6hisdtg_Screenshot%202026-03-16%20at%204.43.32%E2%80%AFPM.png",
                "specs": {"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 12mm", "weight": "20 KG"},
                "features": ["Water resistant", "Longer open time", "Tile-on-tile", "Pool safe"],
                "applications": ["Swimming pools", "Bathrooms", "Wet rooms"]
            },
            # GROUTS
            {
                "id": "bb-tilegrout",
                "name": "Tile Grout",
                "brand": "blackberry",
                "category": "Grout",
                "section": "grouts",
                "description": "Polymer-based sanded cement grout",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/3vsbxhjh_Screenshot%202026-03-16%20at%203.58.27%E2%80%AFPM.png",
                "specs": {"weight": "1KG", "colors": "24 colors"},
                "features": ["Reduced water absorption", "Abrasion resistant", "Non-cracking"],
                "applications": ["Wall tiles", "Floor tiles", "Ceramic tiles"]
            },
            {
                "id": "bb-epoxygrout",
                "name": "Epoxy Grout",
                "brand": "blackberry",
                "category": "Premium Grout",
                "section": "grouts",
                "description": "Three component chemical resistant epoxy grout",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ezw90l00_Screenshot%202026-03-16%20at%203.59.17%E2%80%AFPM.png",
                "specs": {"packaging": "1KG & 5KG", "colors": "24 colors"},
                "features": ["Stain free", "Chemical resistant", "Weather resistant"],
                "applications": ["Hospitals", "Kitchens", "Swimming pools"]
            },
            {
                "id": "bb-grouthardener",
                "name": "Grout Hardener",
                "brand": "blackberry",
                "category": "Grout Additive",
                "section": "grouts",
                "description": "Synthetic polymer emulsion additive for cement grouts",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/39m57mq4_Screenshot%202026-03-20%20at%203.11.59%E2%80%AFPM.png",
                "specs": {"packaging": "200ml bottle", "pH": ">8"},
                "features": ["Improves adhesion", "Increases flexibility", "Reduces permeability"],
                "applications": ["Cement grouts", "Wall tiles", "Floor tiles"]
            },
            {
                "id": "bb-epoxyglitter",
                "name": "Epoxy Grout Glitter",
                "brand": "blackberry",
                "category": "Decorative",
                "section": "grouts",
                "description": "Decorative glitter additive for epoxy grout",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fxwbqjcw_Screenshot%202026-03-16%20at%203.58.11%E2%80%AFPM.png",
                "specs": {"weight": "100g", "colors": "Multiple colors"},
                "features": ["Decorative finish", "Easy to mix", "Long-lasting sparkle"],
                "applications": ["Decorative tiles", "Feature walls"]
            },
            # CLEANING
            {
                "id": "bb-tilecleaner",
                "name": "Tile Cleaner",
                "brand": "blackberry",
                "category": "Cleaning",
                "section": "cleaning",
                "description": "Heavy duty hydrochloric-based cleaner",
                "image": "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fpgffh2i_Screenshot%202026-03-16%20at%203.57.48%E2%80%AFPM.png",
                "specs": {"packaging": "1 Litre", "shelfLife": "24 months"},
                "features": ["Fast acting", "Removes cement film", "Removes efflorescence"],
                "applications": ["After installation", "Regular maintenance"]
            }
        ]
        
        for product in blackberry_products:
            await db.products.update_one(
                {"id": product["id"]},
                {"$set": product},
                upsert=True
            )
        print(f"✅ Seeded {len(blackberry_products)} Blackberry products")
        
        # Seed Furniture Products
        print("\n📦 Seeding Furniture products...")
        furniture_products = [
            {
                "id": "furn-sofa",
                "name": "Modern Sectional Sofa",
                "brand": "furniture",
                "category": "Seating",
                "section": "living",
                "description": "Contemporary L-shaped sectional sofa with premium upholstery",
                "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
                "specs": {"dimensions": "280x180x85cm", "material": "Fabric"},
                "features": ["Premium fabric", "Modular design", "Easy assembly"],
                "applications": ["Living room", "Lounge areas"]
            },
            {
                "id": "furn-chair",
                "name": "Designer Chair",
                "brand": "furniture",
                "category": "Seating",
                "section": "living",
                "description": "Modern ergonomic chair with elegant design",
                "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
                "specs": {"dimensions": "60x70x90cm", "material": "Leather"},
                "features": ["Ergonomic", "Stylish", "Comfortable"],
                "applications": ["Dining", "Office", "Living room"]
            },
            {
                "id": "furn-table",
                "name": "Dining Table",
                "brand": "furniture",
                "category": "Tables",
                "section": "dining",
                "description": "Elegant wooden dining table for modern homes",
                "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200",
                "specs": {"dimensions": "180x90x75cm", "material": "Solid wood"},
                "features": ["Solid construction", "Natural finish", "Seats 6-8"],
                "applications": ["Dining room", "Kitchen"]
            }
        ]
        
        for product in furniture_products:
            await db.products.update_one(
                {"id": product["id"]},
                {"$set": product},
                upsert=True
            )
        print(f"✅ Seeded {len(furniture_products)} Furniture products")
        
        # Seed Company Info
        print("\n📦 Seeding company information...")
        company_info = {
            "name": "CanoCrystal Industries",
            "about": "Leading manufacturer of premium tile adhesives and grouts, trusted by professionals worldwide.",
            "phone": "+91-9999999999",
            "email": "info@canocrystal.com",
            "address": "Industrial Area, New Delhi, India"
        }
        
        await db.company_info.update_one(
            {"name": company_info["name"]},
            {"$set": company_info},
            upsert=True
        )
        print("✅ Seeded company information")
        
        # Create default admin user
        print("\n👤 Creating default admin user...")
        from passlib.context import CryptContext
        pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        
        admin_user = {
            "username": "admin",
            "hashed_password": pwd_context.hash("admin123")
        }
        
        await db.users.update_one(
            {"username": "admin"},
            {"$set": admin_user},
            upsert=True
        )
        print("✅ Created admin user (username: admin, password: admin123)")
        
        # Final counts
        print("\n" + "="*50)
        print("🎉 DATABASE SEEDING COMPLETE!")
        print("="*50)
        
        final_products = await db.products.count_documents({})
        final_brands = await db.brands.count_documents({})
        final_users = await db.users.count_documents({})
        
        # Count by brand
        canobond_count = await db.products.count_documents({"brand": "canobond"})
        blackberry_count = await db.products.count_documents({"brand": "blackberry"})
        furniture_count = await db.products.count_documents({"brand": "furniture"})
        
        print(f"\n📊 Final Database State:")
        print(f"   Total Products: {final_products}")
        print(f"     - CanoBond: {canobond_count} products")
        print(f"     - Blackberry: {blackberry_count} products")
        print(f"     - Furniture: {furniture_count} products")
        print(f"   Total Brands: {final_brands}")
        print(f"   Admin Users: {final_users}")
        
        print(f"\n✅ Your production database is ready!")
        print(f"   Website: https://crystal-brands-1.preview.emergentagent.com")
        print(f"   Admin Panel: https://crystal-brands-1.preview.emergentagent.com/admin")
        print(f"   Login: admin / admin123")
        
    except Exception as e:
        print(f"\n❌ Error during seeding: {str(e)}")
        import traceback
        traceback.print_exc()
    finally:
        client.close()
        print("\n🔒 Database connection closed")

if __name__ == "__main__":
    print("="*50)
    print("  CanoCrystal Production Database Seeder")
    print("="*50)
    asyncio.run(seed_production_database())
