<script setup lang="ts">
import landingMenu from '@/assets/datas/landingMenu'
import MenuItem from './MenuItem.vue'
import BaseIcon from '@/components/bases/BaseIcon.vue'
import { computed, ref } from 'vue'
import LandingButton from '@/components/LandingButton.vue'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const isMenuOpen = ref(false)
const isMenuShowed = computed(() => (props.isMobile && isMenuOpen.value) || !props.isMobile)
function closeOrOpenMenu() {
  if (props.isMobile) {
    isMenuOpen.value = !isMenuOpen.value
  }
}
</script>
<template>
  <nav
    class="lg:px-[100px] 2xl:px-[8%] 3xl:px-[10%] flex px-5 w-screen fixed bg-white z-20"
    :class="isMenuShowed && isMobile ? ' pb-5' : ''"
  >
    <div class="flex my-auto border-b border-neutral-200 w-full lg:min-h-[100px] min-h-[70px]">
      <!-- left -->
      <div
        class="flex lg:flex-row flex-col w-full lg:my-auto"
        :class="isMenuShowed ? 'h-full' : 'h-full'"
      >
        <!-- logo -->
        <div
          class="flex lg:pr-5 lg:border-r text-secondary-100 lg:border-secondary-100 lg:py-0 py-5"
          :class="isMobile ? 'w-full' : ''"
        >
          <span class="font-bold block my-auto mr-auto"> LOGO</span>
          <button class="text-secondary-100">
            <BaseIcon
              v-if="isMobile"
              name="AlignRight"
              :stroke-width="2"
              :size="25"
              @click="closeOrOpenMenu"
            />
          </button>
        </div>
        <div
          class="lg:flex lg:space-y-0 space-x-0 space-y-5"
          :class="isMenuShowed ? 'block h-full' : 'hidden'"
        >
          <MenuItem
            v-for="(item, index) in landingMenu"
            :key="`menu-item-${index}`"
            :text="$t(item.text)"
          />
        </div>
      </div>
      <!-- right -->
      <div v-if="!isMobile" class="flex space-x-5 lg:my-auto">
        <LandingButton
          to=""
          :text="$t('common.actions.get_started')"
          color="primary"
          class="capitalize w-max"
        />
        <!-- mobile menu trigger -->
      </div>
    </div>
  </nav>
</template>
