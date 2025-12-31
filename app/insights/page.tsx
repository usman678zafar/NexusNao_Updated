"use client"

import { useEffect, useState } from "react"
import { InsightCard } from "@/components/marketing/insight-card"
import { CtaBand } from "@/components/marketing/cta-band"

export default function InsightsPage() {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/articles")
        const json = await res.json()
        if (json.success) {
          setArticles(json.data)
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <>
      <div className="pt-40 pb-16 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-violet-900/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights & <span className="text-blue-500">Innovation</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
            Exploring the intersection of technology, design, and business strategy to help you navigate the digital landscape.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950 min-h-[600px]">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[450px] bg-neutral-100 dark:bg-neutral-900 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <InsightCard key={article._id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-dashed border-neutral-300 dark:border-neutral-800">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-neutral-600 dark:text-neutral-400">We're preparing high-quality content for you. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
