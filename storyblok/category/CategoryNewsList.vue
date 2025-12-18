<script setup lang="ts">
  import { useFetch } from 'nuxt/app';
import type { NewsItem } from '../../types/news';

const props = defineProps({
  category: String,
})

const { data: news } = await useFetch<NewsItem[]>('/api/news', {
  query: {
    category: props.category !== 'all'
      ? props.category
      : undefined
  }
})
</script>

<template>
  <section class="flex flex-col w-full gap-6 items-center">
    <ClientOnly>
      <div class="space-y-4">
        <CategoryNewsCard
            v-for="item in news"
            :key="item.url"
            :news="{
                title: item.title,
                description: item.description,
                image: item.image,
                publishedAt: item.publishedAt,
                source: item.source.name,
            }"
            />
      </div>

      <template #fallback>
        <p class="text-sm text-gray-400">Carregando notícias…</p>
      </template>
    </ClientOnly>
  </section>
</template>
