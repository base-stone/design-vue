import { App } from 'vue'
import PageLoading from './index.vue'
export default {
  install: (app: App) => {
    app.component('PageLoading', PageLoading)
  }
}
