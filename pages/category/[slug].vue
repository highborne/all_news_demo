<script setup>
    import { computed } from 'vue';
    import { useRoute, useRuntimeConfig } from 'nuxt/app';
    
    const config = useRuntimeConfig()
    const route = useRoute();
    const category = computed(() => route.params.slug);

    const story = await useAsyncStoryblok(
        'category', 
        { version:  config.public.storyblokVersion}
    )
</script>

<template>
    <StoryblokComponent   
        v-if="story?.content"
        :blok="story.content" 
        :category="category"
    />
</template>