import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface InsightCardProps {
    article: {
        title: string;
        slug: string;
        description: string;
        image: string;
        category: string;
        author: string;
        date: string | Date;
        readingTime: string;
    };
    index: number;
}

export function InsightCard({ article, index }: InsightCardProps) {
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            <Link href={`/insights/${article.slug}`} className="block relative aspect-video overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg">
                        {article.category}
                    </span>
                </div>
            </Link>
            <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formattedDate}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    <Link href={`/insights/${article.slug}`}>
                        {article.title}
                    </Link>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3">
                    {article.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-600 dark:text-neutral-300">
                            {article.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{article.author}</span>
                    </div>
                    <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
