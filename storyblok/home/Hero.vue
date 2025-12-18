<script setup lanhg="ts">
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="py-24 text-6xl text-black font-bold text-center"
  >
    {{ blok.title }}
  </div>
</template>

