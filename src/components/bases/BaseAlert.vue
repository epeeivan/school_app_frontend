<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  mode: {
    type: String,
    default: 'filled',
  },
  src: {
    type: String,
  },
  title: {
    type: String,
  },
})
const type = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'bg-primary-600 border-primary-100'
    case 'info':
      return 'bg-info-600 border-info-600'
    case 'danger':
      return 'bg-danger-600 border-danger-600'
    case 'warning':
      return 'bg-warning-600  border-warning-600'
    case 'secondary':
      return 'bg-secondary-100 text-dark-100 dark:text-secondary-400  border-secondary-100'
    default:
      return ''
  }
})
const mode = computed(() => {
  let retMode = ''
  switch (props.mode) {
    case 'trans':
      retMode += ' bg-opacity-20  dark:text-white'
      break
    case 'stroke':
      retMode += ' border border-1'
      break
    default:
      break
  }
  return retMode
})
</script>
<template>
  <div :class="['p-3 px-5 rounded-[10px] text-dark-100', type, mode]">
    <slot>
      <div :class="[src ? ' grid grid-cols-12 gap-5' : '']">
        <div v-if="src" class="col-span-2">
          <img :src="src" alt="" />
        </div>
        <div :class="[src ? 'col-span-10' : '', 'space-y-2']">
          <h1 v-if="title" class="font-medium">{{ title }}</h1>
          <p>
            <slot name="text-content" />
          </p>
        </div>
      </div>
    </slot>
  </div>
</template>
