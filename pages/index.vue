<script setup lang="ts">
  const config = useRuntimeConfig()
  import { useRoute } from 'nuxt/app';

  const { slug } = useRoute().params;

  const story = await useAsyncStoryblok(
    slug && slug.length ? slug.join('/') : 'home', 
    { version: config.public.storyblokVersion as 'draft' | 'published' }
  );
</script> 

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
