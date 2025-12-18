<script setup>
  const props = defineProps({
    blok: Object,
    category: String,
  })
</script>

<template>
  <header v-editable="blok">
    <h1 class="text-3xl font-bold items-center w-full h-200px flex justify-center m-6">
      {{ category?.toLocaleUpperCase() || blok.title }}
    </h1>
  </header>
</template>
