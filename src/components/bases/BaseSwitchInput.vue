<script setup lang="ts">
const model = defineModel({ default: false })
defineProps({
  label: {
    type: String,
    default: '',
  },
  square: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: '',
  },
  inlineStyles: {
    type: [String, Object],
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  required: {
    type: [Boolean],
    default: false,
  },
  errors: {
    type: [Array],
    default: null,
  },
  withChangeStyle: {
    type: Boolean,
    default: false,
  },
  iconState: {
    type: Boolean,
    default: true,
  },
})

const check = () => {
  model.value = !model.value
}
</script>

<template>
  <div
    :class="[
      'flex space-x-5  dark:border-dark-100',
      square ? ' p-1 px-2 rounded-[10px] border' : '',
    ]"
    @click.prevent="check"
  >
    <label v-if="label" :class="labelClass" class="w-full my-auto">
      {{ label }}
    </label>
    <div
      :class="[
        'transition-all ease-linear duration-100 min-w-[50px] max-w-[50px] h-min flex p-1 border border-dark-100',
        square ? 'rounded' : 'rounded-full',
      ]"
    >
      <label
        :class="[
          'min-w-[20px] transition-all  ease-linear  min-h-[20px] max-w-[20px] block border border-dark-100',
          modelValue ? 'ml-[calc(100%-20px)] bg-primary' : '',
          square ? 'rounded' : 'rounded-full',
        ]"
      >
        <input
          ref="input"
          class="hidden"
          v-bind="$attrs"
          type="checkbox"
          :checked="modelValue"
          :required="required"
        />
      </label>
    </div>
    <!-- <label v-if="label && !square" :class="labelClass" class="">
      {{ label }}
    </label> -->
  </div>

  <div v-if="errors" class="" :style="inlineStyles">
    {{ errors[0] }}
  </div>
</template>
