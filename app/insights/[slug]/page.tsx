import { notFound } from "next/navigation"
import Image from "next/image"
import dbConnect from "@/lib/mongodb"
import Article from "@/lib/models/Article"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CtaBand } from "@/components/marketing/cta-band"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    await dbConnect()
    const { slug } = await params
    const article = await Article.findOne({ slug })

    if (!article) {
        notFound()
    }

    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <>
            <article className="pt-40 pb-16 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Link
                        href="/insights"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 mb-12 transition-colors group"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
                    </Link>

                    <header className="mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                            {article.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400 border-y border-neutral-100 dark:border-neutral-800 py-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-neutral-700 dark:text-neutral-200">
                                    {article.author.charAt(0)}
                                </div>
                                <span className="font-medium text-neutral-900 dark:text-white">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                {formattedDate}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-600" />
                                {article.readingTime}
                            </div>
                        </div>
                    </header>

                    <div className="relative aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-blue">
                        <p className="text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                            {article.description}
                        </p>
                        <div className="whitespace-pre-wrap leading-relaxed">
                            {article.content}
                        </div>
                    </div>
                </div>
            </article>

            <CtaBand />
        </>
    )
}
