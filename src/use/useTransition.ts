import { ref } from "vue";

interface IEnterItem {
  isShown: boolean
  el: HTMLElement
}

export function useTransition(count = 10) {
  const createItems = (_count: number) => {
    const result = []
    for(let i = 0; i < _count; i ++){
      result.push({
        isShown : false,
        el: {} as HTMLElement
      })
    }
    return result
  }
  const items = ref(createItems(count))
  const enteredItems = [] as IEnterItem[]
  const start = (el: HTMLElement) => {
    const item = items.value.find((v) => !v.isShown)
    if(item){
      item.isShown = true
      item.el = el
      enteredItems.push(item)
    }
  }
  const beforeEnter = (el: Element) => {
    const item = enteredItems[enteredItems.length - 1]
    const rect = item.el.getBoundingClientRect() //获取位置
    const x = rect.left - 32
    const y = -(window.innerHeight - rect.top - 22)
    ;(el as HTMLDivElement).style.display = ''
    ;(el as HTMLDivElement).style.transform = `translate3d(0, ${y}px, 0)`
    const inner = el.getElementsByClassName('inner')[0] as HTMLElement
    if(inner){
      inner.style.transform = `translate3d(${x}px, 0, 0)`
    }
  }
  const enter = (el: Element, done: () => void) => {
    el.addEventListener('transitionend', done )
    setTimeout(() => {
      ;(el as HTMLDivElement).style.transform = `translate3d(0, 0, 0)`
      const inner = el.getElementsByClassName('inner')[0] as HTMLElement
      if(inner){
        inner.style.transform = `translate3d(0, 0, 0)`
      }
    })
  }
  const afterEnter = (el: Element) => {
    const item = enteredItems.shift()
    if(item) {
      item.isShown = false
      ;(el as HTMLDivElement).style.display = ''

    }
  }
  
  return{
    items,
    start,
    beforeEnter,
    enter,
    afterEnter
  }
} 