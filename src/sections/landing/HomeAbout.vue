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
  <div class="w-full flex flex-col lg:px-[100px] px-[20px]">
    <div class="lg:w-8/12 space-y-5">
      <h2 class="uppercase lg:text-5xl text-3xl mx-auto">
        {{ $t('landing.about.title.p1') }}
        <span class="block text-secondary-500">{{ $t('labels.about.title.p3') }}</span>
      </h2>
      <p>{{ $t('landing.about.description') }}</p>
      <BaseButton color="secondary" :text="$t('labels.actions.see_more')" class="mx-auto" />
    </div>
  </div>
</template>
