<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <span
    class="absolute z-10 w-0 group-hover:w-auto group-hover:border bg-white dark:bg-dark-100 dark:border-dark-100 overflow-hidden group-hover:px-2 p-0 rounded-[10px] left-10 transition-all"
    >{{ text }}
  </span>
</template>
