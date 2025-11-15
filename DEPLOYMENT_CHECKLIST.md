# 🚀 Deployment Checklist - Leekshotit Photography Website

## ✅ **COMPLETED - READY FOR YOU**

### **UI Improvements**
- [x] Custom 404 error page with glassmorphism design
- [x] Pricing comparison chart (desktop table + mobile accordion)
- [x] Before/After slider component for editing showcase
- [x] Enhanced Services page with comparison + editing showcase
- [x] Projects feature (/projects page + individual project pages)
- [x] Updated NavBar with Projects link
- [x] Fixed sitemap.xml with correct blog URLs and dates

---

## 📋 **WHAT YOU NEED TO DO BEFORE LAUNCH**

### **1. CRITICAL - Portfolio Images** 🖼️

#### **For Projects Page (Priority #1)**
Each project needs 10-15 unique images:

**Location:** Replace placeholder images in `src/lib/projectData.ts`

**Current placeholders:**
```typescript
images: [
  "/images/creative-smoke.jpg",  // <-- Replace all 12 of these
  "/images/portrait-yellow.jpg",  // with your actual project images
  // ... (10-15 total per project)
]
```

**What to do:**
1. Upload your real project images to `public/images/`
2. Name them clearly: `downtown-editorial-1.jpg`, `downtown-editorial-2.jpg`, etc.
3. Update `images` array in each project:
   ```typescript
   images: [
     "/images/downtown-editorial-1.jpg",
     "/images/downtown-editorial-2.jpg",
     // ... 10-15 total
   ],
   ```

**Pro tip:** Keep all images from ONE shoot together per project!

---

#### **For Collections Pages**
Replace the repeated placeholder images in `src/app/collections/[category]/page.tsx`:

**Portraits:** Currently shows same yellow portrait × 9
**Graduation:** Currently shows same Nike grad photo × 9  
**Creative Projects:** Currently shows same smoke image × 9
**Concerts/Events:** Currently shows mixed placeholders × 9

---

#### **For Before/After Slider**
Add 2 images showing your editing work:

**Location:** `public/images/`

**Files needed:**
- `before-example.jpg` (RAW/unedited photo)
- `after-example.jpg` (your edited version with LUT applied)

These are referenced in Services page (line ~385)

---

### **2. CRITICAL - Video Setup** 🎥

#### **For Project Pages**
Add your YouTube or Vimeo videos:

**Location:** `src/lib/projectData.ts`

**Current:**
```typescript
videoUrl: "", // Empty = no video shown
```

**How to add:**

**Option A: YouTube Embed**
```typescript
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

**Option B: Vimeo Embed**
```typescript
videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID"
```

**If you don't have videos yet:** Leave blank - hero image will show instead

---

### **3. CRITICAL - Email Configuration** 📧

**Problem:** Your contact/booking forms use Resend demo email that won't work

**Location:** 
- `src/app/api/contact/route.ts` (line 16)
- `src/app/api/booking/route.ts` (line 24)

**Current (broken):**
```typescript
from: 'Leekshotit Portfolio <onboarding@resend.dev>'
```

**What to do:**

**Option 1: Use Resend with Custom Domain (Recommended)**
1. Go to [resend.com/domains](https://resend.com/domains)
2. Add your domain `leekshotit.com`
3. Add the DNS records they provide to your domain settings
4. Verify domain
5. Update both files to:
   ```typescript
   from: 'Bookings <bookings@leekshotit.com>'
   ```

**Option 2: Use Gmail SMTP**
- Configure Gmail SMTP instead of Resend
- Update API routes to use nodemailer + Gmail

**Option 3: Keep as-is for testing**
- Forms will log to console but NOT send emails
- Not recommended for production

---

### **4. CRITICAL - Google Search Console** 🔍

**Problem:** Placeholder verification code

**Location:** `src/app/layout.tsx` (line 53)

**Current:**
```typescript
verification: {
  google: 'your-google-verification-code-here',
}
```

**What to do:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `leekshotit.com`
3. Choose "HTML tag" verification method
4. Copy the code from: `<meta name="google-site-verification" content="COPY_THIS_PART" />`
5. Replace in layout.tsx:
   ```typescript
   verification: {
     google: 'ABC123XYZ...',  // Your actual code
   }
   ```

---

### **5. Add Phone Number** 📞

**Location:** `src/app/layout.tsx` (line 86)

**Current:**
```typescript
"telephone": "+1-XXX-XXX-XXXX",
```

**Update to:**
```typescript
"telephone": "+1-555-123-4567",  // Your actual number
```

**Why:** Shows in Google search results and structured data

---

### **6. PWA Files** 📱

#### **Missing Files:**
- `public/favicon.ico` (currently only have .svg)
- `public/apple-touch-icon.png` (referenced but missing)

**How to create:**
1. Use your logo (`public/images/logo.png`)
2. Resize to:
   - **favicon.ico:** 32×32px
   - **apple-touch-icon.png:** 180×180px
3. Upload to `public/` folder

**Online tools:**
- [Favicon Generator](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

---

### **7. Update Project Content** 📝

**Location:** `src/lib/projectData.ts`

**What to update:**
1. **Project titles** - Real shoot names
2. **Client names** - Keep as "Private Client" or add real names
3. **Dates** - Actual shoot dates
4. **Story paragraphs** - Your real shoot experience
5. **Technical details** - Your actual camera/lenses/settings

**Example:**
```typescript
{
  title: "Senior Graduation Editorial",  // Real name
  client: "Sarah Johnson",  // Or keep "Private Client"
  date: "May 2024",  // Actual date
  story: [
    "Sarah wanted to celebrate her achievement...",  // Your real story
    // ... etc
  ],
  technicalDetails: {
    camera: "Sony A7III",  // Your actual gear
    lenses: "35mm f/1.8, 85mm f/1.8",
    lighting: "Natural + reflector",
    lut: "Urban Teal preset",
  },
}
```

---

## 🧪 **TESTING CHECKLIST**

### **Before Deploying:**

- [ ] **Test Contact Form**
  1. Go to `/contact`
  2. Fill out form
  3. Submit
  4. Check email at `leekshotit@gmail.com`
  5. ✅ Should receive email

- [ ] **Test Booking Form**
  1. Go to `/services`
  2. Click "Book Now" on any package
  3. Opens Calendly? ✅
  4. If not, check Calendly URL in `src/lib/pricingData.ts`

- [ ] **Test Projects**
  1. Go to `/projects`
  2. Click on a project
  3. Gallery images load? ✅
  4. Click image → Lightbox opens? ✅
  5. Video shows (if URL added)? ✅

- [ ] **Test Mobile**
  1. Open on phone (or Chrome DevTools → mobile view)
  2. Nav menu works? ✅
  3. Images load properly? ✅
  4. Forms work? ✅
  5. Text readable (16px minimum)? ✅

- [ ] **Run Lighthouse Audit**
  1. Open Chrome DevTools (F12)
  2. Lighthouse tab
  3. Generate report
  4. **Target scores:**
     - Performance: 90+
     - Accessibility: 95+
     - Best Practices: 90+
     - SEO: 95+

---

## 🔒 **SECURITY (DO LATER)**

### **Add Input Sanitization**
Currently forms don't sanitize user input. Not critical for launch but should add soon:

```bash
npm install isomorphic-dompurify
```

**Update API routes:**
```typescript
import DOMPurify from 'isomorphic-dompurify';

