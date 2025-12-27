"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown, Terminal, ShoppingBag, Bot, PenTool, LineChart, Globe, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    name: "Custom Software",
    href: "/services/custom-software-development",
    icon: Terminal,
    description: "Tailored solutions for your unique needs"
  },
  {
    name: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
    icon: ShoppingBag,
    description: "Scalable online stores that convert"
  },
  {
    name: "AI Solutions",
    href: "/services/ai-solutions",
    icon: Bot,
    description: "Intelligent automation and insights"
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    icon: PenTool,
    description: "Beautiful, intuitive interfaces"
  },
  {
    name: "Business Intelligence",
    href: "/services/business-intelligence",
    icon: LineChart,
    description: "Data-driven decision making"
  },
  {
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    icon: Globe,
    description: "Modernize your operations"
  },
]

const navigation = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false)
  const pathname = usePathname()
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
    setShowServicesDropdown(false)
  }, [pathname])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="mx-auto px-4 sm:px-6 py-4 md:py-6 lg:py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "mx-auto flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-3 transition-all duration-500 pointer-events-auto rounded-full border border-white/10 bg-neutral-950/10 backdrop-blur-md",
            isScrolled
              ? "max-w-5xl shadow-2xl bg-neutral-950/40"
              : "max-w-6xl shadow-none"
          )}
        >
          {/* Logo - Fixed width for centering nav */}
          <div className="flex-shrink-0 min-w-[140px] md:min-w-[180px]">
            <Link href="/" className="flex items-center z-50 group">
              <Image
                src="/logo-white.png"
                alt="Nexus Nao"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav - Absolutely centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServicesDropdown(true)}
                onMouseLeave={() => item.hasDropdown && setShowServicesDropdown(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 group z-10",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-blue-400"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {/* Sliding Pill Background - only for active or hover */}
                  {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-x-1 inset-y-1 bg-white/5 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-1">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        showServicesDropdown && "rotate-180"
                      )} />
                    )}
                  </motion.span>
                </Link>

                {/* Services Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                      <div className="p-2">
                        {services.map((service) => {
                          const Icon = service.icon
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm text-white mb-0.5">
                                  {service.name}
                                </div>
                                <div className="text-xs text-neutral-400">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                      <div className="border-t border-white/5 p-3 bg-white/5">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          View all services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA - Fixed width for centering nav */}
          <div className="hidden lg:flex items-center justify-end gap-3 min-w-[140px] md:min-w-[180px]">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-10 px-6 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                Discovery <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <Button asChild size="sm" className="rounded-full h-8 px-4 text-xs bg-blue-600 hover:bg-blue-500 text-white">
              <Link href="/contact">Book Call</Link>
            </Button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mt-4 mx-auto max-w-sm bg-neutral-900 border border-white/10 p-6 rounded-3xl shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto pointer-events-auto backdrop-blur-2xl"
            >
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-2xl text-base font-medium transition-colors",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-blue-400 bg-blue-400/10 font-bold"
                          : "text-neutral-400 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1 grid grid-cols-1 gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-neutral-500 hover:text-blue-400 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                <Button variant="outline" asChild className="w-full rounded-2xl border-white/10 text-white hover:bg-white/5">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="w-full rounded-2xl bg-blue-600 hover:bg-blue-500">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden -z-10 pointer-events-auto"
          />
        )}
      </AnimatePresence>
    </header>
  )
}
