<script setup lang="ts">
import { useFetch } from 'nuxt/app';

const props = defineProps({
  category: String,
})

const { data: news } = await useFetch('/api/news', {
  query: {
    category: props.category !== 'all'
      ? props.category
      : undefined
  }
})
</script>

<template>
  <section class="space-y-6">
    <ClientOnly>
      <div class="space-y-4">
        <NewsCard
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
