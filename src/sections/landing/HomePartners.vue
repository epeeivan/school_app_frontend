<script setup lang="ts">
import partners from '@/assets/datas/partners'
</script>
<template>
  <div class="lg:px-[100px] 2xl:px-[8%] 3xl:px-[10%] px-5">
    <div class="lg:py-[30px] py-5 lg:flex grid grid-cols-3 gap-[50px] border-b border-neutral-300">
      <img
        v-for="(partner, index) in partners"
        :key="`partner-${index}`"
        :src="`assets/images/partners/${partner.logo}.png`"
        class="3xl:h-[50px] h-[30px] lg:mx-auto mx-0"
      />
    </div>
  </div>
</template>
