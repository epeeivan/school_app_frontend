<script setup lang="ts">
import BaseIcon from '@/components/bases/BaseIcon.vue'
</script>
<template>
  <div class="flex w-screen h-screen bg-black/[0.5] fixed z-50">
    <div class="m-auto">
      <base-icon
        stroke-width="2"
        name="Loader2"
        width="50"
        height="50"
        class="text-white animate-changeColors animate-spin"
      />
    </div>
  </div>
</template>

<style scoped></style>
