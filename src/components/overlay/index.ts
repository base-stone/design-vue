import type { App } from 'vue'
// @ts-ignore
import Overlay from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiOverlay', Overlay)
  }
}
