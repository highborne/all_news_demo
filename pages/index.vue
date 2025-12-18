<script setup lang="ts">
  const config = useRuntimeConfig()
 
   import { useRoute } from 'nuxt/app';

    const { slug } = useRoute().params;
    const story = await useAsyncStoryblok(slug && slug.length ? slug.join('/') : 'home', { version: config.public.storyblokVersion },
    );

    console.log(config.public.storyblokVersion  + ' version loaded for story: ' + (slug && slug.length ? slug.join('/') : 'home'));

  if (process.client && config.public.storyblokVersion === 'draft') {
    console.log('Initializing Storyblok Bridge for live updates...')
    watch(story, (value) => {
      if (!value) return
      
      useStoryblokBridge(value.id, (newStory) => {
        story.value = newStory
      })
    })
  }
</script> 

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
