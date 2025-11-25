import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Technologies",
  description: "The modern tech stack we use to build world-class software.",
}

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "Java", "GraphQL", "NestJS"],
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    name: "Data & AI",
    techs: ["TensorFlow", "PyTorch", "PostgreSQL", "MongoDB", "Redis", "Snowflake"],
  },
]

export default function TechnologiesPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Tech Stack
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          We use the latest tools and frameworks to build future-proof solutions.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  {category.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
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
