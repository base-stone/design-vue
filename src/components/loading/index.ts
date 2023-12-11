import { createVNode, render } from 'vue'
import Loading from './index.vue'

let vm: any = null
let isLoading = true
const container: HTMLDivElement = document.createElement('div')
const showLoading = () => {
  if (!isLoading) {
    return
  }
  if (!vm) {
    vm = createVNode(Loading as any)
  }
  isLoading = false
  render(vm, container)
  document.body.appendChild(container)
}

const hideLoading = () => {
  if (vm && !isLoading) {
    const parentEl = container.parentNode
    if (parentEl) {
      parentEl.removeChild(container)
    }
    isLoading = true
  }
}

export { showLoading, hideLoading }
