"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
          Let's discuss your next project and how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/contact">
              Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
