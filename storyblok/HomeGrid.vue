<script setup lang="ts">
import CategoryCards from './CategoryCards.vue';

const props = defineProps<{ blok: any }>()

</script>

<template>
  <section v-editable="blok" class="h-auto flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CategoryCards
        v-for="category in blok.categories"
        :key="category._uid"
        :category="category"
      />
    </div>
  </section>
</template>
