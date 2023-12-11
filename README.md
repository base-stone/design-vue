pnpm install -D @base-stone/vue
https://unpkg.com/@base-stone/vue


## 常规项目代码目录

```
├── components
│   ├── empty
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   ├── loading
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   ├── modal
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   ├── overlay
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   ├── page-loading
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   ├── scroll-list
│   │   ├── index.ts
│   │   └── index.vue
│   ├── swiper
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── index.vue
│   └── toast
│       ├── index.scss
│       ├── index.ts
│       └── index.vue
├── directives
│   └── lazyLoad.ts
├── env.d.ts
├── main.ts
└── style
    ├── animate.scss
    ├── app.scss
    ├── color.scss
    ├── font.scss
    ├── index.scss
    ├── layout.scss
    ├── reset.scss
    └── ui-method.scss
```
##  plugins 插件使用

```
  import { getCurrentInstance } from "vue"
  const {
    proxy: { $showModal, $showToast, $showLoading, $hideLoading }
  } = getCurrentInstance() as any
  
  //提示对话框
  $showModal({
    title: "注销提示",
    content: "该门店已被认领，若不是您本人使用，请提交相关资料申诉",
    cancelText: "取消",
    confirmText: "申诉"
 })
 
 $showToast("请输入手机号")  //弱提示
 $showLoading()  //页面显示loading
 $hideLoading()  //页面隐藏loading 
```

##  lazyLoad 使用
```
  import { lazyLoad } from '@leafront/design-vue'

  const app = createApp(App as any)
  app.directive("lazy", {
    mounted(el, binding, vnode) {
      setTimeout(() => {
        lazyLoad.init(el, binding, vnode)
      })
    }
  })

  <template>
    <div
      class="ui-lazyLoad-pic"
      v-lazy
      data-src="image"
    >
    </div>
  </template>

  <script lang="ts">
     
     import { defineComponent, onMounted, onBeforeUnmount } from "vue"
     import { lazyLoad } from "@leafront/design-vue"
     export default defineComponent({
       setup() {
         onMounted(() => {
            lazyLoad.start()
         })  
         onBeforeUnmount(() => {
            lazyLoad.remove()
         })
       }
     })      
  </script> 
 
```
## header 组件

```
  import { Header } from '@leafront/design-vue'
  <ui-header
    title="需求列表"
  >
  </ui-header>
```
| 参数名 | 描述 | 默认值 |
| :----:  | :----: | :----: |
| title | 标题 | 空 |
| backIcon | 返回按钮 | black 可选 white、black |
| rightTitle | 头部右边标题 | 空 |
| bgColor | 头部背景颜色 | 空 |
| statusBgColor | 状态栏背景颜色 | 空 |

## 空状态组件

```
  import { UiEmpty } from '@leafront/design-vue'
 
  <ui-empty
    title="暂时没有相关数据哦～"
    image="/h5-static/img/empty-bg.png"
  >
  </ui-empty>
```
| 参数名 | 描述 | 默认值 |
| :----:  | :----: | :----:  |
| title | 标题 | 暂时没有任何数据哦 |
| image | 图片地址 | /h5-static/img/empty-bg.png |

```
  import { PageLoading } from '@leafront/design-vue'

  <ui-page-loading></ui-page-loading> 底部loading
```
## 轮播图
```
  import { Swiper } from '@leafront/design-vue'
  <ui-swiper
    :list="bannerList"
    :index="index"
    :itemWidth="itemWidth"
    :itemHeight="itemHeight"
    @toggleIndex="toggleIndex"
  >
    <template #banner={list}>
      <ul class="slideshow-item" :style="{'height': itemHeight}">
        <li
          v-for="(item, $index) in list"
          :key="$index"
          :style="{
          'width': itemWidth,
          'backgroundImage': `url(${item.image})`
        }"
        >
        </li>
      </ul>
    </template>
    <template #dot>
      <ul class="slideshow-dots">
        <li
          v-for="(item, $index) in bannerList"
          :key="$index"
          :class="{ active: $index == index - 1 }"
        >
        </li>
      </ul>
    </template>
  </ui-swiper>
```

| 参数名 | 描述 | 默认值 |
| :----:  | :----: | :----: |
| index | 索引开始位置 | 1 |
| list | 列表array | [] |
| isAutoPlay | 是否自动播放 | false |
| autoTime | 自动播放时间 | 5000 |
| itemWidth | banner 宽度 | 750px |
| itemHeight | banner 宽度 | 500px |



## 遮罩层
```
  import { Overlay } from '@leafront/design-vue'
  <ui-overlay
    v-model:show="show3"
    fadeIn="bottom"  
    closeButton="true"
  >
    <div class="test-overlay bgfff">1234342344</div>
  </ui-overlay>
```

| 参数名 | 描述 | 默认值 |
| :----:  | :----: | :----: |
| fadeIn | 显示方式 | center 可选center/bottom |
| show | 是否显示 | false |
| closeButton | 是否需要关闭按钮 | false |

## Store 使用
```
  import { localStore, sessionStore } from '@leafront/design-vue' 
  localStore.set("name", {age: 1}) //localStorage
  localStore.get("name")
  sessionStore.set("name", {age: 1}) //sessionStorage
  sessionStore.get("name")
```
