<script setup lang="ts">
import BaseIcon from './bases/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const iconSize = computed(() => (props.isMobile ? 25 : 82))
const iconStrokeWidth = computed(() => (props.isMobile ? 2 : 1.5))
</script>
<template>
  <div class="text-white flex flex-col space-y-5">
    <span class="lg:font-bold font-semibold mx-auto lg:text-lg text-center">{{ label }}</span>
    <BaseIcon :name="icon" :size="iconSize" class="mx-auto" :stroke-width="iconStrokeWidth" />
  </div>
</template>
