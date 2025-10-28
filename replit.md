# Leekshotit Photography Portfolio Website

## Overview

This is a modern photography portfolio website showcasing the work of photographer Abdulmalik Ajisegiri (Leekshotit brand), a self-taught HTX/DTX photographer, videographer, and artist. Built with Next.js 14, the application features a clean, minimalist, professional dark-themed design with blue accents (#2563EB) that puts the photography work front and center. The site serves as a comprehensive online presence featuring four main photography categories: Portraits, Graduation, Creative Projects, and Concerts/Events.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 14 with App Router
- Server-side rendering (SSR) enabled by default for optimal performance
- TypeScript for type safety throughout the application
- App Router structure (`src/app/`) for modern Next.js development patterns

**UI Component Strategy**: Component-based architecture with clear separation of concerns
- **Common Components** (`src/components/common/`): Reusable UI elements like Header, NavBar, MainButton, and Socials
- **Card Components** (`src/components/cards/`): Specialized card layouts for About, Portfolio, Service, and Testimonial sections
- **Section Components** (`src/components/sections/`): Full-page sections including Hero, About, Service, Portfolio, FAQ, Testimonial, Footer, and LargeText
- **UI Primitives** (`src/components/ui/`): Shadcn-based components for Accordion, Button, and Separator

**Styling Approach**: Utility-first CSS with Tailwind CSS
- Custom color palette defined in `tailwind.config.ts` featuring primary blue (#2563EB), dark backgrounds, and various gray tones
- Tailwind CSS with custom theme extensions for brand-specific colors (Leekshotit blue)
- Dark mode enabled via class-based strategy
- Responsive design using Tailwind's responsive modifiers (md:, lg:, xl:)
- Clean, minimalist, professional design with subtle sophisticated color accents
- Custom animations for accordion interactions and hover effects

**Typography**: Google Fonts integration
- Manrope font family loaded with weights 400, 500, and 600
- Font optimization through Next.js font loader

**Design Philosophy**:
- Mobile-first responsive design approach
- Dark theme throughout with blue (#2563EB) accents
- Clean, minimalist, professional design - photography-focused, not busy
- Grid-based layouts that adapt from single column (mobile) to multi-column (desktop)
- Image-heavy presentation suitable for portfolio showcase
- Sophisticated color-coded pricing tiers (bronze/copper, silver/gray, gold, platinum/blue)

### Component Design Patterns

**State Management**: Client-side state using React hooks
- Minimal state requirements (e.g., mobile menu toggle in NavBar)
- No global state management library needed due to static nature of portfolio

**Props-based Architecture**: Components receive data through TypeScript-typed props
- Interface definitions for type safety (e.g., `IProps` interfaces in card components)
- Flexible component composition with optional props

**Icon Strategy**: Mix of image assets and Lucide React icons
- Static images stored in `/public/images/` directory
- Lucide React for common icons like ArrowRight, ChevronDown, X, and Loader2

### Data Management

**Content Strategy**: Hardcoded data within components and dedicated data files
- Static portfolio items, service information defined in components
- Blog content in dedicated data file (`src/lib/blogData.ts`) with 4 sample posts
- Portfolio category data with photo arrays for each collection
- Constants file (`src/lib/constant.ts`) for photographer information (Leekshotit brand)
- No database or CMS integration in current implementation
- All images served statically from public directory (currently placeholder images)

**Rationale**: Chosen for simplicity as portfolio content changes infrequently. Future enhancement could add a headless CMS for easier content updates without code changes.

**Alternatives Considered**: 
- CMS integration (Contentful, Sanity) - Would add complexity for infrequent updates
- Markdown-based content - Could be viable for blog-style updates but overkill for static portfolio

### Navigation & Routing

**Multi-Page Application**: Full site structure with dedicated pages
- **Landing Page** (`/`): Splash screen with photographer name, brand, and "Enter Portfolio" button - serves as entry point to the full portfolio
- **Home** (`/home`): Main portfolio page with Hero section, collections preview, services overview
- **About** (`/about`): Photographer bio and story
- **Collections** (`/collections`): Overview of all 4 photography categories
  - **Individual Category Pages** (`/collections/[category]`): Detailed photo galleries for each category (Portraits, Graduation, Creative Projects, Concerts/Events) with lightbox functionality
- **Blog** (`/blog`): Blog listing page with photography tips and behind-the-scenes content
  - **Individual Blog Posts** (`/blog/[slug]`): Full article pages with related posts
- **Booking & Services** (`/services`): Comprehensive pricing page with 3 session types and Calendly booking integration
- **Contact** (`/contact`): Enhanced contact form for general inquiries, custom projects, and collaboration opportunities
- Navigation menu includes: Home (links to /home), About Me, Collections, Blog, Booking, Contact Me (button)
- User flow: Visitor lands on splash page (/) → clicks "Enter Portfolio" → enters full portfolio site (/home)

### Performance Optimizations

**Image Handling**: Next.js Image component NOT used; standard `<img>` tags throughout
- ESLint rule disabled for img elements
- Trade-off: Easier implementation vs. automatic optimization
- Consider migrating to Next.js Image component for automatic optimization, lazy loading, and responsive images

**Code Splitting**: Automatic through Next.js App Router
- Each section component can be lazy-loaded if needed
- Currently all components loaded together due to single-page nature

## External Dependencies

### UI Component Library

**Shadcn UI**: Accessible component primitives built on Radix UI
- `@radix-ui/react-accordion`: Collapsible FAQ sections
- `@radix-ui/react-separator`: Visual dividers between sections
- `@radix-ui/react-slot`: Component composition utility
- Provides accessible, unstyled components that are styled with Tailwind

### Styling & Utilities

**Tailwind CSS Ecosystem**:
- `tailwindcss`: Core utility-first CSS framework
- `tailwind-merge`: Intelligent merging of Tailwind class names
- `tailwindcss-animate`: Animation utilities for accordion and transitions
- `autoprefixer` & `postcss`: CSS processing pipeline

**Class Management**:
- `clsx`: Conditional class name construction
- `class-variance-authority`: Type-safe component variants

### Icons & Visual Elements

**Lucide React**: Icon library for modern, customizable icons
- Lightweight, tree-shakeable icon components
- Used sparingly alongside custom image assets

### Development Tools

**TypeScript**: Full type safety across the application
- Strict mode enabled for maximum type checking
- Custom type definitions for component props

**ESLint**: Code quality and consistency
- Next.js recommended configuration (`next/core-web-vitals`)
- Custom rule to allow standard img elements

### Deployment Platform

**Vercel**: Hosting and deployment
- Optimized for Next.js applications
- Automatic deployments from Git
- Custom domain support
- No additional configuration required due to Next.js convention

### Notable Absence

**No Database**: Application is entirely static with no backend data persistence
- All content is frontend-only
- No user authentication or dynamic data fetching
- Future enhancements could add a database for dynamic portfolio management or contact form submissions

**API Routes**: Basic API routes for form submissions
- Contact form API route (`/api/contact/route.ts`) - currently logging to console
- Booking form API route (`/api/booking/route.ts`) - currently logging to console
- Email service integration pending (Resend, SendGrid, or Replit Mail recommended)
- Forms are functional but need email service setup to send actual emails

## Site Features

### Photography Collections
- **4 Main Categories**: Portraits, Graduation, Creative Projects, Concerts/Events
- **Individual Gallery Pages**: Each category has its own page with 9-12 photos in a responsive grid
- **Lightbox Viewer**: Click any photo to view full-screen with overlay and close button
- **Portfolio Navigation**: Clickable cards on homepage and collections page link to individual galleries

### Pricing & Services
- **Graduation Sessions**: Bronze ($220), Silver ($310), Gold ($400)
- **Solo Sessions**: Bronze ($185), Silver ($220), Gold ($310), Platinum ($400)
- **Events/Concerts**: $100/hour
- **Pricing Details**: 50% deposit required, 3-9 day delivery, $50 upcharge for 24hr rush delivery
- **Color-Coded Tiers**: Bronze (#CD7F32), Silver (#C0C0C0), Gold (#FFD700), Platinum (#2563EB blue)
- **Booking Integration**: Calendly widget placeholder ready for photographer's scheduling account (free tier available)

### Blog Section
- **Blog Listing Page** (`/blog`): Shows all blog posts in 2-column grid with featured images
- **Sample Content**: 4 blog posts covering photography tips, lighting techniques, graduation sessions, and creative projects
- **Individual Post Pages**: Full article layout with featured image, content, and related posts section
- **Categories**: Photography Tips, Lighting, Session Planning, Behind the Scenes

### Contact & Booking
- **Contact Page**: Enhanced contact form for general inquiries, custom projects, collaborations, and media inquiries
- **Booking & Services Page**: Displays pricing tables and Calendly widget for session bookings (placeholder ready for embed code)
- **Form Status**: Contact form functional with API route but email service integration pending
- **Calendly Integration**: Free scheduling tool recommended - photographer needs to create account and paste embed code