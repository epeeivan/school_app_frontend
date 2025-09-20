<script setup lang="ts">
import flexibilityItems from '@/assets/datas/flexibilityItems'
import FlexibilityCard from '@/components/cards/FlexibilityCard.vue'
</script>
<template>
  <div class="lg:px-[100px] lg:py-[50px] py-5 px-5 text-center space-y-10">
    <!-- title -->
    <div class="space-y-5">
      <h2 class="lg:text-5xl text-3xl font-bold flex space-x-2 mx-auto">
        <span class="text-primary-400 ml-auto">{{ $t('landing.home.flexibility.title.p1') }}</span>
        <span class="mr-auto">{{ $t('landing.home.flexibility.title.p2') }}</span>
      </h2>
      <p class="text-neutral-500 lg:text-lg font-medium">
        {{ $t('landing.home.flexibility.description') }} F
      </p>
    </div>
    <div class="space-y-5 flex flex-col">
      <FlexibilityCard
        v-for="(item, index) in flexibilityItems"
        :key="`flexibility-item-${index}`"
        :title="$t(`landing.home.flexibility.items.${item.name}.title`)"
        :description="$t(`landing.home.flexibility.items.${item.name}.description`)"
        :color="item.color"
        class="mx-auto"
      />
    </div>
  </div>
</template>
