import { createVNode, render } from 'vue'
import Toast from './index.vue'

let vm: any = null
let isClick = true
const container: HTMLDivElement = document.createElement('div')
const showToast = (text: string, time: number = 2000) => {
  if (!isClick) {
    return
  }

  if (!vm) {
    vm = createVNode(Toast as any, { text })
  }
  isClick = false
  render(vm, container)
  document.body.appendChild(container)
  setTimeout(() => {
    if (vm) {
      container.remove()
      isClick = true
      vm = null
    }
  }, time)
}

export default showToast
