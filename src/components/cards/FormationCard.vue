<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  actionText: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="p-5 rounded-[20px] border border-neutral-300 space-y-5">
    <!-- title & description -->
    <div class="flex flex-col space-y-5">
      <h1 class="font-bold lg:text-lg text-sm">
        {{ title }}
      </h1>
      <p class="">{{ description }}</p>
    </div>
    <!-- action -->
    <div class="flex pt-5 border-neutral-300">
      <button class="block font-bold text-center mx-auto">{{ actionText }}</button>
    </div>
  </div>
</template>
