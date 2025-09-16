<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})
const router = useRouter()
const isHeader = computed(() => props.type == 'head')
function trigg() {
  if (props.to) {
    router.push({ name: props.type })
  }
}
</script>
<template>
  <li class="block text-white" :class="isHeader ? 'font-bold' : ''" @click="trigg">{{ text }}</li>
</template>
