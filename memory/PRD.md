# CanoCrystal Website - Product Requirements Document

**Created:** March 14, 2026  
**Last Updated:** March 14, 2026  
**Status:** MVP Complete (Frontend Only)

---

## Project Overview

CanoCrystal is a premium multi-brand website showcasing three distinct brands:
- **CanoBond**: Construction chemicals (tile adhesive, grout, cleaner, hardener)
- **Blackberry**: Premium chemical solutions
- **Furniture**: Luxury modern furniture collection

**Design Theme:** Light premium aesthetic with crystal/sphere concept, smooth animations, and clean navigation.

---

## User Personas

1. **Construction Professionals**: Seeking high-quality construction chemicals and adhesives
2. **Interior Designers**: Looking for premium furniture and design solutions
3. **Distributors**: Interested in partnership opportunities
4. **End Consumers**: Homeowners seeking quality products for renovation/furnishing

---

## Core Requirements (Static)

### Design System
- **Typography:** Space Grotesk (headings), Inter (body)
- **Background:** #F7F8FA (light premium)
- **Brand Colors:**
  - CanoCrystal Blue: #4C8FFF
  - CanoBond Orange: #FF6A00
  - Blackberry Purple: #6B4DFF
  - Furniture Wood: #8A5A3B

### Key Features
- Light premium theme (no dark gradients)
- CSS-based animated spheres with floating effects
- Smooth scrolling and hover interactions
- Responsive design (mobile, tablet, desktop)
- Clean navigation with fixed header
- Contact form with validation
- Product showcase with image galleries

---

## What's Been Implemented ✅

### Phase 1: Frontend MVP (March 14, 2026)

**Components Created:**
1. **Loader** - Crystal particle assembly animation with brand beams (2s duration)
2. **Header** - Fixed navigation with smooth scroll, mobile menu
3. **Hero Section** - Interactive crystal spheres representing three brands with hover effects
4. **Products Showcase** - Grid layout with 12 products across three brands
5. **Brands Ecosystem** - "One Crystal, Three Brands" section with detailed cards
6. **Technology Section** - 4-step process visualization with features grid
7. **Industries Section** - 4 industry cards with stats (500+ projects, 200+ distributors, 15+ years)
8. **Contact Section** - Form with email/phone/address info + distributor inquiry
9. **Footer** - Comprehensive links, social media, company info

**Technical Implementation:**
- Mock data in `/app/frontend/src/mockData.js`
- Shadcn UI components for buttons, inputs, cards
- Lucide React icons (no emoji icons)
- Google Fonts: Space Grotesk + Inter
- Custom animations: floating spheres, smooth transitions
- Form handling with toast notifications
- All images from Unsplash/Pexels via vision expert

**Design Compliance:**
✅ Light premium theme (#F7F8FA background)
✅ No dark gradients or emoji icons
✅ Brand-specific color coding
✅ Smooth micro-animations on hover
✅ Proper spacing and typography hierarchy
✅ Mobile responsive design

---

## Prioritized Backlog

### P0 Features (Next Phase)
- [ ] Backend API development (FastAPI)
- [ ] MongoDB integration for products/contacts
- [ ] Contact form email integration
- [ ] Product detail pages
- [ ] Brand individual pages (CanoBond, Blackberry, Furniture)

### P1 Features
- [ ] Product search and filtering
- [ ] Image gallery lightbox
- [ ] Distributor application form with backend
- [ ] Admin panel for product management
- [ ] SEO optimization (meta tags, sitemap)

### P2 Features
- [ ] 3D sphere upgrade (Three.js) - optional enhancement
- [ ] Advanced animations (tile bonding visualization)
- [ ] Multi-language support
- [ ] Product comparison feature
- [ ] Customer testimonials section
- [ ] Case studies/projects gallery

---

## Next Tasks

1. **Get user feedback** on frontend design and flow
2. **Plan backend architecture:**
   - Products API (CRUD operations)
   - Contact form submission with email notifications
   - Distributor inquiry handling
   - Image upload for products
3. **Create individual brand pages** with detailed product catalogs
4. **Implement product detail pages** with specifications
5. **Add backend and test end-to-end functionality**

---

## Technical Stack

**Frontend:**
- React 19
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- React Router DOM

**Backend (Planned):**
- FastAPI
- MongoDB (Motor async driver)
- Email service integration

**Deployment:**
- Frontend: Port 3000
- Backend: Port 8001
- Environment: Emergent Preview

---

## Mock Data Structure

Currently using frontend mock data for:
- 4 CanoBond products
- 3 Blackberry products
- 4 Furniture products
- Brand information
- Industry details
- Contact info

**Note:** All data is static and stored in `/app/frontend/src/mockData.js`. Backend integration will replace this with dynamic API calls.

---

## Success Metrics (To Be Implemented)

- Page load time < 2 seconds
- Contact form submission rate
- Distributor inquiry conversions
- Mobile traffic engagement
- Product page views
- Brand page navigation patterns
