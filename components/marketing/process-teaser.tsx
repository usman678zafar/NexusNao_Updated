"use client"

import { motion } from "framer-motion"

const steps = [
  { number: "01", title: "Discovery", description: "We dive deep into your goals and requirements." },
  { number: "02", title: "Design", description: "We craft intuitive and engaging user experiences." },
  { number: "03", title: "Build", description: "We engineer robust, scalable, and secure code." },
  { number: "04", title: "QA", description: "We test rigorously for perfection and reliability." },
  { number: "05", title: "Launch", description: "We deploy with confidence and monitor performance." },
  { number: "06", title: "Support", description: "We ensure long-term success with ongoing maintenance." },
]

export function ProcessTeaser() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-900 to-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-violet-200">
            A proven methodology for delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-violet-200 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
