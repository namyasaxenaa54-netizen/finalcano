# 🚀 VERCEL DEPLOYMENT GUIDE

## Overview
This guide covers deploying your full-stack CanoCrystal website to production.

**Architecture:**
- Frontend: Vercel (React)
- Backend: Railway/Render (FastAPI)
- Database: MongoDB Atlas (Cloud)

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### 1. MongoDB Atlas Setup (FREE)
✅ Go to: https://cloud.mongodb.com
✅ Create free cluster (M0 Sandbox)
✅ Create database user
✅ Whitelist all IPs: `0.0.0.0/0`
✅ Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/`

### 2. Backend Deployment (Choose One)

#### Option A: Railway (RECOMMENDED - FREE Tier)
✅ Go to: https://railway.app
✅ Sign up with GitHub
✅ Click "New Project" → "Deploy from GitHub repo"
✅ Select your backend repository
✅ Add Environment Variables:
   ```
   MONGO_URL=mongodb+srv://...
   DB_NAME=canocrystal_production
   SECRET_KEY=your-secret-key-min-32-chars
   CORS_ORIGINS=https://your-app.vercel.app
   ```
✅ Railway will auto-deploy
✅ Copy your Railway URL: `https://your-app.railway.app`

#### Option B: Render (FREE Tier)
✅ Go to: https://render.com
✅ Sign up
✅ New → Web Service
✅ Connect GitHub repository (backend folder)
✅ Settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
✅ Add Environment Variables (same as above)
✅ Copy Render URL: `https://your-app.onrender.com`

### 3. Seed Database (IMPORTANT!)
Once backend is deployed, run seed script:

**Option 1: Railway**
```bash
railway run python scripts/seed_data.py
```

**Option 2: Render**
- Go to Shell tab
- Run: `python scripts/seed_data.py`

**Option 3: Local to Production DB**
```bash
# Update backend/.env with production MONGO_URL
python backend/scripts/seed_data.py
```

---

## 🌐 FRONTEND DEPLOYMENT (VERCEL)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/yourusername/canocrystal.git
git push -u origin main
```

### Step 2: Deploy to Vercel
✅ Go to: https://vercel.com
✅ Sign up with GitHub
✅ Click "New Project"
✅ Import your repository
✅ **Important:** Set Root Directory to `frontend`
✅ Framework Preset: Create React App
✅ Build Command: `yarn vercel-build` (or `yarn build`)
✅ Output Directory: `build`

### Step 3: Environment Variables
Add in Vercel dashboard → Settings → Environment Variables:

```
REACT_APP_BACKEND_URL = https://your-backend.railway.app
```

Replace with your actual Railway/Render URL!

### Step 4: Deploy
✅ Click "Deploy"
✅ Wait 2-3 minutes
✅ Your site is live! 🎉

---

## 🔧 POST-DEPLOYMENT

### 1. Test Your Website
✅ Visit your Vercel URL
✅ Check all pages load
✅ Test brand pages (CanoBond, Blackberry, Furniture)
✅ Verify products display

### 2. Test Admin Panel
✅ Go to: `https://your-site.vercel.app/admin/login`
✅ Login: `admin` / `admin123`
✅ **IMMEDIATELY CHANGE PASSWORD!**

### 3. Change Admin Password
```bash
# Option 1: Create new admin user via API
curl -X POST https://your-backend.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@domain.com",
    "username": "newadmin",
    "password": "your-secure-password"
  }'

# Option 2: Delete old admin from MongoDB and create new one
```

### 4. Custom Domain (Optional)
✅ Vercel: Settings → Domains → Add Domain
✅ Follow DNS instructions
✅ SSL automatically configured

---

## 🔍 TROUBLESHOOTING

### Frontend Issues

**Error: "Failed to fetch"**
- Check `REACT_APP_BACKEND_URL` in Vercel env vars
- Ensure backend URL is correct (no trailing slash)
- Check backend is running

**Build fails on Vercel**
- Check logs in Vercel dashboard
- Ensure `vercel-build` script exists in package.json
- Root directory set to `frontend`

**Images not loading**
- Check if image URLs are accessible
- Verify CORS on backend

### Backend Issues

**502 Bad Gateway**
- Backend crashed, check logs
- Verify environment variables
- Check MongoDB connection string

**CORS errors**
- Add Vercel domain to `CORS_ORIGINS`
- Format: `https://your-app.vercel.app,https://custom-domain.com`

**Database connection fails**
- Whitelist IPs in MongoDB Atlas: `0.0.0.0/0`
- Check connection string format
- Verify database user credentials

---

## 📊 MONITORING

### Check Backend Health
```bash
curl https://your-backend.railway.app/api/
```

Should return:
```json
{
  "message": "CanoCrystal API",
  "version": "1.0.0"
}
```

### Check Database
- MongoDB Atlas → Collections
- Verify data exists:
  - brands: 3 documents
  - products: 11 documents
  - company_info: 1 document
  - admin_users: 1+ documents

---

## 💰 COSTS

**FREE TIER LIMITS:**
- **Vercel**: 100 GB bandwidth/month (FREE forever)
- **Railway**: $5 free credits/month
- **Render**: 750 hours/month (FREE)
- **MongoDB Atlas**: 512 MB storage (FREE)

**Your app should run FREE for several months!**

---

## 🎯 FINAL CHECKLIST

Before going live:
✅ Database seeded with products
✅ Backend deployed and responding
✅ Frontend deployed and loading
✅ All pages working
✅ Admin panel accessible
✅ Default admin password changed
✅ Custom domain configured (optional)
✅ SEO meta tags verified
✅ Mobile responsive tested

---

## 🆘 NEED HELP?

Common commands:

**Check Vercel deployment:**
```bash
vercel logs your-app-name
```

**Check Railway logs:**
```bash
railway logs
```

**Test API endpoint:**
```bash
curl https://your-backend.railway.app/api/products
```

---

## ✨ YOU'RE LIVE!

Your website is now:
✅ Accessible worldwide
✅ Automatically scaled
✅ SSL secured (HTTPS)
✅ CDN optimized
✅ SEO ready

**Share your link:**
`https://your-app.vercel.app` 🎉

---

*Need help? Check logs, verify environment variables, and ensure database is seeded!*
