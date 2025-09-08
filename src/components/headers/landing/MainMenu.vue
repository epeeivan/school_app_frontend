<script setup lang="ts">
import landingMenu from '@/assets/datas/landingMenu'
import MenuItem from './MenuItem.vue'
import BaseButton from '@/components/bases/BaseButton.vue'
import BaseIcon from '@/components/bases/BaseIcon.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const isMenuOpen = ref(false)
const isMenuShowed = computed(() => isMenuOpen.value && props.isMobile)
function closeOrOpenMenu() {
  if (props.isMobile) {
    isMenuOpen.value = !isMenuOpen.value
  }
}
</script>
<template>
  <Nav
    class="flex  lg:flex-row flex-col lg:py-5 lg:px-0 px-5 lg:border-b lg:border-white/[0.2] bg-primary-400"
    :class="isMenuShowed?'h-dvh absolute left-0 top-0 pb-5':''"
  >
    <!-- left -->
    <div class="flex lg:flex-row flex-col" :class="isMenuShowed?'h-full':'h-full'">
      <!-- logo -->
      <div
        class="flex lg:pr-5 lg:border-r lg:text-secondary-100 text-white lg:border-secondary-100 lg:py-0 py-5 lg:border-b-0 border-b border-white/[0.2]"
      >
        <div class="lg:mx-0 mx-auto" @click="closeOrOpenMenu">
          <BaseIcon v-if="isMobile" name="Menu" :stroke-width="2" :size="15" class="space-y-auto" />
          <span class="font-bold block my-auto"> LOGO</span>
        </div>
      </div>
      <div
        class="lg:space-x-5 lg:space-y-0 space-x-0 space-y-5"
        :class="isMenuShowed ? 'block h-full' : 'hidden'"
      >
        <MenuItem v-for="(item, index) in landingMenu" :key="`menu-item-${index}`" />
      </div>
    </div>
    <!-- right -->
    <div class="flex space-x-5">
      <BaseButton :text="$t('common.actions.login')" color="neutral" />
      <BaseButton :text="$t('common.actions.login')" color="white" />
    </div>
  </Nav>
</template>
