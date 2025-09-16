<script setup lang="ts">
import BaseButton from '@/components/bases/BaseButton.vue'
import LandingHeroBottomBoxItem from '@/components/LandingHeroBottomBoxItem.vue'
import { ref } from 'vue'
defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const bottomItems = ref([
  {
    text: 'certifications',
    icon: 'Shield',
  },
  {
    text: 'Progressive leqrning',
    icon: 'Blocks',
  },
  {
    text: 'certifications',
    icon: 'Librarie',
  },
  {
    text: 'certifications',
    icon: 'Presentation',
  },
])
</script>
<template>
  <div class="w-full h-full bg-primary-400 flex flex-col lg:px-[100px] px-[20px]">
    <!-- text & image & actions -->
    <div class="w-full grid lg:grid-cols-2">
      <!-- texts & mobile actions -->
      <div class="flex flex-col">
        <div class="space-y-5 lg:text-left text-center text-white my-auto">
          <h1 class="uppercase lg:text-5xl text-3xl font bold">{{}}</h1>
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
        <img src="/public/assets/images/lqnding_hero_image.png" class="mx-auto" alt="" />
      </div>
    </div>
    <div
      class="lg:rounded-t-[50px] rounded-t-[20px] lg:p-[50px] p-5 w-full"
      :style="background: linear-gradient(163deg, #F39200 2.44%, #8D5500 109.97%);"
    >
      <div class="grid grid-cols-2 lg:grid-cols-4 mx-auto">
        <LandingHeroBottomBoxItem
          v-for="(item, index) in bottomItems"
          :key="`bottom-item-${index}`"
          :label="item.text"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>
