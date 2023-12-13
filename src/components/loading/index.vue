<template>
  <div class="ui-showLoading" @touchmove="handleStopPopup($event)">
    <div class="ui-showLoading-cont">
      <div class="ui-showLoading-icon">
        <span class="bar1" />
        <span class="bar2" />
        <span class="bar3" />
        <span class="bar4" />
        <span class="bar5" />
        <span class="bar6" />
        <span class="bar7" />
        <span class="bar8" />
        <span class="bar9" />
        <span class="bar10" />
        <span class="bar11" />
        <span class="bar12" />
      </div>
      <p class="cfff">正在加载中</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleStopPopup = (event: Event) => {
  event.stopPropagation()
  event.preventDefault()
}
</script>
