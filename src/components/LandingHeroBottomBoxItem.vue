<script setup lang="ts">
import BaseIcon from './bases/BaseIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  label:{
    type:String,
    default:''
  },
  icon:{
    type:String,
    default:''
  },
  isMobile:{
    type:Boolean,
    default:false
  }
})

const iconSize = computed(()=>props.isMobile?25:82)
const iconStrokeWidth = computed(()=>props.isMobile?2:5)
</script>
<template>
  <div class="text-white flex flex-col">
    <span class="font-medium mx-auto">{{ label }}</span>
    <BaseIcon :name="icon" :size="iconSize" class="mx-auto" :stroke-width="iconStrokeWidth"/>
  </div>
</template>
