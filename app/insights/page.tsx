import { CtaBand } from "@/components/marketing/cta-band"

export const metadata = {
  title: "Insights",
  description: "Articles, guides, and insights on software development and digital transformation.",
}

export default function InsightsPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Insights
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Articles, guides, and insights on software development and digital transformation.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="bg-neutral-50 dark:bg-neutral-900 p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              We're working on bringing you valuable insights and articles. Check back soon!
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
