<script setup lang="ts">
  const config = useRuntimeConfig()
  import { useRoute } from 'nuxt/app';

  const { slug } = useRoute().params;
  const isPreview = config.public.storyblokVersion === 'draft';

  const story = await useAsyncStoryblok(slug && slug.length ? slug.join('/') : 'home', { version: config.public.storyblokVersion });
  
  onMounted(() => {
    if (isPreview && story.value?.id) {
      useStoryblokBridge(story.value.id, () => {
        refresh()
      })
    }
  })
</script> 

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
