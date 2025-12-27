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
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 mx-4 my-4 overflow-hidden rounded-none">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 rounded-none shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-blue-500/20" />
                <span className="text-2xl" role="img" aria-label={`Flag of ${testimonial.flag}`}>{testimonial.flag}</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  {testimonial.author[0]}
                </div>
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
