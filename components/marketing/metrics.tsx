"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Projects Delivered", value: "500+", suffix: "" },
  { label: "Years Experience", value: "15+", suffix: "" },
  { label: "Coding Hours", value: "1M+", suffix: "" },
  { label: "Client Retention", value: "98", suffix: "%" },
]

export function Metrics() {
  return (
    <section className="py-20 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden">
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
