import { App } from 'vue'
import Empty from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiEmpty', Empty)
  }
}
