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
      class="block lg:h-[300px] h-[200px] w-full rounded-[20px] bg-neutral-100"
      :style="`background-image:src(${src})`"
    ></div>
    <div class="flex flex-col space-y-2">
      <span class="block text-primary-300 font-bold lg:text-lg">{{ title }}</span>
      <span class="block  text-neutral-500">{{ description }}</span>
    </div>
  </div>
</template>
