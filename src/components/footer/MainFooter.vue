<script setup lang="ts">
import { footerGroups } from '@/assets/datas/footer'
import FooterItem from './FooterItem.vue'
</script>
<template>
  <div
    class="lg:px-[100px] 2xl:px-[8%] 3xl:px-[10%] px-5 lg:pt-[50px] pt-5 bg-dark-100 lg:space-y-[50px] space-y-5 lg:text-left text-center"
  >
    <!-- content -->
    <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
      <!-- description -->
      <div class="space-y-5 lg:col-span-4">
        <h3 class="text-lg font-bold lg:text-2xl uppercase"></h3>
        <p class="block text-white font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, soluta veniam fugit
          voluptate dolorem ad aliquid aperiam cumque sequi delectus eos distinctio placeat modi
          vitae sed voluptates id accusantium ea?
        </p>
      </div>
      <!-- groups -->
      <div
        class="space-y-5 col-span-2"
        v-for="(footerGroup, index) in footerGroups"
        :key="`footer-grooup-${index}`"
      >
        <FooterItem :text="footerGroup.groupTitle" type="head" />
        <FooterItem
          v-for="(footerItem, itemIndex) in footerGroup.items"
          :key="`footer-group-${index}-item-${itemIndex}`"
          :text="footerItem.title"
          :to="footerItem.link"
          type=""
        />
      </div>
    </div>
    <!-- bar -->
    <div class="w-full h-[31px] bg-secondary-100"></div>
  </div>
</template>
