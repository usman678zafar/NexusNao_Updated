"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

const trustLogos = ["FinTech Corp", "RetailAI", "StyleGlobal", "GlobalTech"]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for parallax movement
  const springConfig = { damping: 25, stiffness: 150 }
  const parallaxX = useSpring(useTransform(mouseX, [0, 2000], [-30, 30]), springConfig)
  const parallaxY = useSpring(useTransform(mouseY, [0, 1200], [-30, 30]), springConfig)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  const titleText = "Building Tomorrow’s"
  const subtitleText = "Software, Today"

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-black group"
    >
      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 116, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Media & Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/vid1-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black" />

        {/* Mouse-Reactive Parallax Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
          />
          <motion.div
            style={{
              x: useTransform(parallaxX, (v) => v * -1.5),
              y: useTransform(parallaxY, (v) => v * -1.5)
            }}
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full"
          />
        </div>
      </div>

      <div className="container relative z-20 px-4 sm:px-6 md:px-12 lg:px-16 py-16 mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95] perspective-1000">
                <span className="block overflow-hidden pb-2">
                  {titleText.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.2em]">
                      {word.split("").map((char, charIdx) => (
                        <motion.span
                          key={charIdx}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.1 + (wordIdx * 5 + charIdx) * 0.03,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </span>
                <span className="block overflow-hidden italic pb-4 font-serif">
                  {subtitleText.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.2em]">
                      {word.split("").map((char, charIdx) => (
                        <motion.span
                          key={charIdx}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.8 + (wordIdx * 5 + charIdx) * 0.03,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto font-light"
              >
                Enterprise-grade solutions designed to <span className="text-white font-medium">scale</span>,
                <span className="text-white font-medium"> accelerate growth</span>, and turn ambitious
                ideas into digital success stories.
              </motion.p>
            </div>

            {/* Key Features Stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                '50+ Projects Delivered',
                '98% Client Satisfaction',
                '4+ Years Experience'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                  <span className="text-base font-medium tracking-wide">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Magnetic CTA Structure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-16 px-10 text-lg font-bold rounded-none bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-all duration-300 border-0 w-full sm:w-auto shine-effect relative"
                  asChild
                >
                  <Link href="/contact">
                    Let's Connect <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg font-bold rounded-none bg-white/5 border-white/20 hover:bg-white/10 text-white backdrop-blur-md transition-all w-full sm:w-auto"
                  asChild
                >
                  <Link href="/case-studies" className="flex items-center gap-3">
                    <Play className="w-5 h-5 fill-current" />
                    View case studies
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 3 }}
              className="pt-16 border-t border-white/10"
            >
              <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8 font-bold">In Collaboration With</div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {trustLogos.map((logo) => (
                  <div key={logo} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors cursor-default tracking-widest">
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
