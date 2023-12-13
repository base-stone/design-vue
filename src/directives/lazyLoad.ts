import { getPassiveValue, throttle } from '@base-stone/librarys'

const lazyLoad = {
  scrollFn: function () {} as (event: Event) => void,
  list: [] as HTMLDivElement[],
  init(el: HTMLDivElement) {
    this.list.push(el)
    this.handleScrollLoad()
  },
  /**
   * 滚动加载图片显示替换默认图片
   */
  handleScrollLoad() {
    if (this.list.length) {
      this.list.forEach((el) => {
        if (el.dataset.LazyLoadImgState != 'success' && this.getClientRect(el)) {
          this.handleScrollImage(el)
        }
      })
    }
  },
  /**
   * @param {Object} el
   * @param {Object} options
   * @returns {Boolean}
   */
  getClientRect(el: HTMLElement) {
    const bcr = el.getBoundingClientRect() //取得元素在可视区的位置
    const mw = el.offsetWidth //元素自身宽度
    const mh = el.offsetHeight //元素自身的高度
    const winHeight = window.innerHeight //视窗的高度
    const boolY = bcr.top < winHeight
    return mw != 0 && mh != 0 && boolY
  },
  /**
   * @param {Object} el
   * @param {Number} index
   */
  handleScrollImage(el: HTMLElement) {
    const src = el.dataset.src
    el.dataset.LazyLoadImgState = 'start'
    if (!src) {
      return false
    }
    el.style.background = `url(${src}) no-repeat center top / cover`
    delete el.dataset.src
    el.dataset.LazyLoadImgState = 'success'
    el.classList.add('ui-lazy-fade')
    this.list.forEach((item, index) => {
      if (item == el) {
        this.list.splice(index, 1)
      }
    })
  },
  start() {
    this.scrollFn = throttle(() => this.handleScrollLoad(), 500)
    window.addEventListener('scroll', this.scrollFn, getPassiveValue())
  },
  remove(): void {
    window.removeEventListener('scroll', this.scrollFn, getPassiveValue())
  }
}

export default lazyLoad
