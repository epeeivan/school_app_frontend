<script setup lang="ts">
import { doWhenScreenIsResized, isMobile } from '@/helpers.ts'
import HomeAbout from '@/sections/landing/HomeAbout.vue'
import HomeBlogs from '@/sections/landing/HomeBlogs.vue'
import HomeFlexibility from '@/sections/landing/HomeFlexibility.vue'
import HomeHero from '@/sections/landing/HomeHero.vue'
import HomePartners from '@/sections/landing/HomePartners.vue'
import { onMounted, ref } from 'vue'

const isMobileScreen = ref(isMobile())

onMounted(() => {
  doWhenScreenIsResized(() => {
    isMobileScreen.value = isMobile()
  })
})
</script>
<template>
  <div>
    <HomeHero :is-mobile="isMobileScreen" />
    <HomeAbout :is-mobile="isMobileScreen" />
    <HomePartners />
    <HomeFlexibility />
    <HomeBlogs/>
  </div>
</template>
