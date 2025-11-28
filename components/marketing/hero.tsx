"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustLogos = ["FinTech Corp", "RetailAI", "StyleGlobal", "GlobalTech"]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="container relative z-10 px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Crafting Future
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
                  Software Today
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-xl">
                Transforming Ideas Into Software Success Stories. We build enterprise-grade solutions that scale.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 border-0 w-full sm:w-auto justify-center"
                asChild
              >
                <Link href="/contact">
                  Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-all w-full sm:w-auto justify-center"
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
              className="pt-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Trusted by product teams at</div>
              <div className="flex flex-wrap items-center gap-3">
                {trustLogos.map((logo) => (
                  <div key={logo} className="px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900/40 text-sm text-neutral-400">
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl">
              {/* 3D Image */}
              <div className="relative">
                <Image
                  src="/hero-3d-visual.png"
                  alt="3D Visual"
                  width={800}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
