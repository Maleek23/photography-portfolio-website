# Leekshotit Photography Portfolio Website

## Overview
This project is a modern, professional, dark-themed photography portfolio website for Abdulmalik Ajisegiri (Leekshotit brand), a self-taught HTX/DTX photographer, videographer, and artist. Built with Next.js 14, the site showcases four main photography categories: Portraits, Graduation, Creative Projects, and Concerts/Events. Its purpose is to provide a comprehensive online presence, highlight the photographer's work with a clean, minimalist design, and facilitate client bookings. The business vision is to establish a strong online brand for Leekshotit, attract clients through a visually appealing portfolio, and streamline the booking process.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The design emphasizes a clean, minimalist, professional dark theme with blue accents (#2563EB) to highlight photography. It features a mobile-first responsive approach, grid-based layouts, and an image-heavy presentation. Typography uses the Manrope font family from Google Fonts. Custom animations are used for accordion interactions and hover effects, alongside scroll-triggered fade-in animations for sections, respecting `prefers-reduced-motion`. A custom camera shutter cursor with 8 aperture blades in brand blue is applied to general UI elements. Pricing tiers are sophisticated and color-coded.

### Technical Implementations
The frontend is built with Next.js 14's App Router, leveraging server-side rendering and TypeScript for type safety. A component-based architecture separates UI elements into common, card, and section components, with UI primitives from Shadcn UI. Styling is managed using Tailwind CSS with a custom color palette, supporting dark mode and responsive design. Image optimization is handled by the Next.js `Image` component for performance. Content is primarily hardcoded for simplicity, with blog content in dedicated data files. Navigation is multi-page, including a landing splash page, home, about, collections (with individual category pages and lightbox), blog (with individual posts), services, and contact pages. Performance is enhanced through image optimization, scroll-triggered animations using `IntersectionObserver`, and automatic code splitting.

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