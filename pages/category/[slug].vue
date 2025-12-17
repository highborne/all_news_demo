<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'nuxt/app';

    const route = useRoute();
    const category = computed(() => route.params.slug);

    const story = await useAsyncStoryblok('category', { version: 'draft' },
    { customParent: 'https://app.storyblok.com' })
</script>

<template>
    <StoryblokComponent   
        v-if="story?.content"
        :blok="story.content" 
        :category="category"
    />
</template>