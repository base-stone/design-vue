import { createVNode, render } from 'vue'
import Modal from './index.vue'
let vm: any = null
let isClick = true
const container = document.createElement('div')
export interface Props {
  title: string
  content: string
  cancelButton?: boolean
  cancelText: string
  confirmText: string
  confirmColor?: string
  success(): void
  cancel(): void
}

const showModal = ({
  title,
  content,
  cancelText,
  confirmText,
  confirmColor,
  cancelButton
}: Props) => {
  return new Promise<string>((resolve, reject) => {
    if (!isClick) {
      return
    }

    const removeEl = () => {
      container.remove()
      isClick = true
      vm = null
    }
    if (!vm) {
      vm = createVNode(Modal as any, {
        title,
        content,
        cancelText,
        confirmText,
        confirmColor,
        cancelButton,
        success: () => {
          if (vm) {
            removeEl()
            resolve('success')
          }
        },
        cancel: () => {
          if (vm) {
            removeEl()
            reject('cancel')
          }
        }
      })
    }
    isClick = false
    render(vm, container)
    document.body.appendChild(container)
  })
}
export default showModal
