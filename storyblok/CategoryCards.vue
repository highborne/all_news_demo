<script setup lang="ts">
  import { CategoryItem } from '../types/category';

  const props = defineProps<{
    category: CategoryItem
  }>()

  const { category :{ title, icon:{ filename, alt} }  } = props
</script>

<template>
  <div
    class="flex flex-col gap-4 bg-white border border-[#eee] rounded-lg shadow-sm w-[300px] h-[300px] text-center cursor-pointer"
    @click="$router.push(`/category/${title.toLowerCase()}`)"
  >
      <img class="object-contain h-32 w-32 m-auto mt-10" :src="filename" :alt="alt" />
      <p class="text-4xl font-bold p-4">{{ title }}</p>
  </div> 
</template>


