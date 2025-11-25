"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Custom Software", href: "/services/custom-software-development" },
      { name: "AI Solutions", href: "/services/ai-solutions" },
      { name: "E-commerce", href: "/services/e-commerce-solutions" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
    ]
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

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
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/30"
          >
            N
          </motion.div>
          <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            Nexusnao
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 relative group",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                )}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    activeDropdown === item.name && "rotate-180"
                  )} />
                )}
                {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden"
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            asChild 
            className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild className="rounded-full shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow">
            <Link href="/contact">
              Book Discovery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden z-50 p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

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
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <Button variant="outline" asChild className="w-full rounded-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="w-full rounded-full">
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
