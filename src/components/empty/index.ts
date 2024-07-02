import type { App } from 'vue'
// @ts-ignore
import Empty from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiEmpty', Empty)
  }
}
