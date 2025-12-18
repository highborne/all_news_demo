<script setup>
    const props = defineProps({ blok: Object })

    const route = useRoute()

    const category = computed(() => {
    const slug = route.params.slug
    return Array.isArray(slug) ? slug[0] : slug
    })

</script>

<template>
    <div v-editable="blok" class="px-4">
        <StoryblokComponent
            v-for="headerBlock in blok.header"
            :key="headerBlock._uid"
            :blok="headerBlock"
            :category="category"
        />
        <StoryblokComponent 
            v-for="bodyBlock in blok.body" 
            :key="bodyBlock._uid" 
            :blok="bodyBlock" 
            :category="category"
        />
    </div>
</template>