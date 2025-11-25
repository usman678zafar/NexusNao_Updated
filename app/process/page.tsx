import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Our Process",
  description: "Our proven methodology for delivering high-quality software solutions.",
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, market research, and feasibility analysis.",
    deliverables: ["Project Charter", "Requirements Document", "Technical Architecture"],
  },
  {
    number: "02",
    title: "Design",
    description: "Our design team creates intuitive and engaging user experiences. We focus on usability, accessibility, and brand consistency.",
    deliverables: ["Wireframes", "UI Mockups", "Interactive Prototypes"],
  },
  {
    number: "03",
    title: "Build",
    description: "We engineer robust, scalable, and secure code using modern technologies. We follow agile methodologies with regular sprints and demos.",
    deliverables: ["Clean Code", "API Documentation", "Unit Tests"],
  },
  {
    number: "04",
    title: "QA",
    description: "We test rigorously for perfection and reliability. This includes automated testing, manual testing, and security audits.",
    deliverables: ["Test Reports", "Bug Fixes", "Security Audit"],
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy with confidence and monitor performance. We ensure a smooth transition with minimal downtime.",
    deliverables: ["Production Deployment", "Monitoring Setup", "User Training"],
  },
  {
    number: "06",
    title: "Support",
    description: "We ensure long-term success with ongoing maintenance and support. We are here to help you scale and evolve.",
    deliverables: ["SLA Support", "Performance Optimization", "Feature Updates"],
  },
]

export default function ProcessPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          How We Work
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          A proven methodology for delivering excellence, every time.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-cyan-400 opacity-50">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-3">
                      Key Deliverables
                    </h3>
                    <ul className="flex flex-wrap gap-3">
                      {step.deliverables.map((item) => (
                        <li key={item} className="px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
