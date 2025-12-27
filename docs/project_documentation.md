# Project Documentation

**Generated:** 2025-12-25 14:47:20

**Project:** COMPANY-WEB (Next.js)

---

## Table of Contents

- [Configuration](#configuration)
- [App Routes](#app-routes)
- [Components](#components)
- [Library](#library)
- [Documentation](#documentation)
- [Styles](#styles)

---

## Configuration

### `eslint.config.mjs`

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

### `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

### `package.json`

```json
{
  "name": "nexusnao-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.554.0",
    "next": "16.0.4",
    "next-themes": "^0.4.6",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-hook-form": "^7.66.1",
    "tailwind-merge": "^3.4.0",
    "zod": "^4.1.13"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

### `postcss.config.mjs`

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

### `vercel.json`

```json
{
    "buildCommand": "npm run build",
    "outputDirectory": ".next",
    "devCommand": "npm run dev",
    "installCommand": "npm install",
    "framework": "nextjs",
    "regions": [
        "iad1"
    ]
}
```

---

## App Routes

### `app\about\page.tsx`

```tsx
import { CtaBand } from "@/components/marketing/cta-band"
import { Users, Target, Heart, Award } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about Nexusnao, our mission, values, and the team behind our success.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. We strive for perfection in every line of code and pixel of design.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working closely with our clients and each other.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We are honest, transparent, and always do what's right for our clients.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly explore new technologies to stay ahead of the curve.",
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          We Are Nexusnao
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          A global team of engineers, designers, and strategists dedicated to digital excellence.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                To empower businesses with technology that makes a difference. We believe that software has the power to transform industries and improve lives.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Founded in 2010, we've grown from a small group of passionate coders to a global agency trusted by Fortune 500 companies and ambitious startups alike.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl aspect-video flex items-center justify-center">
               {/* Placeholder for team image */}
               <span className="text-neutral-400 font-medium">Team Photo</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center">
                <div className="w-12 h-12 mx-auto bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\careers\page.tsx`

```tsx
import Link from "next/link"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Careers",
  description: "Join our team of innovators and builders.",
}

const roles = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "London, UK / Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join Nexusnao
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Build the future with us. We're always looking for exceptional talent.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {role.location}
                    </span>
                    <span>{role.department}</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\case-studies\[slug]\page.tsx`

```tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Quote, CheckCircle2, Calendar, Users, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/marketing/cta-band"
import { caseStudies } from "@/lib/data"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.challenge,
    openGraph: {
      title: `${study.title} | Nexusnao Case Study`,
      description: study.challenge,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "description": study.challenge,
    "author": {
      "@type": "Organization",
      "name": "Nexusnao"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexusnao",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexusnao.com/logo.png"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-cyan-900/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-300">
                {study.category}
              </span>
              <span className="text-neutral-400 border-l border-neutral-800 pl-4">
                {study.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              {study.client}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge, Approach, Solution */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Challenge</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Approach</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {study.approach}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Solution</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-violet-500" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-violet-500" /> Timeline
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">{study.timeline}</p>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-violet-500" /> Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">{study.team}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-900/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.results.map((result, index) => (
              <div key={index} className="text-center p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-2">
                  {result.value}
                </div>
                <div className="text-violet-300 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-violet-500/20 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-medium text-neutral-900 dark:text-white mb-8 leading-relaxed">
            "{study.testimonial.quote}"
          </blockquote>
          <div>
            <div className="font-bold text-lg text-neutral-900 dark:text-white">
              {study.testimonial.author}
            </div>
            <div className="text-neutral-500">
              {study.testimonial.role}, {study.client}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\case-studies\page.tsx`

```tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaBand } from "@/components/marketing/cta-band"
import { caseStudies } from "@/lib/data"

export const metadata = {
  title: "Case Studies",
  description: "See how we help companies solve complex challenges and achieve measurable outcomes.",
}

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Case Studies
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Real results for ambitious companies.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block">
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-2xl mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 group-hover:scale-105 transition-transform duration-500" />
                   {/* Placeholder for image */}
                   <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-bold text-2xl opacity-20">
                     {study.client}
                   </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {study.category}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-violet-600 transition-colors">
                  {study.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {study.challenge}
                </p>
                <div className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-white group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\contact\page.tsx`

```tsx
import { ContactForm } from "@/components/marketing/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexusnao to discuss your next project.",
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's Build Something Great
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Fill out the form below to schedule a discovery call.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
                Whether you have a question about our services, pricing, or just want to say hello, we're ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Email</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">info@nexusnao.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">+92 (306) 801-3166</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Office</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Gulshan-e-Maymar<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

```

### `app\insights\page.tsx`

```tsx
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Insights",
  description: "Articles, guides, and insights on software development and digital transformation.",
}

export default function InsightsPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Insights
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Articles, guides, and insights on software development and digital transformation.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="bg-neutral-50 dark:bg-neutral-900 p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              We're working on bringing you valuable insights and articles. Check back soon!
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Nexusnao',
    default: 'Nexus Nao • Enterprise Software & E Commerce Solutions',
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
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-violet-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

```

### `app\legal\privacy\page.tsx`

```tsx
export const metadata = {
  title: "Privacy Policy",
  description: "Nexusnao Privacy Policy.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: November 25, 2025</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>
        {/* Add more legal text as needed */}
      </div>
    </div>
  )
}

```

### `app\page.tsx`

```tsx
import { Hero } from "@/components/marketing/hero"
import { LogoWall } from "@/components/marketing/logo-wall"
import { ServicesGrid } from "@/components/marketing/services-grid"
import { Metrics } from "@/components/marketing/metrics"
import { CaseStudiesTeaser } from "@/components/marketing/case-studies-teaser"
import { Testimonials } from "@/components/marketing/testimonials"
import { ProcessTeaser } from "@/components/marketing/process-teaser"
import { CtaBand } from "@/components/marketing/cta-band"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <ServicesGrid />
      <Metrics />
      <CaseStudiesTeaser />
      <Testimonials />
      <ProcessTeaser />
      <CtaBand />
    </>
  )
}

```

### `app\process\page.tsx`

```tsx
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Our Process",
  description: "Our proven methodology for delivering high-quality software solutions.",
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, market research, and feasibility analysis.",
    deliverables: ["Project Charter", "Requirements Document", "Technical Architecture"],
  },
  {
    number: "02",
    title: "Design",
    description: "Our design team creates intuitive and engaging user experiences. We focus on usability, accessibility, and brand consistency.",
    deliverables: ["Wireframes", "UI Mockups", "Interactive Prototypes"],
  },
  {
    number: "03",
    title: "Build",
    description: "We engineer robust, scalable, and secure code using modern technologies. We follow agile methodologies with regular sprints and demos.",
    deliverables: ["Clean Code", "API Documentation", "Unit Tests"],
  },
  {
    number: "04",
    title: "QA",
    description: "We test rigorously for perfection and reliability. This includes automated testing, manual testing, and security audits.",
    deliverables: ["Test Reports", "Bug Fixes", "Security Audit"],
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy with confidence and monitor performance. We ensure a smooth transition with minimal downtime.",
    deliverables: ["Production Deployment", "Monitoring Setup", "User Training"],
  },
  {
    number: "06",
    title: "Support",
    description: "We ensure long-term success with ongoing maintenance and support. We are here to help you scale and evolve.",
    deliverables: ["SLA Support", "Performance Optimization", "Feature Updates"],
  },
]

export default function ProcessPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          How We Work
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          A proven methodology for delivering excellence, every time.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-cyan-400 opacity-50">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-3">
                      Key Deliverables
                    </h3>
                    <ul className="flex flex-wrap gap-3">
                      {step.deliverables.map((item) => (
                        <li key={item} className="px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\services\[slug]\page.tsx`

```tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/marketing/cta-band"
import { services } from "@/lib/data"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Nexusnao`,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Nexusnao",
      "url": "https://nexusnao.com"
    },
    "description": service.description,
    "areaServed": "Global"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero */}
      <section className="relative py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-cyan-900/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            {service.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            {service.hero.headline}
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            {service.hero.subhead}
          </p>
          <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Overcome Your Technical Hurdles
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                We help you navigate complex challenges and build solutions that drive real business value.
              </p>
              <ul className="space-y-4">
                {service.problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 aspect-square flex items-center justify-center">
               {/* Placeholder for illustration */}
               <div className="text-neutral-400 text-center">
                 <service.icon className="w-24 h-24 mx-auto mb-4 opacity-20" />
                 <p>Illustration: Solving {service.title} Challenges</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((item, index) => (
              <div key={index} className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-violet-600 mb-4" />
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-neutral-100 dark:text-neutral-800 absolute -top-8 -left-4 -z-10">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.tech.map((tech, index) => (
              <span key={index} className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h3 className="flex items-start gap-3 font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                  <HelpCircle className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 ml-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

### `app\services\page.tsx`

```tsx
import { ServicesGrid } from "@/components/marketing/services-grid"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive range of digital engineering services.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          We provide end-to-end solutions to help you build, scale, and innovate.
        </p>
      </div>
      <ServicesGrid />
      <CtaBand />
    </>
  )
}

```

### `app\technologies\page.tsx`

```tsx
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Technologies",
  description: "The modern tech stack we use to build world-class software.",
}

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "Java", "GraphQL", "NestJS"],
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    name: "Data & AI",
    techs: ["TensorFlow", "PyTorch", "PostgreSQL", "MongoDB", "Redis", "Snowflake"],
  },
]

export default function TechnologiesPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Tech Stack
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          We use the latest tools and frameworks to build future-proof solutions.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  {category.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

```

---

## Components

### `components\layout\footer.tsx`

```tsx
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  Services: [
    { name: "Custom Software", href: "/services/custom-software-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "E-commerce", href: "/services/e-commerce-solutions" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "Technologies", href: "/technologies" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="w-full h-1 bg-gradient-to-r from-violet-600 to-cyan-400" />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo-white.png" 
                alt="Nexusnao" 
                width={180} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              We engineer high-performance digital platforms, AI solutions, and custom software for ambitious global enterprises.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-violet-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-violet-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.Resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-violet-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Nexusnao. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.Legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

```

### `components\layout\header.tsx`

```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown, Terminal, ShoppingBag, Bot, PenTool, LineChart, Globe, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  { 
    name: "Custom Software", 
    href: "/services/custom-software-development",
    icon: Terminal,
    description: "Tailored solutions for your unique needs"
  },
  { 
    name: "E-commerce Solutions", 
    href: "/services/e-commerce-solutions",
    icon: ShoppingBag,
    description: "Scalable online stores that convert"
  },
  { 
    name: "AI Solutions", 
    href: "/services/ai-solutions",
    icon: Bot,
    description: "Intelligent automation and insights"
  },
  { 
    name: "UI/UX Design", 
    href: "/services/ui-ux-design",
    icon: PenTool,
    description: "Beautiful, intuitive interfaces"
  },
  { 
    name: "Business Intelligence", 
    href: "/services/business-intelligence",
    icon: LineChart,
    description: "Data-driven decision making"
  },
  { 
    name: "Digital Transformation", 
    href: "/services/digital-transformation",
    icon: Globe,
    description: "Modernize your operations"
  },
]

const navigation = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false)
  const pathname = usePathname()
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
    setShowServicesDropdown(false)
  }, [pathname])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-lg shadow-neutral-900/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <Image 
            src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "/logo-white.png" : "/logo1.png"} 
            alt="Nexus Nao" 
            width={180} 
            height={40} 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative"
              ref={item.hasDropdown ? dropdownRef : null}
              onMouseEnter={() => item.hasDropdown && setShowServicesDropdown(true)}
              onMouseLeave={() => item.hasDropdown && setShowServicesDropdown(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-1 group z-10",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-violet-600 dark:text-violet-300"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                )}
              >
                {/* Sliding Pill Background */}
                {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-1">
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={cn(
                      "w-3 h-3 transition-transform duration-200",
                      showServicesDropdown && "rotate-180"
                    )} />
                  )}
                </motion.span>
              </Link>

              {/* Services Dropdown */}
              {item.hasDropdown && showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="p-2">
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors group"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-neutral-900 dark:text-white mb-0.5">
                              {service.name}
                            </div>
                            <div className="text-xs text-neutral-600 dark:text-neutral-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="border-t border-neutral-200 dark:border-neutral-800 p-3 bg-neutral-50 dark:bg-neutral-900/50">
                    <Link 
                      href="/services" 
                      className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 flex items-center gap-1"
                    >
                      View all services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button 
            variant="ghost" 
            asChild 
            className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild className="rounded-full shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow">
            <Link href="/contact">
              Book Discovery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 pt-24 shadow-2xl md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between px-1 mb-4">
                  <span className="text-base font-medium text-neutral-900 dark:text-white">Appearance</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
                <Button variant="outline" asChild className="w-full rounded-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="w-full rounded-full">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

```

### `components\marketing\case-studies-teaser.tsx`

```tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "FinTech Transformation",
    category: "Digital Transformation",
    bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    colorOverlay: "from-blue-900/70 to-slate-900/70",
    href: "/case-studies/fintech-transformation",
  },
  {
    title: "AI-Powered Analytics",
    category: "AI Solutions",
    bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    colorOverlay: "from-violet-900/70 to-purple-900/70",
    href: "/case-studies/ai-analytics",
  },
  {
    title: "Global E-commerce Platform",
    category: "E-commerce",
    bgImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    colorOverlay: "from-emerald-900/70 to-teal-900/70",
    href: "/case-studies/global-ecommerce",
  },
]

export function CaseStudiesTeaser() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950 rounded-[2.5rem] mx-4 my-4 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              See how we help companies solve complex challenges and achieve measurable outcomes.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Link href={study.href}>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${study.bgImage})` }}
                />
                
                {/* Color Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.colorOverlay} transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-sm font-medium text-violet-300 mb-2">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  <div className="inline-flex items-center text-white font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\contact-form.tsx`

```tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-300 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Company (Optional)
        </label>
        <input
          id="company"
          {...register("company")}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
          placeholder="Acme Inc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-violet-500 outline-none transition-all resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

```

### `components\marketing\cta-band.tsx`

```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] mx-4 my-4 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
          Let's discuss your next project and how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/contact">
              Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\hero.tsx`

```tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustLogos = ["FinTech Corp", "RetailAI", "StyleGlobal", "GlobalTech"]

import { useEffect, useRef } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0
    }
  }, [])
  return (
    <section className="relative min-h-[calc(100svh-2rem)] flex items-center overflow-hidden bg-black rounded-[2.5rem] mx-4 my-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/vid1-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 md:from-black/70 md:via-transparent md:to-black/70" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70 md:from-black/80 md:via-transparent md:to-transparent" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-12 lg:py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
          
          {/* Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Building Tomorrow’s
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
                  Software, Today
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Enterprise-grade solutions designed to scale, accelerate growth, and turn ambitious ideas into digital success stories.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                '50+ Projects Delivered',
                '98% Client Satisfaction',
                '4+ Years Experience'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 border-0 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-all w-full sm:w-auto"
                asChild
              >
                <Link href="/case-studies" className="flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  View case studies
                </Link>
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-8"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Trusted by product teams at</div>
              <div className="flex flex-wrap justify-center gap-4">
                {trustLogos.map((logo) => (
                  <div key={logo} className="px-6 py-2 rounded-full border border-neutral-800 bg-neutral-900/40 text-sm text-neutral-400 backdrop-blur-sm">
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  )
}

```

### `components\marketing\logo-wall.tsx`

```tsx
"use client"

import Image from "next/image"

const logos = [
  { name: "Acme Corp", src: "/logos/acme.svg" }, // Placeholder paths
  { name: "GlobalTech", src: "/logos/global.svg" },
  { name: "Nebula", src: "/logos/nebula.svg" },
  { name: "Trio", src: "/logos/trio.svg" },
  { name: "FoxRun", src: "/logos/fox.svg" },
  { name: "Circle", src: "/logos/circle.svg" },
]

export function LogoWall() {
  return (
    <section className="py-12 bg-neutral-950 border-b border-neutral-900 rounded-[2.5rem] mx-4 my-4 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-neutral-500 mb-8 uppercase tracking-wider">
          Trusted by forward-thinking companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Since I don't have actual SVG logos, I'll use text placeholders styled to look like logos */}
           {["Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun", "Circle"].map((logo, i) => (
             <div key={i} className="text-xl font-bold text-neutral-400 hover:text-white transition-colors cursor-default select-none">
               {logo}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\metrics.tsx`

```tsx
"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Projects Delivered", value: "50+", suffix: "" },
  { label: "Years Experience", value: "4+", suffix: "" },
  { label: "Coding Hours", value: "1M+", suffix: "" },
  { label: "Client Retention", value: "98", suffix: "%" },
]

export function Metrics() {
  return (
    <section className="py-20 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden rounded-[2.5rem] mx-4 my-4">
       <div className="absolute inset-0 bg-violet-900/5" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-sm md:text-base text-violet-300 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\process-teaser.tsx`

```tsx
"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  { 
    number: "01", 
    title: "Discovery", 
    description: "We dive deep into your goals and requirements.",
    icon: Search,
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    number: "02", 
    title: "Design", 
    description: "We craft intuitive and engaging user experiences.",
    icon: Palette,
    bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
  },
  { 
    number: "03", 
    title: "Build", 
    description: "We engineer robust, scalable, and secure code.",
    icon: Code,
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    number: "04", 
    title: "QA", 
    description: "We test rigorously for perfection and reliability.",
    icon: TestTube,
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    number: "05", 
    title: "Launch", 
    description: "We deploy with confidence and monitor performance.",
    icon: Rocket,
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    number: "06", 
    title: "Support", 
    description: "We ensure long-term success with ongoing maintenance.",
    icon: HeadphonesIcon,
    bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
  },
]

export function ProcessTeaser() {
  return (
    <section className="relative py-24 overflow-hidden rounded-[2.5rem] mx-4 my-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-blue-900/95 to-cyan-900/95" />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-violet-200">
            A proven methodology for delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${step.bgImage})` }}
                />
                
                {/* Color Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 p-8 border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-violet-300" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-violet-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\services-grid.tsx`

```tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, ShoppingCart, Brain, Layout, BarChart3, RefreshCw, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance applications tailored to your unique business needs.",
    href: "/services/custom-software-development",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Seamless shopping experiences that convert visitors into loyal customers.",
    href: "/services/e-commerce-solutions",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent algorithms and machine learning models that automate and optimize.",
    href: "/services/ai-solutions",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive, user-centric designs that delight users and enhance engagement.",
    href: "/services/ui-ux-design",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Data-driven insights to make informed strategic decisions.",
    href: "/services/business-intelligence",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Modernize your legacy systems and embrace the future of digital business.",
    href: "/services/digital-transformation",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ServicesGrid() {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50 dark:bg-neutral-900 rounded-[2.5rem] mx-4 my-4">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            End-to-End Digital Engineering
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            From concept to scale, we deliver robust solutions that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-violet-200 dark:hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10 transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              
              {/* Color Overlay */}
              <div className="absolute inset-0 bg-black/70 dark:bg-black/60 group-hover:bg-black/60 dark:group-hover:bg-black/50 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-200 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-violet-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

### `components\marketing\testimonials.tsx`

```tsx
"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Nexusnao transformed our legacy system into a modern powerhouse. Their team is exceptional.",
    author: "Jane Doe",
    role: "CTO",
    company: "FinTech Corp",
    flag: "🇺🇸",
  },
  {
    quote: "The AI solution they built saved us 30% in operational costs. Highly recommended.",
    author: "John Smith",
    role: "Founder",
    company: "RetailAI",
    flag: "🇬🇧",
  },
  {
    quote: "Professional, transparent, and incredibly skilled. They delivered on time and under budget.",
    author: "Sarah Johnson",
    role: "VP of Product",
    company: "Global Logistics",
    flag: "🇨🇦",
  },
  {
    quote: "Their design team captured our brand perfectly. The new site has doubled our conversion rate.",
    author: "Michael Brown",
    role: "CMO",
    company: "TechStart",
    flag: "🇦🇺",
  },
  {
    quote: "We've worked with many agencies, but Nexusnao stands out for their technical depth.",
    author: "Emily Davis",
    role: "Director of Engineering",
    company: "SaaS Inc",
    flag: "🇩🇪",
  },
  {
    quote: "A true partner in our digital transformation journey. We couldn't have done it without them.",
    author: "David Wilson",
    role: "CEO",
    company: "Enterprise Solutions",
    flag: "🇫🇷",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 rounded-[2.5rem] mx-4 my-4 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Trusted by leaders at high-growth companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-violet-500/20" />
                <span className="text-2xl" role="img" aria-label={`Flag of ${testimonial.flag}`}>{testimonial.flag}</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

### `components\theme-provider.tsx`

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

### `components\ui\button.tsx`

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white shadow hover:bg-primary-700",
        destructive:
          "bg-error text-white shadow-sm hover:bg-error/90",
        outline:
          "border border-neutral-200 bg-transparent shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-primary-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-12 rounded-full px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

---

## Library

### `lib\data.ts`

```typescript
import { Code2, ShoppingCart, Brain, Layout, BarChart3, RefreshCw } from "lucide-react"

export const services = [
    {
        slug: "custom-software-development",
        icon: Code2,
        title: "Custom Software Development",
        description: "Scalable, secure, and high-performance applications tailored to your unique business needs.",
        hero: {
            headline: "Custom Software Built for Scale & Speed.",
            subhead: "We design and develop bespoke software solutions that solve your specific business challenges and drive efficiency.",
        },
        problems: [
            "Legacy systems slowing down operations",
            "Inability to scale with growing user base",
            "Security vulnerabilities in current software",
            "Disparate systems that don't talk to each other",
        ],
        deliverables: [
            "Enterprise Web Applications",
            "Mobile App Development (iOS & Android)",
            "API Development & Integration",
            "Cloud Infrastructure Setup",
        ],
        process: [
            { title: "Requirement Analysis", description: "Understanding your specific needs." },
            { title: "Architecture Design", description: "Planning a robust technical foundation." },
            { title: "Agile Development", description: "Iterative sprints for rapid delivery." },
            { title: "Deployment & CI/CD", description: "Automated pipelines for reliable releases." },
        ],
        tech: ["TypeScript", "Python", "Go", "Next.js", "React", "Node.js", "AWS", "Azure"],
        faqs: [
            { question: "How long does a typical project take?", answer: "Timelines vary based on complexity, but most MVPs are delivered in 3-4 months." },
            { question: "Do you provide post-launch support?", answer: "Yes, we offer comprehensive maintenance and support packages." },
            { question: "Do I own the code?", answer: "Absolutely. You own 100% of the intellectual property upon final payment." },
        ],
    },
    {
        slug: "e-commerce-solutions",
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "Seamless shopping experiences that convert visitors into loyal customers.",
        hero: {
            headline: "E-commerce That Converts.",
            subhead: "We build high-performance online stores that drive sales and customer loyalty.",
        },
        problems: [
            "High cart abandonment rates",
            "Slow page load times affecting SEO",
            "Complex inventory management issues",
            "Poor mobile user experience",
        ],
        deliverables: [
            "Custom Shopify/WooCommerce Themes",
            "Headless E-commerce Builds",
            "Payment Gateway Integration",
            "Inventory Management Systems",
        ],
        process: [
            { title: "UX Audit", description: "Analyzing current friction points." },
            { title: "Platform Selection", description: "Choosing the right tech stack." },
            { title: "Design & Dev", description: "Building a conversion-focused UI." },
            { title: "Launch & Optimize", description: "Going live and A/B testing." },
        ],
        tech: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Next.js Commerce"],
        faqs: [
            { question: "Can you migrate my existing store?", answer: "Yes, we specialize in seamless platform migrations with zero data loss." },
            { question: "Do you optimize for mobile?", answer: "All our e-commerce solutions are mobile-first and fully responsive." },
        ],
    },
    {
        slug: "ai-solutions",
        icon: Brain,
        title: "AI Solutions",
        description: "Intelligent algorithms and machine learning models that automate and optimize.",
        hero: {
            headline: "Unlock the Power of AI.",
            subhead: "Leverage machine learning and artificial intelligence to automate processes and gain predictive insights.",
        },
        problems: [
            "Manual, repetitive tasks eating up time",
            "Unstructured data that's hard to analyze",
            "Lack of personalized customer experiences",
            "Inefficient resource allocation",
        ],
        deliverables: [
            "Custom ML Models",
            "NLP Chatbots & Assistants",
            "Predictive Analytics Dashboards",
            "Computer Vision Systems",
        ],
        process: [
            { title: "Data Assessment", description: "Evaluating your data quality." },
            { title: "Model Training", description: "Developing custom algorithms." },
            { title: "Integration", description: "Embedding AI into workflows." },
            { title: "Monitoring", description: "Ensuring model accuracy over time." },
        ],
        tech: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Pinecone"],
        faqs: [
            { question: "Do I need a lot of data?", answer: "Not necessarily. We can start with pre-trained models and fine-tune them." },
            { question: "Is my data secure?", answer: "We adhere to strict data privacy standards and can deploy on-premise if needed." },
        ],
    },
    {
        slug: "ui-ux-design",
        icon: Layout,
        title: "UI/UX Design",
        description: "Intuitive, user-centric designs that delight users and enhance engagement.",
        hero: {
            headline: "Design That Delights.",
            subhead: "We craft intuitive user interfaces and engaging experiences that users love.",
        },
        problems: [
            "Low user engagement or retention",
            "Confusing navigation or information architecture",
            "Outdated visual identity",
            "Inconsistent branding across platforms",
        ],
        deliverables: [
            "User Research & Personas",
            "Wireframes & Prototyping",
            "High-Fidelity UI Design",
            "Design Systems",
        ],
        process: [
            { title: "Research", description: "Understanding user needs." },
            { title: "Ideation", description: "Brainstorming solutions." },
            { title: "Prototyping", description: "Testing concepts." },
            { title: "Handoff", description: "Preparing assets for dev." },
        ],
        tech: ["Figma", "Adobe XD", "Sketch", "Principle", "Storybook"],
        faqs: [
            { question: "Do you do user testing?", answer: "Yes, we conduct usability testing to validate our designs." },
            { question: "Can you work with our existing brand?", answer: "Absolutely. We can evolve your brand or work strictly within guidelines." },
        ],
    },
    {
        slug: "business-intelligence",
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Data-driven insights to make informed strategic decisions.",
        hero: {
            headline: "Turn Data into Decisions.",
            subhead: "We build BI dashboards and data pipelines that give you real-time visibility into your business.",
        },
        problems: [
            "Siloed data across departments",
            "Manual reporting in spreadsheets",
            "Lack of real-time KPIs",
            "Difficulty forecasting trends",
        ],
        deliverables: [
            "Data Warehousing",
            "ETL Pipeline Development",
            "Interactive Dashboards",
            "Automated Reporting",
        ],
        process: [
            { title: "Data Audit", description: "Mapping data sources." },
            { title: "Pipeline Build", description: "Connecting data streams." },
            { title: "Visualization", description: "Creating dashboards." },
            { title: "Training", description: "Empowering your team." },
        ],
        tech: ["Power BI", "Tableau", "Looker", "Snowflake", "BigQuery", "dbt"],
        faqs: [
            { question: "Can you connect to legacy databases?", answer: "Yes, we can ingest data from almost any source." },
            { question: "Is it real-time?", answer: "We can set up near real-time streaming or scheduled batch processing." },
        ],
    },
    {
        slug: "digital-transformation",
        icon: RefreshCw,
        title: "Digital Transformation",
        description: "Modernize your legacy systems and embrace the future of digital business.",
        hero: {
            headline: "Evolve or Get Left Behind.",
            subhead: "We help established enterprises modernize their technology stack and culture for the digital age.",
        },
        problems: [
            "Outdated legacy systems",
            "Slow time-to-market",
            "Resistance to change",
            "Inefficient manual workflows",
        ],
        deliverables: [
            "Technology Roadmap",
            "Cloud Migration",
            "Process Automation",
            "Change Management",
        ],
        process: [
            { title: "Assessment", description: "Evaluating current state." },
            { title: "Strategy", description: "Defining the roadmap." },
            { title: "Execution", description: "Implementing changes." },
            { title: "Optimization", description: "Continuous improvement." },
        ],
        tech: ["Cloud Native", "Microservices", "DevOps", "Agile Methodologies"],
        faqs: [
            { question: "How do you handle change management?", answer: "We work closely with your team to ensure adoption and minimize resistance." },
            { question: "What is the ROI?", answer: "We focus on high-impact areas first to demonstrate quick wins and ROI." },
        ],
    },
]

export const caseStudies = [
    {
        slug: "fintech-transformation",
        title: "FinTech Transformation",
        category: "Digital Transformation",
        client: "FinTech Corp",
        industry: "Financial Services",
        challenge: "Legacy infrastructure was preventing the launch of new real-time payment features, causing customer churn.",
        approach: "We re-architected the core banking core using microservices and event-driven architecture.",
        solution: "A scalable, cloud-native platform capable of processing millions of transactions per second.",
        results: [
            { label: "Transaction Speed", value: "10x Faster" },
            { label: "Uptime", value: "99.99%" },
            { label: "Dev Velocity", value: "+300%" },
        ],
        testimonial: {
            quote: "Nexusnao transformed our legacy system into a modern powerhouse. Their team is exceptional.",
            author: "Jane Doe",
            role: "CTO",
        },
        stack: ["Go", "Kafka", "Kubernetes", "AWS"],
        timeline: "12 Months",
        team: "12 Engineers, 2 Designers, 1 PM",
    },
    {
        slug: "ai-analytics",
        title: "AI-Powered Analytics",
        category: "AI Solutions",
        client: "RetailAI",
        industry: "Retail",
        challenge: "The client had massive amounts of customer data but no way to generate actionable insights in real-time.",
        approach: "We built a custom machine learning pipeline to analyze customer behavior and predict trends.",
        solution: "A predictive analytics dashboard that helps store managers optimize inventory and staffing.",
        results: [
            { label: "Operational Costs", value: "-30%" },
            { label: "Inventory Waste", value: "-25%" },
            { label: "Sales Growth", value: "+15%" },
        ],
        testimonial: {
            quote: "The AI solution they built saved us 30% in operational costs. Highly recommended.",
            author: "John Smith",
            role: "Founder",
        },
        stack: ["Python", "TensorFlow", "React", "BigQuery"],
        timeline: "6 Months",
        team: "4 ML Engineers, 2 Full Stack Devs",
    },
    {
        slug: "global-ecommerce",
        title: "Global E-commerce Platform",
        category: "E-commerce",
        client: "StyleGlobal",
        industry: "Fashion",
        challenge: "The existing monolithic platform crashed during peak traffic and couldn't support multi-currency sales.",
        approach: "We migrated to a headless commerce architecture with a global CDN and edge computing.",
        solution: "A lightning-fast, globally distributed shopping experience with localized content.",
        results: [
            { label: "Page Load Time", value: "0.8s" },
            { label: "Conversion Rate", value: "+45%" },
            { label: "Global Sales", value: "+200%" },
        ],
        testimonial: {
            quote: "Our new site is blazing fast anywhere in the world. Nexusnao delivered beyond expectations.",
            author: "Sarah Lee",
            role: "VP of Digital",
        },
        stack: ["Next.js", "Shopify Plus", "Sanity", "Vercel"],
        timeline: "8 Months",
        team: "6 Engineers, 3 Designers",
    },
]

```

### `lib\utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

---

## Documentation

### `docs\component_inventory.md`

```markdown
# Nexusnao Component Inventory

## 1. Atoms (Base Elements)

### Typography
- `Heading` (H1-H4): Variants for size and weight.
- `Text` (Body, Small, Tiny): Variants for color (muted, default).
- `GradientText`: Text with background clip for brand gradient.

### Buttons
- `Button`:
  - `variant`: `primary` (violet), `secondary` (outline), `ghost` (text), `white` (for dark bg).
  - `size`: `sm`, `md`, `lg`.
  - `icon`: Optional left/right icon.
  - `loading`: Spinner state.

### Inputs
- `Input`: Text, Email, Password.
- `Textarea`: Resizable.
- `Select`: Custom dropdown (Radix).
- `Checkbox`: Terms agreement.
- `Label`: Accessible label.

### Feedback
- `Badge`: Pill shaped (e.g., "New", "Hiring").
- `Spinner`: Loading state.
- `Alert`: Success/Error/Warning messages.

## 2. Molecules (Compound Elements)

### Cards
- `ServiceCard`: Icon + Title + Description + Hover Effect.
- `CaseStudyCard`: Image + Overlay + Title + Tags + CTA.
- `MetricCard`: Large Number + Label + Icon.
- `TestimonialCard`: Quote + Author Info + Avatar/Flag.
- `BlogCard`: Image + Date + Title + Excerpt.

### Navigation
- `Navbar`: Logo + Links + Mobile Menu (Sheet) + CTA.
- `Footer`: Columns (Links) + Socials + Legal + Copyright.
- `Breadcrumb`: Path navigation.

### Interactive
- `Accordion`: FAQ items (Radix).
- `Tabs`: Technology categories (Radix).
- `Carousel`: Testimonials/Logos (Embla or similar).

## 3. Organisms (Sections)

### Hero
- `HomeHero`: H1 + Sub + 2 CTAs + Background Glow.
- `PageHero`: H1 + Sub + Breadcrumb.

### Grids
- `ServiceGrid`: 3x2 grid of ServiceCards.
- `LogoWall`: Flex/Grid of client logos (grayscale -> color on hover).
- `ProcessSteps`: Step-by-step visual flow.

### Forms
- `ContactForm`: Fields + Validation + Submit.
- `NewsletterForm`: Email + Submit.

## 4. Templates (Pages)
- `HomeTemplate`
- `ServiceTemplate`
- `CaseStudyTemplate`
- `ContentPageTemplate` (About, Legal)

```

### `docs\copy_deck.md`

```markdown
# Nexusnao Website Copy Deck

## Brand Voice
- **Tone**: Confident, outcome-driven, jargon-light, trustworthy.
- **Style**: Premium, understated, professional.

---

## 1. Home Page

### Hero Section
**Headline**: Build Software That Defines Your Future.
**Subhead**: We engineer high-performance digital platforms, AI solutions, and custom software for ambitious global enterprises.
**Primary CTA**: Book a Discovery Call
**Secondary CTA**: View Case Studies

### Proof Row
**Text**: Trusted by forward-thinking companies worldwide

### Services Overview
**Headline**: End-to-End Digital Engineering
**Subhead**: From concept to scale, we deliver robust solutions that drive growth.

**Cards**:
1. **Custom Software Development**: Scalable, secure, and high-performance applications tailored to your unique business needs.
2. **E-commerce Solutions**: Seamless shopping experiences that convert visitors into loyal customers.
3. **AI Solutions**: Intelligent algorithms and machine learning models that automate and optimize.
4. **UI/UX Design**: Intuitive, user-centric designs that delight users and enhance engagement.
5. **Business Intelligence**: Data-driven insights to make informed strategic decisions.
6. **Digital Transformation**: Modernize your legacy systems and embrace the future of digital business.

### Metrics
- **500+** Projects Delivered
- **15+** Years Experience
- **1M+** Coding Hours
- **98%** Client Retention

### Case Studies Teaser
**Headline**: Proven Results
**Subhead**: See how we help companies solve complex challenges.
**CTA**: View All Case Studies

### Testimonials
**Headline**: What Our Clients Say
**Quote 1**: "Nexusnao transformed our legacy system into a modern powerhouse. Their team is exceptional." - *Jane Doe, CTO at FinTech Corp*
**Quote 2**: "The AI solution they built saved us 30% in operational costs. Highly recommended." - *John Smith, Founder at RetailAI*

### Process Teaser
**Headline**: How We Work
1. **Discovery**: We dive deep into your goals.
2. **Design**: We craft intuitive user experiences.
3. **Build**: We engineer robust, scalable code.
4. **QA**: We test rigorously for perfection.
5. **Launch**: We deploy with confidence.
6. **Support**: We ensure long-term success.

### Closing CTA
**Headline**: Ready to Transform Your Business?
**Subhead**: Let's discuss your next project.
**CTA**: Get a Proposal

---

## 2. Service Page Template (Example: Custom Software Development)

### Hero
**Headline**: Custom Software Built for Scale & Speed.
**Subhead**: We design and develop bespoke software solutions that solve your specific business challenges and drive efficiency.
**CTA**: Start Your Project

### Problems We Solve
**Headline**: Overcome Your Technical Hurdles
- **Legacy System Limitations**: Modernize outdated software that holds you back.
- **Scalability Issues**: Build systems that grow with your user base.
- **Integration Challenges**: Seamlessly connect disparate tools and data sources.
- **Performance Bottlenecks**: Optimize speed and reliability for better UX.

### Deliverables
**Headline**: What We Deliver
- Enterprise Web Applications
- Mobile App Development (iOS & Android)
- API Development & Integration
- Cloud Infrastructure Setup

### Process Snapshot
1. **Requirement Analysis**: Understanding your specific needs.
2. **Architecture Design**: Planning a robust technical foundation.
3. **Agile Development**: Iterative sprints for rapid delivery.
4. **Deployment & CI/CD**: Automated pipelines for reliable releases.

### Tools & Tech
- **Languages**: TypeScript, Python, Go
- **Frameworks**: Next.js, React, Node.js
- **Cloud**: AWS, Azure, Google Cloud

### FAQs
**Q: How long does a typical project take?**
A: Timelines vary based on complexity, but most MVPs are delivered in 3-4 months.
**Q: Do you provide post-launch support?**
A: Yes, we offer comprehensive maintenance and support packages.

---

## 3. Case Study Template

### Header
**Client**: [Client Name]
**Industry**: [Industry]
**Challenge**: [Brief description of the problem]

### Content
**The Challenge**: Detailed explanation of the pain points and objectives.
**The Approach**: How Nexusnao tackled the problem (strategy, design, tech).
**The Solution**: Description of the final product and its features.

### Results (Metrics)
- **300%** Increase in User Engagement
- **50%** Reduction in Load Times
- **2x** Revenue Growth

### Testimonial
"Nexusnao didn't just build software; they built a solution that revolutionized our business."

---

## 4. About Page

**Headline**: We Are Nexusnao.
**Subhead**: A global team of engineers, designers, and strategists dedicated to digital excellence.
**Mission**: To empower businesses with technology that makes a difference.
**Values**: Excellence, Integrity, Innovation, Collaboration.

---

## 5. Contact Page

**Headline**: Let's Build Something Great.
**Subhead**: Fill out the form below to schedule a discovery call.
**Form Fields**: Name, Email, Company, Project Type, Budget, Message.
**Contact Info**: hello@nexusnao.com | +1 (555) 123-4567

---

## 6. Headlines for A/B Testing
1. "Engineering the Future of Business."
2. "Software That Scales With You."
3. "Digital Excellence, Delivered."
4. "Transforming Ideas into Digital Reality."
5. "Your Partner in Digital Innovation."
6. "Build Better, Faster, Stronger."
7. "Premium Software for Premium Brands."
8. "The Nexus of Technology and Growth."
9. "Empowering Enterprises with AI & Code."
10. "Next-Gen Software Solutions."

```

### `docs\design_system.md`

```markdown
# Nexusnao Design System

## 1. Color Palette (Tailwind Tokens)

### Primary (Violet)
- `primary-50`: `#F5F3FF`
- `primary-100`: `#EDE9FE`
- `primary-200`: `#DDD6FE`
- `primary-300`: `#C4B5FD`
- `primary-400`: `#A78BFA`
- `primary-500`: `#8B5CF6` (Brand Base)
- `primary-600`: `#7C3AED` (Main Action)
- `primary-700`: `#6D28D9`
- `primary-800`: `#5B21B6`
- `primary-900`: `#4C1D95`
- `primary-950`: `#2E1065`

### Accent (Cyan & Blue)
- `accent-cyan`: `#22D3EE` (Cyan-400)
- `accent-blue`: `#3B82F6` (Blue-500)
- **Gradient**: `bg-gradient-to-r from-violet-600 to-cyan-400`

### Neutrals (Slate/Rich Black)
- `neutral-50`: `#F8FAFC`
- `neutral-100`: `#F1F5F9`
- `neutral-200`: `#E2E8F0`
- `neutral-300`: `#CBD5E1`
- `neutral-400`: `#94A3B8`
- `neutral-500`: `#64748B`
- `neutral-600`: `#475569`
- `neutral-700`: `#334155`
- `neutral-800`: `#1E293B`
- `neutral-900`: `#0F172A` (Dark Bg)
- `neutral-950`: `#0B0F19` (Darker Bg)

### Semantic
- `success`: `#16A34A`
- `warning`: `#F59E0B`
- `error`: `#EF4444`

## 2. Typography

**Font Family**: `Inter` (sans-serif) or `Geist Sans`

**Type Scale** (Desktop):
- `Display`: 3.5rem (56px) / 1.1 - Bold/ExtraBold
- `H1`: 2.5rem (40px) / 1.2 - Bold
- `H2`: 2.0rem (32px) / 1.25 - SemiBold
- `H3`: 1.5rem (24px) / 1.3 - SemiBold
- `H4`: 1.25rem (20px) / 1.4 - Medium
- `Body Large`: 1.125rem (18px) / 1.6 - Regular
- `Body`: 1rem (16px) / 1.6 - Regular
- `Small`: 0.875rem (14px) / 1.5 - Regular
- `Tiny`: 0.75rem (12px) / 1.5 - Medium (Caps)

## 3. Spacing & Layout

- **Container**: `max-w-7xl` (1280px) or `max-w-6xl` (1152px)
- **Grid System**: 8px base unit.
- **Section Padding**: `py-16` (64px) to `py-24` (96px)
- **Gap**: `gap-4` (16px), `gap-8` (32px), `gap-12` (48px)

## 4. Radii & Shadows

- **Radius**:
  - `rounded-lg`: 8px (Inputs, Small Cards)
  - `rounded-xl`: 12px (Standard Cards)
  - `rounded-2xl`: 16px (Featured Cards)
  - `rounded-3xl`: 24px (Large Containers)
  - `rounded-full`: Pills, Buttons

- **Shadows**:
  - `shadow-sm`: Subtle elevation
  - `shadow-md`: Cards
  - `shadow-lg`: Hover states
  - `shadow-glow`: `0 0 20px rgba(139, 92, 246, 0.3)` (Custom glow)

## 5. Components

### Buttons
- **Primary**: `bg-violet-600 text-white hover:bg-violet-700 rounded-full px-6 py-3 font-medium transition-all shadow-lg shadow-violet-500/20`
- **Secondary**: `border border-neutral-700 text-white hover:bg-neutral-800 rounded-full px-6 py-3 font-medium transition-all`
- **Ghost/Link**: `text-violet-400 hover:text-violet-300 font-medium flex items-center gap-2`

### Cards
- **Base**: `bg-white dark:bg-neutral-900/50 backdrop-blur border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-violet-500/50 transition-colors`
- **Feature**: Icon (p-3 rounded-lg bg-violet-500/10 text-violet-400) + Title + Description

### Motion
- **Hover**: Scale 1.02, Lift -2px
- **Entrance**: Fade in up (y: 20 -> 0, opacity: 0 -> 1)

```

### `docs\seo_strategy.md`

```markdown
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

```

### `docs\sitemap.md`

```markdown
# Nexusnao Sitemap & Information Architecture

## 1. Global Navigation
- **Logo** (Left)
- **Links** (Center/Right):
  - Services (Dropdown)
  - Case Studies
  - Process
  - About
  - Insights
- **CTA** (Right): "Book Discovery Call" (Primary Pill)

## 2. Page Structure

### Home (`/`)
- **Hero**: Value Prop + Trust + CTAs
- **Social Proof**: Logo Wall
- **Services Overview**: 6 Cards Grid
- **Metrics**: Stats Bar
- **Case Studies**: Featured Projects
- **Testimonials**: Grid
- **Process Teaser**: Steps
- **CTA**: Final Call to Action

### Services (`/services`)
- **Index**: Overview of all services
- **Detail Pages** (`/services/[slug]`):
  - Custom Software Development
  - E-commerce Solutions
  - AI Solutions
  - UI/UX Design
  - Business Intelligence
  - Digital Transformation
  *Template*: Hero -> Problems Solved -> Deliverables -> Process -> Tech -> Case Study -> FAQ

### Case Studies (`/case-studies`)
- **Index**: Filterable grid of projects
- **Detail Pages** (`/case-studies/[slug]`):
  - Client/Challenge -> Approach -> Results (Metrics) -> Testimonial -> CTA

### Company
- **About** (`/about`): Mission, Values, Team
- **Process** (`/process`): Detailed methodology
- **Technologies** (`/technologies`): Tech stack showcase
- **Careers** (`/careers`): Culture + Open roles
- **Contact** (`/contact`): Form + Info

### Resources
- **Insights** (`/insights`): Blog/Articles

### Legal
- Privacy Policy
- Terms of Service
- Cookie Policy

## 3. URL Structure
- `https://nexusnao.com/`
- `https://nexusnao.com/services/ai-solutions`
- `https://nexusnao.com/case-studies/fintech-transformation`
- `https://nexusnao.com/about`

```

---

## Styles

### `app\globals.css`

```css
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));

@theme {
  /* Colors */
  --color-primary-50: #F5F3FF;
  --color-primary-100: #EDE9FE;
  --color-primary-200: #DDD6FE;
  --color-primary-300: #C4B5FD;
  --color-primary-400: #A78BFA;
  --color-primary-500: #8B5CF6;
  --color-primary-600: #7C3AED;
  --color-primary-700: #6D28D9;
  --color-primary-800: #5B21B6;
  --color-primary-900: #4C1D95;
  --color-primary-950: #2E1065;

  --color-accent-cyan: #22D3EE;
  --color-accent-blue: #3B82F6;

  --color-neutral-50: #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0F172A;
  --color-neutral-950: #0B0F19;

  /* Semantic Colors */
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Typography */
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;

  /* Radii */
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;

  /* Shadows */
  --shadow-glow: 0 0 20px rgba(139, 92, 246, 0.3);
}

:root {
  --background: #ffffff;
  --foreground: #0F172A;
}

.dark {
  --background: #0B0F19;
  --foreground: #F8FAFC;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}
```

---
