import { App } from 'vue'
import Overlay from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiOverlay', Overlay)
  }
}
