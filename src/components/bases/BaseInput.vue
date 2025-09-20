<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const model = defineModel()

defineProps({
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  containerClass: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  labelFor: {
    type: String,
    default: '',
  },
  inlineStyle: {
    type: [String, Object],
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  required: {
    type: [Boolean],
    default: false,
  },
  disabled: {
    type: [Boolean],
    default: false,
  },
  errors: {
    type: [Array, null],
    default: null,
  },
  shouldFocus: {
    type: [Boolean],
    default: false,
  },
  search: {
    type: Function,
    default: null,
  },
})

const isFocus = ref(false)
const isPasswordShowed = ref(false)

const focus = () => {
  isFocus.value = true
}
const focusOut = () => {
  isFocus.value = false
}
const showPassword = () => {
  isPasswordShowed.value = !isPasswordShowed.value
}
</script>

<template>
  <div class="space-y-[5px] dark:text-secondary-500">
    <label v-if="label" :for="labelFor" :class="`capitalize block ${labelClass}`">
      {{ label }}
      <span v-if="required" style="color: red">*</span>
    </label>
    <div
      :class="[
        'flex border rounded-[10px] min-h-[40px] max-h-[40px] px-[20px] transition-all  ease-linear duration-100  dark:bg-dark-200',
        containerClass,
        isFocus ? 'border-primary' : 'border-neutral-300 dark:border-dark-100',
      ]"
    >
      <BaseIcon
        v-if="icon"
        :name="icon"
        :size="20"
        :type="isFocus ? 'filled' : 'stroke'"
        :is-active="isFocus"
        class="my-auto mr-2.5 block'"
      />
      <input
        v-bind="$attrs"
        ref="input"
        :type="isPasswordShowed ? 'text' : (type ?? 'text')"
        :value="modelValue"
        :required="required"
        :disabled="disabled"
        class="outline-none w-full bg-transparent placeholder:text-secondary-400"
        v-model="model"
        @search="search"
        @focus="focus()"
        @focusout="focusOut()"
      />

      <button v-if="type === 'password'" class="" type="button" @click="showPassword()">
        <BaseIcon
          :name="isPasswordShowed ? 'EyeOff' : 'Eye'"
          :size="20"
          class="my-auto ml-2 block'"
        />
      </button>
    </div>

    <div v-if="errors" :style="inlineStyle" style="color: red">
      {{ errors[0] }}
    </div>
  </div>
</template>

<style scoped></style>
