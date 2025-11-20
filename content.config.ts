import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { Enum } from './shared/utils/enum'

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'page',
            source: 'projects/*.md',
            schema: z.object({
                project_url: z.string().optional(),
                title: z.string(),
                description: z.string(),
                published: z.string(),
                keywords: z.string(),
                status: z.string(),
                slug: z.string(),
                category: z.array(z.enum(Enum.ProjectCategory.map(c => c.title))).optional(),
                images: z.array(z.string()).optional(),
                class: z.string().optional(),
                featured: z.boolean().optional()
            })
        }),
        testimonials: defineCollection({
            type: 'page',
            source: 'testimonials/*.md',
            schema: z.object({
                name: z.string(),
                company: z.string(),
                position: z.string(),
                rating: z.number(),
                avatar: z.string(),
                featured: z.boolean().optional(),
                excerpt: z.string().optional()
            })
        }),
        team: defineCollection({
            type: 'page',
            source: 'team/*.md',
            schema: z.object({
                name: z.string(),
                position: z.string(),
                bio: z.string(),
                avatar: z.string(),
                email: z.string().optional(),
                linkedin: z.string().optional(),
                twitter: z.string().optional(),
                instagram: z.string().optional(),
                github: z.string().optional(),
                behance: z.string().optional(),
                featured: z.boolean().optional(),
                order: z.number().optional()
            })
        }),
        articles: defineCollection({
            type: 'page',
            source: 'articles/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                published: z.string(),
                author: z.string(),
                category: z.enum(Enum.ArticleCategory.map(c => c.title) as [string, ...string[]]),
                tags: z.array(z.string()),
                image: z.string().optional(),
                slug: z.string().optional(),
                featured: z.boolean().optional()
            })
        })
    }
})
