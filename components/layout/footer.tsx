import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  Services: [
    { name: "Custom Software", href: "/services/custom-software-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "E-commerce", href: "/services/e-commerce-solutions" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "Technologies", href: "/technologies" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-white.png"
                alt="Nexusnao"
                width={180}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              We engineer high-performance digital platforms, AI solutions, and custom software for ambitious global enterprises.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" className="p-2 bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="p-2 bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" className="p-2 bg-neutral-900 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.Resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Nexusnao. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.Legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
