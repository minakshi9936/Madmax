# AdOutdoor - Outdoor Advertising Website

A professional, responsive website template for outdoor advertising companies, built with Next.js 13 and Tailwind CSS.

## Features

- **5 Complete Pages**: Home, Services, Portfolio, About, Contact
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean, professional design with blue and orange color scheme
- **Optimized Images**: Uses Next.js Image component for optimal performance
- **Semantic HTML**: Proper heading structure and alt text for accessibility
- **No Animations**: Clean, professional look without distracting animations

## Pages Overview

### Home Page
- Hero section with compelling tagline and CTA
- Statistics section (clients, projects, experience)
- About section with company introduction
- Services preview cards
- Final CTA section

### Services Page
- 6 detailed service offerings:
  - Hoarding Advertising
  - Banner Printing
  - Digital Signage
  - Transit Advertising
  - Street Furniture
  - Custom Solutions
- Each service includes features list and imagery

### Portfolio Page
- Grid layout showcasing 12 past projects
- Category filtering buttons
- Image hover effects
- Project categorization

### About Page
- Company story and history
- Mission, vision, and values
- Team member profiles
- Company statistics

### Contact Page
- Contact form (name, email, phone, message)
- Company contact information
- Business hours
- Google Maps integration
- Office location details

## Components

### Header
- Sticky navigation bar
- Logo with icon
- Responsive mobile menu
- Links to all main pages

### Footer
- Company branding
- Quick links
- Service list
- Social media links
- Contact information

### ServiceCard
- Reusable card component
- Image with hover effect
- Title and description
- Optional link

### ProjectGrid
- Grid layout for portfolio items
- Image galleries
- Category labels
- Hover effects

## Color Palette

```javascript
Primary (Blue): #1e40af
- Light shades: #eff6ff, #dbeafe, #bfdbfe
- Dark shades: #1d4ed8, #1e3a8a

Accent (Orange): #ea580c
- Light shades: #fff7ed, #ffedd5
- Dark shades: #c2410c, #7c2d12

Backgrounds: White (#ffffff), Gray (#f9fafb)
Text: Gray-900 (#111827), Gray-600 (#4b5563)
```

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Images**: Pexels stock photos

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder (static export).

### Type Checking

```bash
npm run typecheck
```

## Customization Guide

### Changing Brand Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: '#YOUR_PRIMARY_COLOR',
  // ... other shades
},
accent: {
  DEFAULT: '#YOUR_ACCENT_COLOR',
  // ... other shades
},
```

### Updating Images

Replace image URLs in each page component. All images currently use Pexels stock photos.

Example:
```typescript
<Image
  src="YOUR_IMAGE_URL"
  alt="Descriptive alt text"
  fill
  className="object-cover"
/>
```

### Modifying Content

Content is defined in each page component:
- `app/page.tsx` - Home page
- `app/services/page.tsx` - Services page
- `app/portfolio/page.tsx` - Portfolio page
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact page

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Header.tsx`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   ├── ServiceCard.tsx     # Service card component
│   └── ProjectGrid.tsx     # Portfolio grid component
└── tailwind.config.ts      # Tailwind configuration
```

## Features in Detail

### Responsive Design
- Mobile breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Hamburger menu for mobile devices
- Flexible grid layouts that adapt to screen size

### SEO Optimization
- Semantic HTML structure
- Descriptive alt text for all images
- Meta tags configured in layout
- Proper heading hierarchy

### Performance
- Static site generation
- Optimized images with Next.js Image
- Minimal JavaScript bundle
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a template project. Customize and use as needed for your projects.

## Support

For questions or issues, refer to the Next.js and Tailwind CSS documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
