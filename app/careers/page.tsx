import Link from "next/link"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Careers",
  description: "Join our team of innovators and builders.",
}

const roles = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "London, UK / Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join Nexusnao
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Build the future with us. We're always looking for exceptional talent.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {role.location}
                    </span>
                    <span>{role.department}</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
