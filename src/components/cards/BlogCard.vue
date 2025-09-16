<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="space-y-5">
    <!-- image -->
    <div
      class="block min-h-[300px] max-h-[300px] w-full rounded-[20px]"
      :style="`background-image:src(${src})`"
    ></div>
    <div class="flex flex-col space-y-2">
      <span class="block">{{ title }}</span>
      <span class="block text-xs">{{ description }}</span>
    </div>
  </div>
</template>
