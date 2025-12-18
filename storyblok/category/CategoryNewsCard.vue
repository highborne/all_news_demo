<template>
  <div
    class="flex flex-row bg-white border border-[#eee] rounded-lg shadow-sm overflow-hidden w-full w-max-[800px] text-center"
  >
    <div class="news-card-grid grid md:grid-cols-[300px_1fr] min-h-[250px]">
      <div class="news-image">
        <img class="object-cover h-full" :src="news.image" :alt="news.title" />
      </div>

      <div class="news-content flex flex-col justify-between p-5 items-start bg-white">
        <div>
          <h2 class="news-title mb-5 text-2xl font-bold text-[#1a1a1a] text-left">{{ news.title }}</h2>
          <p class="news-description text-sm text-[#4a4a4a] text-justify mb-5">{{ news.description }}</p>
        </div>

        <div class="news-footer flex text-xs border-t border-[#eee] pt-2">
          <p class="news-date">{{  formattedDate  }}</p>
          <p class="news-separator mx-2">|</p>
          <p class="news-source uppercase font-semibold">Fonte: {{  news.source }}</p>
        </div>
      </div>
    </div>
  </div> 
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { NewsItem } from '../../types/news';

  const props = defineProps<{
    news: NewsItem
  }>()

  const formattedDate = computed(() =>
    new Date(props.news.publishedAt).toLocaleDateString('pt-BR')
  )
</script>
