import { ServicesGrid } from "@/components/marketing/services-grid"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive range of digital engineering services.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          We provide end-to-end solutions to help you build, scale, and innovate.
        </p>
      </div>
      <ServicesGrid />
      <CtaBand />
    </>
  )
}
