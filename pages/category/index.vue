<script setup>
const story = await useAsyncStoryblok(
  'category',
  { version: 'draft' }
)
</script>

<template>
  <StoryblokComponent
    v-if="story?.content"
    :blok="story.content"
  />
</template>
