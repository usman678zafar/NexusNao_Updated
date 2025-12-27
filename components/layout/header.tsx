"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
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
  const { theme, setTheme, resolvedTheme } = useTheme()
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-lg shadow-neutral-900/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <Image
            src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "/logo-white.png" : "/logo1.png"}
            alt="Nexus Nao"
            width={180}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              ref={item.hasDropdown ? dropdownRef : null}
              onMouseEnter={() => item.hasDropdown && setShowServicesDropdown(true)}
              onMouseLeave={() => item.hasDropdown && setShowServicesDropdown(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-none text-sm font-medium transition-colors duration-200 flex items-center gap-1 group z-10",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                )}
              >
                {/* Sliding Pill Background */}
                {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-100 dark:bg-blue-900/40 rounded-none -z-10"
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
              {item.hasDropdown && showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none shadow-2xl overflow-hidden"
                >
                  <div className="p-2">
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start gap-3 p-3 rounded-none hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors group"
                        >
                          <div className="mt-1 p-2 rounded-none bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-neutral-900 dark:text-white mb-0.5">
                              {service.name}
                            </div>
                            <div className="text-xs text-neutral-600 dark:text-neutral-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="border-t border-neutral-200 dark:border-neutral-800 p-3 bg-neutral-50 dark:bg-neutral-900/50">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                    >
                      View all services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-none hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-none hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild className="rounded-none shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow">
            <Link href="/contact">
              Book Discovery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-none text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 pt-24 shadow-2xl md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between px-1 mb-4">
                  <span className="text-base font-medium text-neutral-900 dark:text-white">Appearance</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-none hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
                <Button variant="outline" asChild className="w-full rounded-none">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="w-full rounded-none">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
