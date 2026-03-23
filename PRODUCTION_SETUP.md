# Production Database Seeding Instructions

## Issue Summary
Your production deployment is working correctly, but the MongoDB Atlas database is empty. The 404 errors in the logs are just security scanners probing for config files (safe to ignore).

## Solution: Seed Your Production Database

### Option 1: Run Seed Script in Production (Recommended)

**Step 1: Access your production pod/container**
```bash
# SSH or exec into your production Kubernetes pod
kubectl exec -it <your-pod-name> -- /bin/bash
```

**Step 2: Set environment variables**
```bash
export MONGO_URL="your-mongodb-atlas-connection-string"
export DB_NAME="canocrystal_db"
```

**Step 3: Run the seeding script**
```bash
cd /app/backend
python3 seed_production.py
```

The script will:
- ✅ Connect to your MongoDB Atlas database
- ✅ Seed 3 brands (CanoBond, Blackberry, Furniture)
- ✅ Seed 20 products (10 CanoBond + 10 Blackberry + 3 Furniture)
- ✅ Create company information
- ✅ Create default admin user (admin/admin123)

### Option 2: Use Existing Seed Script

If you prefer the existing seed script in `/app/backend/scripts/seed_data.py`:

```bash
cd /app/backend
python3 -m scripts.seed_data
```

### Option 3: Manual MongoDB Import

**Step 1: Export data from preview environment**
```bash
# In your preview/development environment
mongodump --uri="mongodb://localhost:27017/test_database" --out=/tmp/db_backup
```

**Step 2: Import to production**
```bash
mongorestore --uri="your-mongodb-atlas-connection-string" /tmp/db_backup/test_database --nsFrom="test_database.*" --nsTo="canocrystal_db.*"
```

## Verifying the Seed

After seeding, test these API endpoints:

```bash
# Check products
curl https://your-domain.com/api/products

# Check CanoBond products
curl https://your-domain.com/api/products?brand=canobond

# Check Blackberry products
curl https://your-domain.com/api/products?brand=blackberry

# Check brands
curl https://your-domain.com/api/brands
```

You should see all 20 products returned.

## About the 404 Errors in Logs

The 404 errors you see for `/api/.env`, `/api/config`, etc. are **NOT errors** - they're security scanners/bots trying to find sensitive files. Your application is correctly returning 404, which means:
- ✅ Your sensitive files are protected
- ✅ No security vulnerability
- ✅ This is normal and expected

These can be safely ignored.

## Production Database Configuration

Make sure your production environment has these variables set:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=canocrystal_db
```

## Need Help?

If you encounter any issues:
1. Check MongoDB Atlas connection string is correct
2. Verify network access is allowed from your production IP
3. Check database user has read/write permissions
4. Review production logs for any connection errors

## Summary

Your code is **deployment-ready** ✅ - no code changes needed. The only issue is an empty database, which is solved by running the seed script once in production.
