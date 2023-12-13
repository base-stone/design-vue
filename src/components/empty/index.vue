<template>
  <div class="ui-empty flex-column flex-v-center flex-h-center">
    <div
      v-if="image"
      class="ui-empty-pic"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div
      v-else
      class="ui-empty-pic"
    />
    <span class="lh44">{{ title }}</span>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title?: string
  image?: string
}

withDefaults(defineProps<Props>(), {
  title: '暂无数据',
  image: ''
})
</script>
