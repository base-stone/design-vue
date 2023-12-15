<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { getFontSize, getPassiveValue, throttle } from '@base-stone/librarys'

export default defineComponent({
  props: {
    finished: {
      type: Boolean,
      default: false
    },
    scrollEl: {
      type: String,
      default: '.scroll-view-wrapper'
    }
  },
  emits: ['onLoad'],
  setup(props, { emit }) {
    const scrollLoadList = throttle(() => {
      const el: HTMLElement | any = document.querySelector(props.scrollEl)
      const elHeight: number = el.offsetHeight
      const scrollTop: number = el.scrollTop
      const scrollViewHeight: number = el.scrollHeight - 0.5 * getFontSize()
      if (elHeight + scrollTop >= scrollViewHeight && !props.finished) {
        emit('onLoad')
      }
    }, 600)

    const pageScrollList = () => {
      const isPassive: any = getPassiveValue()
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', scrollLoadList, isPassive)
      })

      onMounted(() => {
        window.addEventListener('scroll', scrollLoadList, isPassive)
      })
    }

    pageScrollList()
  }
})
</script>
