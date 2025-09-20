<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'yellow',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
})
const colors = computed(() => {
  switch (props.color) {
    case 'yellow':
      return {
        bg: 'bg-[#FFFBDA]/[0.5]',
        img: 'bg-[#F39200]/[0.5]',
        order: 'lg:order-last lg:ml-[-100px]',
        text_bg:'lg:bg-[#FFFBDA]/[0.5]'
      }

    default:
      return {
        bg: 'bg-[#16E8FF]/[0.2]',
        img: 'bg-[#16E8FF]/[0.5]',
        order: 'lg:order-first lg:mr-[-100px]',
        text_bg:'lg:bg-[#16E8FF]/[0.2]'
      }
  }
})
</script>
<template>
  <div class="rounded-[20px] p-5 space-y-5 lg:flex lg:bg-transparent" :class="colors.bg">
    <div
      class="rounded-[20px] lg:rounded-[30px] h-[225px] 3xl:h-[480px] lg:h-[380px] 3xl:w-[700px] lg:w-[400px]"
      :class="colors.img"
    ></div>
    <div
      class="space-y-5 lg:p-[40px] lg:w-[350px] 3xl:w-[480px] lg:my-auto lg:rounded-[20px] z-10"
      :class="[colors.text_bg, colors.order]"
    >
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="font-medium">{{ description }}</p>
    </div>
  </div>
</template>
