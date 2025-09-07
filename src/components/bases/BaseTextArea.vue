<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'

const model = defineModel()

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  labelFor: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'form-label fw-bold',
  },
  inlineStyles: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Array,
    default: null,
  },
  shouldFocus: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isFocus = ref(false)

const textarea = useTemplateRef<HTMLTextAreaElement>('textarea')

const textareaValue = computed({
  get: () => `${model.value}`,
  set: (value) => {
    model.value = `${value}`
    emit('update:modelValue', value)
  },
})

const focus = () => {
  isFocus.value = true
}
const focusOut = () => {
  isFocus.value = false
}

onMounted(() => {
  if (props.shouldFocus && textarea) {
    textarea.value?.focus()
  }
})
</script>

<template>
  <div class="mb-2 dark:text-secondary-500">
    <label v-if="label" :for="labelFor" :class="['mb-1 block capitalize', labelClass]">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <textarea
      ref="textarea"
      v-bind="$attrs"
      v-model="textareaValue"
      :required="required"
      :class="[
        'flex border rounded-[10px] px-2 py-1 w-full outline-none transition-all bg-neutral-50 dark:bg-dark-200 ease-linear duration-100',
        isFocus ? ' border-be_wallet-400' : 'border-secondary-300 dark:border-dark-100',
      ]"
      @focus="focus()"
      @focusout="focusOut()"
    ></textarea>
    <div v-if="errors" class="" :style="inlineStyles">
      {{ errors[0] }}
    </div>
  </div>
</template>

<style scoped></style>
