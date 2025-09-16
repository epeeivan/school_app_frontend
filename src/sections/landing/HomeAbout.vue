<script setup lang="ts">
import BaseButton from '@/components/bases/BaseButton.vue'
defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="w-full h-full bg-primary-400 flex flex-col lg:px-[100px] px-[20px]">
    <!-- text & image & actions -->
    <div class="w-full grid lg:grid-cols-2">
      <!-- texts & mobile actions -->
      <div class="flex flex-col">
        <div class="space-y-5 lg:text-left text-center text-white my-auto">
          <h1 class="uppercase lg:text-5xl text-3xl">{{}}</h1>
          <span class="block">{{}}</span>
          <!-- mobile actions -->
          <div v-if="isMobile" class="flex space-x-5">
            <BaseButton color="secondary" :text="``" />
            <BaseButton color="white" :text="``" />
          </div>
        </div>
      </div>
      <!-- images -->
       <div class="flex">
        <img src="/public/assets/images/lqnding_hero_image.png" class="mx-auto" alt="">
       </div>
    </div>
  </div>
</template>
