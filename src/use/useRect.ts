import type { Ref } from 'vue'
import { unref } from 'vue'

const isWindow = (val: unknown) => val === window

function makeDOMRect(width: number, height: number) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height,
  }
}

export function useRect(elementOrRef: Element | Window | Ref<Element | Window>) {
  const element = unref(elementOrRef)

  if (isWindow(element)) {
    const { innerWidth, innerHeight } = element as Window
    return makeDOMRect(innerWidth, innerHeight)
  }

  if ((element as Element).getBoundingClientRect) {
    return (element as Element).getBoundingClientRect()
  }

  return makeDOMRect(0, 0)
}
