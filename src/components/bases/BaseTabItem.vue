<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseSvgIcon from '@/components/bases/BaseSvgIcon.vue'

const route = useRoute()

const props = defineProps({
  to: [String, Object],
  icon: {
    type: String,
    default: '',
  },
})

const toRouter = computed(() => {
  return typeof props.to === 'object' ? props.to : { name: props.to }
})

const isActiveRoute = computed(() => {
  const routeName = route.name as string
  return routeName === toRouter.value.name || routeName.includes(toRouter.value.name)
})
</script>

<template>
  <router-link
    :to="toRouter"
    :class="[
      'min-h-[40px] max-h-[40px] capitalize flex flex-col',
      isActiveRoute ? 'text-primary-700 font-bold' : ' border-transparent dark:text-secondary-100 ',
    ]"
  >
    <div class="flex space-x-2 my-auto">
      <BaseSvgIcon v-if="icon" :name="icon" :size="15" :is-active="isActiveRoute" />
      <span class="block text-left" :class="isActiveRoute ? '' : 'text-neutral-500'">
        <slot />
      </span>
    </div>
    <div class="h-[5px] w-full rounded-t-[10px]" :class="isActiveRoute ? 'bg-dark-100' : ''"></div>
  </router-link>
</template>
