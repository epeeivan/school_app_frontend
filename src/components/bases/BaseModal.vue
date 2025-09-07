<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseIcon from '@/components/bases/BaseIcon.vue'
import BaseButton from './BaseButton.vue'
import type { ModalActions } from '@/interfaces/common'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  inlineStyles: {
    type: [String, Object],
    default: '',
  },
  modalSize: {
    type: String,
    default: '',
  },
  withCloseAction: {
    type: Boolean,
    default: true,
  },
  modalBodyClass: {
    type: String,
    default: null,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  full: {
    type: Boolean,
    default: false,
  },
  modalFooterClass: {
    type: String,
    default: '',
  },
  confirmActionColor: {
    type: String,
    default: 'primary',
  },
  closeAfterConfirm: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Object as () => ModalActions,
    default: () => {
      return {
        cancel: {
          text: 'common.actions.cancel',
          color: 'stroke-dark',
        },
        confirm: {
          text: 'common.actions.save',
          color: 'primary',
        },
      } as ModalActions
    },
  },
})

const emit = defineEmits(['close-modal', 'confirm', 'cancel', 'logout'])

const sizeClass = computed(() => {
  switch (props.modalSize) {
    case 'xs':
      return 'lg:w-3/12'
    case 'sm':
      return 'lg:w-5/12'
    case 'md':
      return 'lg:w-7/12'
    case 'lg':
      return 'lg:w-8/12'
    case 'xl':
      return 'lg:w-10/12'
    default:
      return 'lg:w-3/12'
  }
})
const isOpen = ref(false)

const close = () => {
  isOpen.value = false
  setTimeout(() => {
    emit('close-modal')
  }, 500)
}
const confirm = () => {
  if (props.closeAfterConfirm) {
    emit('confirm')
    close()
  } else {
    emit('confirm')
  }
}
onMounted(() => {
  setTimeout(() => {
    isOpen.value = true
  }, 0)
})
</script>
<template>
  <div class="w-screen h-screen fixed top-0 left-0 z-50 flex">
    <div
      class="bg-black/[0.2] flex flex-col backdrop-blur-sm overflow-y-auto m-auto transition-all duration-500 ease delay-150 lg:pt-0 pt-[50px]"
      :class="isOpen ? 'w-[100%] h-[100%]' : 'w-[0%] h-0'"
      tabindex="-1"
      aria-labelledby="tooltipmodal"
      :style="inlineStyles"
      aria-modal="true"
      role="dialog"
    >
      <div
        class="lg:h-auto lg:p-[30px] p-[20px] rounded-[20px] lg:rounded-b-[20px] rounded-b-[0px] border border-dark-200 bg-white dark:bg-dark-300 m-auto lg:mb-auto w-full transition-all duration-500 ease delay-700"
        :class="[sizeClass, isOpen ? '-mb-[0%]' : ' -mb-[500%]', full ? 'h-full' : ' mt-auto']"
        role="document"
      >
        <!-- modal-content -->
        <div class="h-full flex flex-col space-y-6">
          <!-- modal-header -->
          <div class="flex-none flex dark:text-neutral-300">
            <!-- modal-title -->
            <h5
              v-if="title"
              class="mr-auto my-auto leading-none lg:text-lg text-sm font-bold capitalize"
            >
              {{ title }}
            </h5>
            <button
              v-if="withCloseAction"
              class="my-auto w-[32px] h-[32px] rounded-[8px] border border-dark-100 text-dark-100 flex cursor-pointer"
              type="button"
              aria-label="Close"
              @click="close()"
            >
              <base-icon name="X" :stroke-width="2" :size="20" class="m-auto" />
            </button>
          </div>
          <div
            class="font-medium relative"
            :class="[modalBodyClass, full ? 'h-full overflow-auto' : '']"
          >
            <div class="" :class="full ? 'absolute' : ''">
              <slot></slot>
            </div>
          </div>
          <div v-if="showFooter" class="flex mb-25 lg:mb-0" :class="modalFooterClass">
            <slot name="footer">
              <div class="flex space-x-5 lg:ml-auto lg:w-min w-full">
                <BaseButton
                  :text="$t(actions.cancel.label ?? 'common.actions.cancel')"
                  mode="stroke"
                  :color="actions.cancel.color ?? 'dark-stroke'"
                  @click="close()"
                />
                <BaseButton
                  :disabled="disabled"
                  :loading="loading"
                  :text="$t(actions.confirm.label ?? 'common.actions.save')"
                  @click="confirm()"
                  :color="actions.confirm.color ?? 'primary'"
                />
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
