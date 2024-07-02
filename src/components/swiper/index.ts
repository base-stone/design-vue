import type { App } from 'vue'
import Swiper from './index.vue'
export default {
  install: (app: App) => {
    app.component('UiSwiper', Swiper)
  }
}
