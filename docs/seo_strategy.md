# Nexusnao SEO & Metadata Strategy

## 1. Global Metadata (Next.js `layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Nexusnao',
    default: 'Nexusnao | Enterprise Software Development & AI Solutions',
  },
  description: 'Nexusnao delivers custom software, AI solutions, and digital transformation services for global enterprises. Book a discovery call today.',
  keywords: ['Custom Software', 'AI Solutions', 'Web Development', 'Enterprise', 'B2B'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusnao.com',
    siteName: 'Nexusnao',
    images: [
      {
        url: 'https://nexusnao.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexusnao - Building the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexusnao',
    creator: '@nexusnao',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

## 2. JSON-LD Structured Data

### Organization (Global)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexusnao",
  "url": "https://nexusnao.com",
  "logo": "https://nexusnao.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/nexusnao",
    "https://twitter.com/nexusnao"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales"
  }
}
```

### Service (Per Service Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Nexusnao"
  },
  "areaServed": "Global",
  "description": "Scalable, secure, and high-performance applications tailored to your unique business needs."
}
```

### Breadcrumb (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://nexusnao.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://nexusnao.com/services"
  }]
}
```

## 3. Sitemap & Robots

- **sitemap.xml**: Auto-generated for all static routes + dynamic case studies/blog posts.
- **robots.txt**: Allow all, disallow `/api/`, `/admin/`.

## 4. Performance & Core Web Vitals
- **LCP**: Preload Hero image.
- **CLS**: Explicit width/height on all images.
- **FID**: Minimal JS on load, defer non-critical scripts.
