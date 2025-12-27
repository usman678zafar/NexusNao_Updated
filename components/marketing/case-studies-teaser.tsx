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
    colorOverlay: "from-blue-900/70 to-blue-800/70",
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
    <section className="py-24 bg-white dark:bg-neutral-950 mx-4 my-4 overflow-hidden">
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
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-none"
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
                  <span className="text-sm font-medium text-blue-300 mb-2">
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
