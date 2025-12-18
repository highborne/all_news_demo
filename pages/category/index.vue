<script setup>
  import { useRoute, useRuntimeConfig } from 'nuxt/app';
  
  const config = useRuntimeConfig()
  
  const story = await useAsyncStoryblok(
    'category',
    { version: config.public.storyblokVersion }
  )
</script>

<template>
  <StoryblokComponent
    v-if="story?.content"
    :blok="story.content"
  />
</template>
