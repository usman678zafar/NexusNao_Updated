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
