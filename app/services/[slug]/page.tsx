import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden aspect-square relative shadow-2xl">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={`Solving ${service.title} Challenges`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-neutral-400 text-center">
                    <service.icon className="w-24 h-24 mx-auto mb-4 opacity-20" />
                    <p>Illustration: Solving {service.title} Challenges</p>
                  </div>
                </div>
              )}
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
