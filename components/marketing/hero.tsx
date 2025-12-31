"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { TextScramble } from "@/components/ui/text-scramble"
import { Spotlight } from "@/components/ui/spotlight"
import { cn } from "@/lib/utils"

const trustLogos = ["FinTech Corp", "RetailAI", "StyleGlobal", "GlobalTech", "Nexus Systems", "FutureWave"]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for parallax movement
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 }
  const parallaxX = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]), springConfig)
  const parallaxY = useSpring(useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-20, 20]), springConfig)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30"
    >
      {/* Interactive Spotlight */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <Spotlight className="from-blue-600/20 via-blue-900/10 to-transparent" fill="rgba(37, 99, 235, 0.15)" />
      </div>

      {/* Background Media & Overlays */}
      <div className="absolute inset-0 z-0">

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 md:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

        {/* Abstract Grid Overlay - visible only on hover */}
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"
        />

        {/* 3D Visual/Parallax Layer */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 pointer-events-none hidden lg:block"
        >
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-[10%] w-[30vw] h-[30vw] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-[10%] w-[35vw] h-[35vw] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="container relative z-20 px-4 sm:px-6 md:px-12 lg:px-16 pt-32 pb-20 mx-auto">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-12">



          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white leading-[0.9] flex flex-col items-center gap-2">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Building Tomorrow’s
                  </motion.span>
                </div>
                <div className="overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 pb-2">
                  <TextScramble
                    className="block font-serif italic tracking-tight"
                    trigger={true}
                  >
                    Software, Today
                  </TextScramble>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto font-light tracking-wide pt-6"
              >
                Enterprise-grade solutions designed to <span className="text-white font-medium border-b border-blue-500/30">scale</span>,
                <span className="text-white font-medium border-b border-blue-500/30"> accelerate growth</span>, and turn ambitious
                ideas into digital success stories.
              </motion.p>
            </div>

            {/* Metrics/Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 py-4"
            >
              {[
                '50+ Projects Delivered',
                '98% Client Satisfaction',
                '4+ Years Experience'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, color: "#fff" }}
                  className="flex items-center gap-3 text-neutral-400 px-4 py-2 rounded-full border border-white/5 bg-black/20 backdrop-blur-sm cursor-default transition-colors hover:border-blue-500/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  className="group relative h-16 px-10 text-lg font-bold rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto overflow-hidden"
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg font-bold rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-md transition-all w-full sm:w-auto"
                  asChild
                >
                  <Link href="/case-studies" className="flex items-center gap-3">
                    <Play className="w-5 h-5 fill-current" />
                    View Work
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Glass Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="w-full max-w-5xl mx-auto pt-16 md:pt-24"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <p className="text-center text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8 font-semibold">Allowed by Industry Leaders</p>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {trustLogos.map((logo, idx) => (
                  <motion.div
                    key={logo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + idx * 0.1 }}
                    className="text-lg md:text-xl font-bold text-neutral-300 hover:text-white transition-colors cursor-default"
                  >
                    {logo}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