const cleanName = DOMPurify.sanitize(name);
const cleanMessage = DOMPurify.sanitize(message);
```

### **Add Rate Limiting**
Prevent spam submissions:

```bash
npm install next-rate-limit
```

---

## 📊 **ANALYTICS SETUP**

### **Google Analytics 4**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create GA4 property for `leekshotit.com`
3. Get Measurement ID (looks like `G-XXXXXXXXXX`)
4. Already set in Replit Secrets as `NEXT_PUBLIC_GA_ID`
5. ✅ Should work automatically

### **Vercel Analytics** (After deploying to Vercel)
1. In Vercel dashboard
2. Your project → Analytics tab
3. Enable analytics
4. Free tier = 100k page views/month

---

## 🎯 **DEPLOYMENT TO VERCEL**

### **Before First Deploy:**
1. ✅ Complete items 1-7 above
2. ✅ Test everything locally
3. ✅ Push to GitHub

### **Deploy:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. **Environment Variables to add:**
   - `RESEND_API_KEY` = (your Resend API key)
   - `NEXT_PUBLIC_GA_ID` = (your Google Analytics ID)
4. Deploy!

### **After Deploy:**
1. Add custom domain `leekshotit.com`
2. Test all forms work in production
3. Submit sitemap to Google: `https://leekshotit.com/sitemap.xml`

---

## 📌 **SUMMARY - DO FIRST:**

**Critical for launch (30 min):**
1. Replace 36+ placeholder images with your real photos
2. Add before/after editing images
3. Update project stories with real content
4. Add your phone number
5. Get Google verification code

**Important but can wait (1-2 days):**
1. Set up Resend custom domain email
2. Add video embeds to projects
3. Create favicon files
4. Test forms end-to-end

**Nice to have (1 week):**
1. Add input sanitization
2. Set up rate limiting
3. Run Lighthouse audit and optimize

---

## 🤔 **QUESTIONS?**

**Where are my projects showing?**
- Landing: `/projects` (grid of 3)
- Individual: `/projects/downtown-editorial-shoot`
- NavBar: Home → Collections → **Projects** → Booking

**How do I add more projects?**
- Edit `src/lib/projectData.ts`
- Copy existing project structure
- Add new entry to `projects` array

**Videos not showing?**
- Make sure `videoUrl` has YouTube/Vimeo embed URL
- Format: `https://www.youtube.com/embed/VIDEO_ID`
- If blank, hero image shows instead

**Forms not working?**
- Check Resend email address is configured
- Check `RESEND_API_KEY` environment variable
- Check browser console for errors (F12)

---

🎉 **You're almost there! Just swap the images and you're ready to launch!**
