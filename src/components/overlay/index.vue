<template>
  <div v-if="show">
    <div
      class="ui-mask"
      @touchmove="handleStopPopup($event)"
      @click="updateMaskOverlay($event, false)"
    ></div>
    <div
      class="ui-overlay-container"
      :class="{
        'ui-overlay-container-bottom': fadeIn == 'bottom',
        'ui-overlay-container-bottom-active': show && fadeIn == 'bottom',
        'ui-overlay-container-center': fadeIn == 'center',
        'ui-overlay-container-center-active': show && fadeIn == 'center'
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  show: boolean
  fadeIn?: string
  maskClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  fadeIn: 'center',
  maskClick: true
})

const emits = defineEmits<{
  (e: 'updateOverlay', value: boolean): void
}>()

const handleStopPopup = (event: Event) => {
  event.stopPropagation()
  event.preventDefault()
}
const updateOverlay = (event: Event, val: boolean) => {
  event.stopPropagation()
  emits('updateOverlay', val)
}

const updateMaskOverlay = (event: Event, val: boolean) => {
  if (props.maskClick) {
    updateOverlay(event, val)
  }
}
</script>
