<script setup lang="ts">
import landingCounters from '@/assets/datas/landingCounters'
import AboutCounter from '@/components/AboutCounter.vue'
defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div
    class="w-full flex flex-col lg:p-[100px] 2xl:p-[8%] 3xl:p-[10%] px-[20px] py-5 lg:text-left bg-primary-400 text-white"
  >
    <div class="2xl:w-10/12 grid lg:grid-cols-12 lg:gap-[50px] gap-5 mx-auto">
      <div
        class="bg-black/[0.5] lg:rounded-[20px] rounded-[15px] lg:col-span-6 lg:h-full h-[250px]"
      ></div>
      <div class="lg:col-span-5 space-y-6 mx-auto">
        <h2 class="uppercase lg:text-5xl text-3xl mx-auto font-bold">
          {{ $t('landing.home.about.title.p1') }}
          <span class="text-secondary-100">{{ $t('landing.home.about.title.p2') }}</span>
        </h2>
        <p class="text-white/[0.8]">{{ $t('landing.home.about.content') }}</p>
        <div class="grid grid-cols-2 gap-[50px]">
          <AboutCounter
            v-for="(counter, index) in landingCounters"
            :key="`counter-${index}`"
            :value="counter.value"
            :label="$t(`landing.home.about.counters_labels.${counter.label}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
