import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import shell from 'rollup-plugin-shell'
import dts from 'vite-plugin-dts'
import { version } from './package.json'

const banner = `/*!
  * design-vue.js v${version}
  * Copyright(c) 2013-${new Date().getFullYear()}
  * Released under the MIT License.
  */`

export default defineConfig({
  plugins: [
    vue(),
    shell({
      commands: [
        'rm -rf dist',
      ],
      hook: 'buildStart'
    }),
    dts({ rollupTypes: true })
  ],
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router', 'pinia'],
      output: {
        dir: `./dist`,
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia'
        }
      }
    },
    lib: {
      entry: 'src/main.ts',
      name: 'designVue',
      fileName: (format: string) => {
        format = format.replace(/umd/, 'global')
        return `design-vue.${format}.prod.js`
      },
      formats: ['umd', 'es']
    },
    cssCodeSplit: false
  }
})
