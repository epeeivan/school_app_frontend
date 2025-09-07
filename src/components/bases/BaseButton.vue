<script setup lang="ts">
import BaseIcon from '@/components/bases/BaseIcon.vue'
import { computed, useSlots } from 'vue'
import BaseSvgIcon from './BaseSvgIcon.vue'

const slots = useSlots()
const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: 'primary',
  },
  mode: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  iconClass: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
})
const isStroke = computed(() => props.mode === 'stroke')
const currentColor = computed(() => {
  const baseIconColor = '#31333E'
  switch (props.color) {
    case 'primary':
      return {
        button: `bg-primary border-primary ${isStroke.value ? 'text-primary' : 'text-dark-200'}`,
        icon: '',
      }
    case 'secondary':
      return {
        button: `bg-neutral-100 text-dark-100 dark:text-secondary-300 dark:bg-(--dark-500) border-neutral-100 dark:border-dark-400`,
        icon: '',
      }
    case 'success':
      return {
        button: `bg-success-600 border-success-600 ${isStroke.value ? 'text-success-600' : ''}`,
        icon: '',
      }
    case 'info':
      return {
        button: `bg-info-600 border-info-600 ${isStroke.value ? 'text-info-700' : ''}`,
        icon: '',
      }
    case 'danger':
      return {
        button: ` border-danger ${isStroke.value ? 'text-danger' : 'bg-danger text-white'}`,
        icon: isStroke.value ? '#f04f1e' : '',
      }
    case 'warning':
      return {
        button: `bg-warning-700 border-warning-700 ${isStroke.value ? 'text-warning-700' : ''}`,
        icon: '',
      }
    default:
      return { button: '', icon: baseIconColor }
  }
})
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'badge':
      return 'py-3'
    case 'tag':
      return 'py-[3px]'
    default:
      return 'py-[9px]'
  }
})
const modeClasses = computed(() => {
  switch (props.mode) {
    case 'trans':
      return props.color !== 'secondary' ? 'bg-opacity-20 text-black dark:text-neutral-300' : ''
    case 'stroke':
      return 'bg-opacity-0 '
    default:
      return props.color !== 'secondary' ? '' : ''
  }
})
const loadingClass = computed(() => {
  const classes = ['animate-spin']
  if (props.icon || slots.default || props.text) {
    classes.push('ml-2')
  }

  return classes.join(' ')
})
const addMargin = (icon: boolean | string) => {
  return icon ? ' flex' : 'flex'
}
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="loading || disabled"
    class="px-[15px] rounded-[10px] transition-all ease-in duration-100v flex items-center justify-center min-h-[40px] max-h-[40px] font-medium cursor-pointer"
    :class="[
      currentColor.button,
      modeClasses,
      mode !== 'trans' ? 'border' : '',
      disabled ? 'opacity-50' : '',
      sizeClasses,
      block ? 'w-full' : '',
    ]"
  >
    <span :class="addMargin(loading || rightIcon)">
      <BaseSvgIcon
        v-if="icon"
        type="stroke"
        :color="currentColor.icon"
        :size="20"
        :name="icon"
        :class="[text ? 'mr-2' : '']"
      />

      <span class="block leading-none w-[max-content] my-auto">
        {{ text || '' }}
        <slot />
      </span>
    </span>
    <base-icon
      v-if="loading"
      :width="13"
      :height="13"
      :stroke-width="2"
      :class="loadingClass"
      name="Loader"
    />
    <base-icon
      v-if="rightIcon"
      :width="13"
      :height="13"
      :stroke-width="2"
      :name="rightIcon"
      class="ml-2 my-auto"
    />
  </button>
</template>

<style scoped></style>
