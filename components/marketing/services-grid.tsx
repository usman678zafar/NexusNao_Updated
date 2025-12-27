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
    color: "text-blue-400",
    bg: "bg-blue-500/10",
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
    color: "text-blue-400",
    bg: "bg-blue-500/10",
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
    <section className="relative py-24 overflow-hidden bg-neutral-50 dark:bg-neutral-900 mx-4 my-4">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
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
                <div className={`w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
                  className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors"
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
