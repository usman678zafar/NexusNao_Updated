import { CtaBand } from "@/components/marketing/cta-band"
import { Users, Target, Heart, Award } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about Nexusnao, our mission, values, and the team behind our success.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. We strive for perfection in every line of code and pixel of design.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from working closely with our clients and each other.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We are honest, transparent, and always do what's right for our clients.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly explore new technologies to stay ahead of the curve.",
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          We Are Nexusnao
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          A global team of engineers, designers, and strategists dedicated to digital excellence.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                To empower businesses with technology that makes a difference. We believe that software has the power to transform industries and improve lives.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Founded in 2010, we've grown from a small group of passionate coders to a global agency trusted by Fortune 500 companies and ambitious startups alike.
              </p>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl aspect-video flex items-center justify-center">
               {/* Placeholder for team image */}
               <span className="text-neutral-400 font-medium">Team Photo</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center">
                <div className="w-12 h-12 mx-auto bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
