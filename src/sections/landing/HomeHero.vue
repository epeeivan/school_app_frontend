<script setup lang="ts">
import landingCircleImages from '@/assets/datas/landingCircleImages'
import LandingButton from '@/components/LandingButton.vue'
import LandingCircleTag from '@/components/LandingCircleTag.vue'
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
    icon: 'Library',
  },
  {
    text: 'certifications',
    icon: 'Presentation',
  },
])
</script>
<template>
  <div class="w-full h-dvh flex flex-col lg:pt-[100px] pt-[100px]">
    <!-- text & image & actions -->
    <div class="w-full grid lg:grid-cols-2 h-full lg:px-[100px] 2xl:px-[8%] 3xl:px-[10%] px-[20px]">
      <!-- texts & mobile actions -->
      <div class="flex flex-col">
        <div class="space-y-[35px] lg:text-left text-center my-auto">
          <div class="lg:space-y-5">
            <h1 class="uppercase lg:text-4xl 3xl:text-5xl text-3xl font-black">
              {{ $t('landing.home.hero.title.p1') }}
              <span class="block text-primary-400">{{ $t('landing.home.hero.title.p2') }}</span>
            </h1>
            <p class="lg:text-lg text-neutral-500">{{ $t('landing.home.hero.description') }}</p>
          </div>

          <!-- mobile actions -->
          <div class="lg:flex-row flex-col flex gap-5 capitalize">
            <LandingButton color="primary" :text="$t('common.actions.get_started')" />
            <LandingButton color="stroke-secondary" :text="$t('common.actions.register')" />
          </div>
          <div class="flex lg:flex-row flex-col space-x-5">
            <div class="space-x-[-20px] my-auto flex lg:mx-0 mx-auto">
              <LandingCircleTag
                v-for="(tag, index) in landingCircleImages"
                :key="`tag-${index}`"
                :src="tag.url"
              />
            </div>
            <span class="block my-auto lg:ml-5">{{ $t('messages.landing.hero.tags') }}</span>
          </div>
        </div>
      </div>
      <!-- images -->
      <div v-if="!isMobile" class="flex relative">
        <img
          src="/public/assets/images/lqnding_hero_image.png"
          class="mx-auto absolute bottom-0"
          alt=""
        />
      </div>
    </div>
    <div class="lg:px-[200px] lg:p-[50px] p-5 w-full z-10 bg-secondary-100">
      <div class="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 lg:w-10/12">
        <LandingHeroBottomBoxItem
          v-for="(item, index) in bottomItems"
          :key="`bottom-item-${index}`"
          :label="item.text"
          :icon="item.icon"
          :is-mobile="isMobile"
        />
      </div>
    </div>
  </div>
</template>
