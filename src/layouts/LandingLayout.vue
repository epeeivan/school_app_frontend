<script setup lang="ts">
import MainFooter from '@/components/footer/MainFooter.vue'
import MainMenu from '@/components/headers/landing/MainMenu.vue'
import { doWhenScreenIsResized, isMobile } from '@/helpers.ts'
import { onMounted, ref } from 'vue'
const isMobileScreen = ref(isMobile())

onMounted(() => {
  doWhenScreenIsResized(() => {
    isMobileScreen.value = isMobile()
  })
})
</script>
<template>
  <div class="lg:text-sm leading-[22px] relative text-dark-300">
    <MainMenu :is-mobile="isMobileScreen" />
    <RouterView></RouterView>
    <MainFooter />
  </div>
</template>
