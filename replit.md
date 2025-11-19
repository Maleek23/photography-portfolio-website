# Leekshotit Photography Portfolio Website

## Overview
This project is a modern, professional, dark-themed photography portfolio website for Abdulmalik Ajisegiri (Leekshotit brand), a self-taught HTX/DTX photographer, videographer, and artist. Built with Next.js 14, the site showcases four main photography categories: Portraits, Graduation, Creative Projects, and Concerts/Events. Its purpose is to provide a comprehensive online presence, highlight the photographer's work with a clean, minimalist design, and facilitate client bookings. The business vision is to establish a strong online brand for Leekshotit, attract clients through a visually appealing portfolio, and streamline the booking process.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The design emphasizes a clean, minimalist, professional dark theme with blue accents (#2563EB), a mobile-first responsive approach, grid-based layouts, and an image-heavy presentation. Typography uses the Manrope font family. Custom animations are used for accordion interactions, hover effects, and scroll-triggered fade-in animations, respecting `prefers-reduced-motion`. A custom camera shutter cursor is applied to general UI elements. Pricing tiers are sophisticated and color-coded. The portfolio gallery uses a CSS column masonry layout with native `<img>` tags to preserve exact original aspect ratios, featuring an edge-to-edge design.

### Technical Implementations
The frontend is built with Next.js 14's App Router, leveraging server-side rendering and TypeScript. A component-based architecture separates UI elements, with UI primitives from Shadcn UI. Styling uses Tailwind CSS with a custom color palette, supporting dark mode and responsive design. Content is primarily hardcoded in dedicated data files. Navigation includes a landing splash page, home, about, collections (with individual category pages and lightbox), projects (with featured landing page and individual case study pages), blog (with individual posts), services (with pricing comparison and before/after slider), and contact pages. Performance is enhanced through scroll-triggered animations and automatic code splitting.

**Image Optimization**: All images use Next.js `Image` component with:
- Lazy loading for below-the-fold content
- Priority loading for above-the-fold hero images
- Responsive sizing
- Quality settings: 85 for thumbnails/galleries, 90-95 for hero/lightbox
- Custom glassmorphism skeleton loader (`ImageSkeleton` component)
- Shimmer animation during load states
- WebP/AVIF image formats are configured for automatic conversion.

### Feature Specifications
The site features four main photography categories with individual gallery pages and a lightbox viewer. A dedicated Projects section showcases complete case studies with 10-15 image galleries, project stories, technical details, and optional video embeds. Pricing and services are detailed for Graduation, Solo, and Events/Concerts sessions, with a comparison chart showing package differences, before/after editing slider, and color-coded tiers including deposit requirements and delivery times. A blog section displays photography tips and behind-the-scenes content. An enhanced contact form and a booking page with Calendly integration are provided. A sticky "Book Session" CTA appears after scrolling to improve conversion. A custom 404 page maintains brand consistency.

### System Design Choices
The project prioritizes a static site approach with no database integration for initial simplicity. The architecture is modular and scalable. Accessibility is considered with `prefers-reduced-motion` support and accessible Shadcn UI components. SEO is a core focus, including comprehensive metadata (with location-based keywords), Open Graph tags, Twitter Card tags, canonical URLs, and JSON-LD structured data.

## External Dependencies

*   **Shadcn UI**: Accessible component primitives built on Radix UI.
*   **Tailwind CSS Ecosystem**: For utility-first styling.
*   **Class Management**: `clsx` and `class-variance-authority` for conditional and type-safe component variants.
*   **Lucide React**: Lightweight icon library.
*   **Google Fonts**: Manrope font family.
*   **Resend**: Professional email service for transactional emails.
*   **Google Analytics 4**: For traffic tracking.
*   **Vercel**: Deployment platform optimized for Next.js.
*   **Calendly**: External scheduling tool (placeholder integrated).