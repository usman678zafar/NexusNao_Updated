import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nexusnao.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/process',
        '/services',
        '/technologies',
        '/case-studies',
        '/insights',
        '/contact',
        '/careers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic Case Study routes
    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...caseStudyRoutes]
}
