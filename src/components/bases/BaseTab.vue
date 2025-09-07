<script setup lang="ts">
import BaseTabItem from './BaseTabItem.vue'
import { ref } from 'vue'
import type { TabHeader } from '@/interfaces/common'

defineProps({
  tabHeaders: Array<TabHeader>,
})
const activeItem = ref(0)
</script>

<template>
  <div class="col-span-6">
    <div class="tab border-b flex">
      <base-tab-item
        v-for="(header, index) in tabHeaders"
        :key="index"
        :to="header.to"
        :is-active="activeItem === index"
        @click="activeItem = index"
      >
        {{ header.text }}
      </base-tab-item>
    </div>
    <div class="tabcontent">
      <router-view operator="{}"></router-view>
    </div>
  </div>
</template>
