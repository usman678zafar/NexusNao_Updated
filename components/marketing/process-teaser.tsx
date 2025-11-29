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
