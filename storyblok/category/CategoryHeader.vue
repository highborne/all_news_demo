<script setup>
  const props = defineProps({
    blok: Object,
    category: String,
  })
</script>

<template>
  <header v-editable="blok">
    <div class="grid grid-cols-1 gap-4 w-full items-center md:grid-cols-[1fr_9fr] w-full h-24">
      <div class="flex items-center justify-center">
          <NuxtLink
            to="/"
            class="flex justify-center items-center w-32 h-12 font-bold text-black border-2 border-black rounded-md"
          >
            Home
          </NuxtLink>
      </div>
      <div class="flex items-center md:w-[90%] justify-center">
        <h1 class="text-3xl font-bold self-center">
          {{ category?.toLocaleUpperCase() || blok.title }}
        </h1>
      </div>
    </div>
  </header>
</template>
