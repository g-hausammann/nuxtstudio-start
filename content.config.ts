import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    tasks: defineCollection({
      type: 'data',
      source: 'tasks/**.json',
      schema: z.object({
        title: z.string().min(2).max(100),
        description: z.string().min(10).max(500),
        completed: z.boolean().default(false),
      })
    })
  },
})
