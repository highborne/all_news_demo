import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

interface NewsQuery {
  category?: string
  lang?: string
  limit?: string
}

interface GNewsArticle {
  title: string
  description: string
  content: string
  url: string
  image: string
  publishedAt: string
  source: {
    name: string
    url: string
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery<NewsQuery>(event)
  const config = useRuntimeConfig()

  const data = await $fetch<{ articles: GNewsArticle[] }>(
    'https://gnews.io/api/v4/top-headlines',
    {
      params: {
        topic: query.category,
        lang: 'en',
        max: Number(query.limit ?? 5),
        token: config.gnewsApiKey,
      },
    }
  )

  return data.articles
})
