<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '@/components/bases/BaseIcon.vue'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },

  color: {
    type: String,
    default: '',
  },
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'danger':
      return 'bg-danger-100 text-danger-600 dark:bg-danger-600 dark:bg-opacity-10 dark:text-danger-600'
    case 'success':
      return 'bg-success-100 text-success-600 dark:bg-success-600 dark:bg-opacity-10'
    default:
      return 'bg-neutral-200 dark:bg-dark-400 dark:text-neutral-300'
  }
})

const isImage = computed(() => props.type === 'image')
const isIcon = computed(() => props.type === 'icon')
const isSmall = computed(() => props.size === 'small')
</script>

<template>
  <div
    class="flex rounded-[5px] bg-cover"
    :class="[
      isSmall
        ? 'min-w-[15px] max-w-[15px] min-h-[15px] max-h-[15px]'
        : 'min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]',
      colorClasses,
    ]"
    :style="isImage ? `background-image: url(${src});` : ''"
  >
    <slot>
      <base-icon
        v-if="isIcon"
        :name="icon"
        :size="isSmall ? 12 : 15"
        :stroke-width="2"
        class="m-auto"
      />
    </slot>
  </div>
</template>
