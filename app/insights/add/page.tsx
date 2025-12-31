"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddArticlePage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const data = {
            title: formData.get("title"),
            slug: formData.get("slug"),
            description: formData.get("description"),
            content: formData.get("content"),
            image: formData.get("image"),
            category: formData.get("category"),
            author: formData.get("author"),
            readingTime: formData.get("readingTime"),
            featured: formData.get("featured") === "on",
        }

        try {
            const res = await fetch("/api/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            const json = await res.json()

            if (!res.ok) {
                throw new Error(json.error || "Something went wrong")
            }

            router.push("/insights")
            router.refresh()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Add New Article</h1>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Title
                            </label>
                            <input
                                required
                                name="title"
                                defaultValue="" // Controlled by form submission, no state needed for simple form
                                placeholder="e.g. The Future of AI"
                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                onChange={(e) => {
                                    // Auto-generate slug from title
                                    const slugInput = document.querySelector('input[name="slug"]') as HTMLInputElement
                                    if (slugInput) {
                                        slugInput.value = e.target.value
                                            .toLowerCase()
                                            .replace(/[^a-z0-9]+/g, '-')
                                            .replace(/^-+|-+$/g, '')
                                    }
                                }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                    Slug
                                </label>
                                <input
                                    required
                                    name="slug"
                                    placeholder="e.g. future-of-ai"
                                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                    Category
                                </label>
                                <input
                                    required
                                    name="category"
                                    placeholder="e.g. Technology"
                                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Description
                            </label>
                            <textarea
                                required
                                name="description"
                                rows={3}
                                placeholder="Brief summary of the article..."
                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Content
                            </label>
                            <textarea
                                required
                                name="content"
                                rows={10}
                                placeholder="Full article content..."
                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Image URL
                            </label>
                            <input
                                required
                                name="image"
                                placeholder="https://images.unsplash.com/..."
                                defaultValue="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                    Author
                                </label>
                                <input
                                    required
                                    name="author"
                                    placeholder="e.g. John Doe"
                                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                    Reading Time
                                </label>
                                <input
                                    required
                                    name="readingTime"
                                    placeholder="e.g. 5 min read"
                                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="featured"
                                id="featured"
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="featured" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Mark as Featured Article
                            </label>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Creating..." : "Create Article"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
