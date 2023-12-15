import { App } from 'vue'
import ScrollList from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiScrollList', ScrollList)
  }
}
