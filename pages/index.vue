<script setup>
  import { useRoute, useRuntimeConfig } from 'nuxt/app';

  const config = useRuntimeConfig()
  const { slug } = useRoute().params;

  const story = await useAsyncStoryblok(
    slug && slug.length ? slug.join('/') : 'home', 
    { version: config.public.storyblokVersion }
  );
</script> 

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
