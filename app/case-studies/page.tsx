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
