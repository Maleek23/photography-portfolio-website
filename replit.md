# Photography Portfolio Website

## Overview

This is a modern photography portfolio website showcasing the work of photographer Damien Braun. Built with Next.js 14, the application features a responsive, dark-themed design that highlights photography services, portfolio work, client testimonials, and contact information. The site serves as a professional online presence for a photographer, allowing visitors to explore various photography categories including events, portraits, branding, commercial work, and weddings.

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
- Custom color palette defined in `tailwind.config.ts` featuring primary purple (#4A2CED), dark backgrounds, and various gray tones
- Tailwind CSS with custom theme extensions for brand-specific colors
- Dark mode enabled via class-based strategy
- Responsive design using Tailwind's responsive modifiers (md:, lg:, xl:)
- Custom animations for accordion interactions

**Typography**: Google Fonts integration
- Manrope font family loaded with weights 400, 500, and 600
- Font optimization through Next.js font loader

**Design Philosophy**:
- Mobile-first responsive design approach
- Dark theme throughout with purple accents
- Grid-based layouts that adapt from single column (mobile) to multi-column (desktop)
- Image-heavy presentation suitable for portfolio showcase

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

**Content Strategy**: Hardcoded data within components
- Static portfolio items, testimonials, FAQs, and service information defined as JavaScript arrays
- Constants file (`src/lib/constant.ts`) for portfolio owner information
- No database or CMS integration in current implementation
- All images served statically from public directory

**Rationale**: Chosen for simplicity as portfolio content changes infrequently. Future enhancement could add a headless CMS for easier content updates without code changes.

**Alternatives Considered**: 
- CMS integration (Contentful, Sanity) - Would add complexity for infrequent updates
- Markdown-based content - Could be viable for blog-style updates but overkill for static portfolio

### Navigation & Routing

**Single Page Application**: All content on homepage (`src/app/page.tsx`)
- No multi-page routing implemented
- Smooth scrolling sections instead of separate pages
- Simple navigation structure suitable for portfolio presentation

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

**No API Routes**: No backend functionality currently implemented
- Could add Next.js API routes for contact form handling
- Could integrate with email services (SendGrid, Mailgun) for contact functionality