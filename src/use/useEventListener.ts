import type { Ref } from 'vue'
import { unref, isRef, watch, onUnmounted, onDeactivated } from 'vue'
import { onMountedOrActivated } from './onMountedOrActivated'

type TargetRef = EventTarget | Ref<EventTarget>
export type UseEventListenerOptions = {
  target?: TargetRef
  capture?: boolean
  passive?: boolean
}

export function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): void
export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  const { target = window, passive = false, capture = false } = options

  const add = (target: TargetRef) => {
    const element = unref(target)
    if (element) {
      element.addEventListener(type, listener, {
        passive,
        capture,
      })
    }
  }
  const remove = (target: TargetRef) => {
    const element = unref(target)
    if (element) {
      element.removeEventListener(type, listener, capture)
    }
  }
  onMountedOrActivated(() => add(target))
  onUnmounted(() => remove(target))
  onDeactivated(() => remove(target))

  if (isRef(target)) {
    watch(target, (val: TargetRef, oldVal: TargetRef) => {
      remove(oldVal)
      add(val)
    })
  }
}
