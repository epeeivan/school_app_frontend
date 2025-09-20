<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})
const router = useRouter()
const route = useRoute()
const isActive = computed(() => route.name === props.to)

function trigg() {
  if (props.to) {
    router.push({ name: props.to })
  }
}
</script>
<template>
  <a
    href=""
    class="block rounded-[8px] px-5 py-2.5 capitalize"
    :class="isActive ? 'bg-secondary-100 font-bold ' : ''"
    @click="trigg"
  >
    <span class="block">{{ text }}</span>
  </a>
</template>
