<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="border-[3px] border-white rounded-full bg-cover lg:min-w-[70px] lg:max-w-[70px] lg:min-h-[70px] lg:max-h-[70px] min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] bg-neutral-200"
    :style="`background-image: url(${src});`"
  ></div>
</template>
