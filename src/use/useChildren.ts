import type { ComponentInternalInstance, InjectionKey } from 'vue'
import type { ParentProvide } from './useParent'
import { reactive, provide } from 'vue'

export type NotNullChild = ComponentInternalInstance & Record<string, any>
export type Child = NotNullChild | null

export function useChildren<T>(key: InjectionKey<ParentProvide<T>>) {
  const children = reactive<Child[]>([])

  const linkChildren = (value?: T) => {
    const link = (child: Child) => {
      children.push(child)
    }

    const unlink = (child: Child) => {
      const index = children.indexOf(child)
      children.splice(index, 1)
    }

    provide(key, {
      link,
      unlink,
      ...value,
    })
  }

  return {
    children,
    linkChildren,
  }
}
