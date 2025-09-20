<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="space-y-2.5">
    <span class="block lg:text-4xl text-2xl font-bold">{{ value }}</span>
    <div class="h-[5px] w-[40px] rounded-full bg-info-300"></div>
    <span class="lg:text-lg text-medium font-semibold text-wrap block">{{ label }}</span>
  </div>
</template>
