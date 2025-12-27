import { Hero } from "@/components/marketing/hero"
import { LogoWall } from "@/components/marketing/logo-wall"
import { ServicesGrid } from "@/components/marketing/services-grid"
import { Metrics } from "@/components/marketing/metrics"
import { CaseStudiesTeaser } from "@/components/marketing/case-studies-teaser"

import { ProcessTeaser } from "@/components/marketing/process-teaser"
import { CtaBand } from "@/components/marketing/cta-band"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <ServicesGrid />
      <Metrics />
      <CaseStudiesTeaser />

      <ProcessTeaser />
      <CtaBand />
    </>
  )
}
