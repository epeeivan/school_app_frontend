<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})
const colorClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'text-white bg-primary-400'
    case 'stroke-secondary':
      return 'text-secondary-100 border-[3px] border-secondary-100'
    default:
      return ''
  }
})
</script>
<template>
  <RouterLink
    :to="{ name: to }"
    class="rounded-[10px] px-5 py-3 lg:text-lg font-bold"
    :class="colorClasses"
  >
    <span class="my-auto block">{{ text }}</span>
  </RouterLink>
</template>
