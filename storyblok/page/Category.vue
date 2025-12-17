<script setup lang="ts">
import { computed } from 'vue';
import NewsList from '../NewsList.vue';

interface Props {
    blok: {
        title?: string
    }
    category?:string
}

const props = defineProps<Props>()

const category = computed(() =>  props.category || 'all')
const title = computed(() => props.blok.title || category.value.toUpperCase())
</script>

<template>
    <div class="flex flex-col items-center gap-6 m-9">
        <div class="grid grid-cols-[1fr_9fr] gap-4 w-full items-center">
            <NuxtLink
                to="/"
                class="text-black border-2 border-black text-center rounded-md p-3"
                >
                Home
            </NuxtLink>
            <div class="flex items-center w-[90%] justify-center">
                 <h1 class="text-3xl font-bold self-center">
                {{ title  }}
            </h1>
            </div>
        </div>
            
        <NewsList :category="category"/>
    </div>
</template>