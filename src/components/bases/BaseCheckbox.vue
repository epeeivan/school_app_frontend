<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { computed, type PropType } from 'vue'
import { ref } from 'vue'
defineEmits(['update:modelValue'])

const props = defineProps({
  inlineStyles: {
    type: [String, Object],
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  value: { type: Boolean },
  label: { type: String, required: false },
  trueValue: { type: Boolean, default: true },
  falseValue: { type: Boolean, default: false },
  modelValue: {
    type: Boolean,
    default: false,
  },
  required: {
    type: [Boolean],
    default: false,
  },
  errors: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})
const isCheck = ref(false)
const textSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'text-xs'

    default:
      return 'text-sm'
  }
})

function check() {
  isCheck.value = !isCheck.value
}
</script>

<template>
  <div data-checkbox-root class="flex space-x-2" style="margin-top: 3px">
    <div
      data-checkbox-wrapper
      :class="[
        'rounded-[5px] w-[20px] h-[20px] border  flex relative border-gray-500',
        value ? ' text-gray-600' : 'text-transparent  bg-white ',
      ]"
    >
      <BaseIcon :width="15" :height="15" :stroke-width="2" class="m-auto" name="Check" />
      <input
        id="label"
        data-checkbox-input
        :checked="modelValue"
        :required="required"
        :value="value"
        class="checkbox opacity-0 absolute"
        type="checkbox"
        @input="
          $emit('update:modelValue', $event.target && ($event.target as HTMLInputElement).checked)
        "
        @click="check()"
      />
    </div>
    <label
      v-if="label"
      data-checkbox-label
      :class="['h-min block text-sm leading-none my-auto', textSize]"
      for="label"
    >
      {{ $t(label) }}
    </label>
  </div>

  <div v-if="errors" data-checkbox-errors class="" :style="inlineStyles">
    {{ errors[0] }}
  </div>
</template>
