# Leekshotit Photography Portfolio Website

## Overview
This project is a modern, professional, dark-themed photography portfolio website for Abdulmalik Ajisegiri (Leekshotit brand), a self-taught HTX/DTX photographer, videographer, and artist. Built with Next.js 14, the site showcases four main photography categories: Portraits, Graduation, Creative Projects, and Concerts/Events. Its purpose is to provide a comprehensive online presence, highlight the photographer's work with a clean, minimalist design, and facilitate client bookings. The business vision is to establish a strong online brand for Leekshotit, attract clients through a visually appealing portfolio, and streamline the booking process.

## Recent Changes (November 2025)

### Services Page Optimization (Nov 12, 2025)
- **Fixed Deliverables Misinformation**: Corrected "What You'll Receive" text to accurately state customers receive edited photos based on their package tier (NOT all raw images)
- **Implemented Accordion Policies**: Converted 6-card policy section to collapsible accordions
  - All policies visible by default (accessible, no hidden content)
  - Users can collapse sections they've read (opt-in simplification)
  - Reduces mobile scrolling while maintaining transparency
  - Glassmorphism styling preserved with smooth interactions
- Architect-approved for production

### UI/UX & Accessibility Improvements (Nov 12, 2025)
- **Mobile Accessibility**: Added mobile-optimized glassmorphism with increased contrast (8% opacity vs 5%)
- **Typography**: Ensured all body text meets 16px minimum on mobile for better readability
- **Services Page Enhancements**:
  - Added "How It Works" section with 4-step process (Book → Prep → Shoot → Delivery)
  - Added "What You'll Receive" deliverables information
  - Created "Custom Projects & Weddings" section with clear CTAs for future service expansion
  - Improved Calendly loading with graceful mailto fallback (no jarring alerts)
- **About Page**: Applied mobile-optimized glass classes to specialty cards for better contrast
- All changes architect-reviewed and accessibility-validated

### Performance Optimization (Nov 12, 2025)
- Converted all portfolio/collection images to Next.js Image component with automatic lazy loading
- Implemented glassmorphism-styled skeleton loading screens for smooth UX
- Optimized responsive image sizes for mobile/desktop (27+ images across site)
- Added shimmer animation for loading states
- Configured quality settings: 85 for galleries, 95 for lightbox modal
- Expected improvements: 50-70% faster page loads, improved Core Web Vitals (LCP, CLS, FID)

### About Page Complete Redesign (Nov 14, 2025)
- **Complete Layout Revamp**: Modernized entire page structure for better visual impact
  - Full-screen hero section with centered, balanced layout
  - Larger profile image (3:4 aspect ratio) with hover effects
  - Improved typography hierarchy with larger headings (5rem on desktop)
  - Better mobile-to-desktop responsive breakpoints
- **Simplified Bio**: Streamlined to 4 paragraphs focusing on core message
  - Emphasis on "intentionality in every frame" and "authentic collaboration"
  - Specialization in "high-end art" with cinematic quality
  - Removed melanin-richness detailed explanation for brevity
- **Enhanced Specialty Cards**: Added numbered icon badges (1-4) with hover effects
  - Portraits, Graduation, Creative Projects, Concerts & Events
  - Improved glassmorphism with scale animation on hover
- **Redesigned Philosophy Section**: Centered quote with decorative quotation mark
  - Large, bold typography (2.75rem) for maximum impact
- **Modern Contact Section**: Card-based layout with icon badges
  - Email card with envelope icon
  - Social media card with platform links
  - Improved CTA button styling with better shadows
- **Overall Improvements**: 6rem/8rem section padding, better spacing rhythm, enhanced glassmorphism effects

### SEO Optimization (Nov 2025)
- Added comprehensive metadata with location-based keywords (Houston, Dallas, HTX, DTX)
- Created sitemap.xml and robots.txt for search engine crawling
- Implemented FAQ schema and enhanced business schema with ratings
- Added route-level layouts for Services and About pages
- Google Business Profile description created (745 characters, SEO-optimized)

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The design emphasizes a clean, minimalist, professional dark theme with blue accents (#2563EB) to highlight photography. It features a mobile-first responsive approach, grid-based layouts, and an image-heavy presentation. Typography uses the Manrope font family from Google Fonts. Custom animations are used for accordion interactions and hover effects, alongside scroll-triggered fade-in animations for sections, respecting `prefers-reduced-motion`. A custom camera shutter cursor with 8 aperture blades in brand blue is applied to general UI elements. Pricing tiers are sophisticated and color-coded.

### Technical Implementations
The frontend is built with Next.js 14's App Router, leveraging server-side rendering and TypeScript for type safety. A component-based architecture separates UI elements into common, card, and section components, with UI primitives from Shadcn UI. Styling is managed using Tailwind CSS with a custom color palette, supporting dark mode and responsive design. 

**Image Optimization**: All images use Next.js `Image` component with:
- Lazy loading for below-the-fold content
- Priority loading for above-the-fold hero images
- Responsive sizing with `sizes` prop optimized per layout
- Quality settings: 85 for thumbnails/galleries, 90-95 for hero/lightbox
- Custom glassmorphism skeleton loader (`ImageSkeleton` component)
- Shimmer animation during load states

Content is primarily hardcoded for simplicity, with blog content in dedicated data files. Navigation is multi-page, including a landing splash page, home, about, collections (with individual category pages and lightbox), blog (with individual posts), services, and contact pages. Performance is enhanced through scroll-triggered animations using `IntersectionObserver`, and automatic code splitting.

### Feature Specifications
The site features four main photography categories with individual gallery pages and a lightbox viewer. Pricing and services are detailed for Graduation, Solo, and Events/Concerts sessions, including deposit requirements and delivery times, with color-coded tiers. A blog section displays photography tips and behind-the-scenes content. An enhanced contact form and a booking page with Calendly integration are provided. A sticky "Book Session" CTA appears after scrolling to improve conversion.

### System Design Choices
The project prioritizes a static site approach with no database integration for initial simplicity, with future consideration for CMS integration. The architecture is modular and scalable, with clear separation of concerns. Accessibility is considered with `prefers-reduced-motion` support and accessible Shadcn UI components. SEO is a core focus, including comprehensive metadata, Open Graph tags, Twitter Card tags, keywords, canonical URLs, and JSON-LD structured data for local SEO and business details.

## External Dependencies

*   **Shadcn UI**: Accessible component primitives built on Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-separator`, `@radix-ui/react-slot`).
*   **Tailwind CSS Ecosystem**: `tailwindcss`, `tailwind-merge`, `tailwindcss-animate`, `autoprefixer`, `postcss` for utility-first styling.
*   **Class Management**: `clsx` for conditional classes, `class-variance-authority` for type-safe component variants.
*   **Lucide React**: Lightweight icon library.
*   **Google Fonts**: Manrope font family.
*   **Resend**: Professional email service for transactional emails (`RESEND_API_KEY` required).
*   **Google Analytics 4**: For traffic tracking (`NEXT_PUBLIC_GA_ID` required).
*   **Vercel**: Deployment platform optimized for Next.js.
*   **Calendly**: External scheduling tool (placeholder integrated, requires embed code).