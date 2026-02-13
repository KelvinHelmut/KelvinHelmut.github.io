import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        company: z.string(),
        role: z.string(),
        period: z.string(),
        location: z.string().optional(),
        description: z.string().optional(),
        highlights: z.array(z.string()).optional(),
        technologies: z.array(z.string()).optional(),
        locale: z.enum(['es', 'en']),
        order: z.number().optional(),
    })
});

const projectCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        github: z.string().optional(),
        featured: z.boolean().default(false),
        locale: z.enum(['es', 'en']),
    })
});

const educationCollection = defineCollection({
    type: 'data',
    schema: z.object({
        institution: z.string(),
        degree: z.string(),
        period: z.string(),
        description: z.string().optional(),
        highlights: z.array(z.string()).optional(),
        locale: z.enum(['es', 'en']),
        order: z.number().optional(),
    })
});

const courseCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        platform: z.string(),
        date: z.string(),
        link: z.string().optional(),
        locale: z.enum(['es', 'en']),
        order: z.number().optional(),
    })
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()),
        locale: z.enum(['es', 'en']),
    })
});

export const collections = {
    'experience': experienceCollection,
    'projects': projectCollection,
    'blog': blogCollection,
    'education': educationCollection,
    'courses': courseCollection,
};
