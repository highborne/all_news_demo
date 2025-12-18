<script setup>
  const props = defineProps({
    blok: Object,
    category: String,
  })
</script>

<template>
  <header v-editable="blok">
     <div class="grid grid-cols-1 gap-4 w-full p-6 items-center md:grid-cols-[1fr_9fr]">
            <div class="flex items-center justify-center">
              <NuxtLink
                to="/"
                class="text-black border-2 border-black text-center rounded-md p-3 max-w-36"
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
