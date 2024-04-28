/*
    处理异步操作的简单的 Vue 3 Composition API 自定义 Hook
*/
import type { UnwrapRef } from 'vue'
import { ref } from 'vue'

export function useAsync<T>(asyncFn: () => Promise<T>, initValue: T, immediate = true) {
  const pending = ref(false)  //表示异步操作是否进行中的布尔值
  const data = ref(initValue)   //保存异步操作的结果数据
  const error = ref(null)   //保存异步操作的错误信息
  const execute = function () {   //一个函数，用于触发执行异步操作的逻辑
    pending.value = true
    error.value = null
    return asyncFn()
      .then((res) => {
        data.value = res as UnwrapRef<T>
        pending.value = false
      })
      .catch((err) => {
        error.value = err
        pending.value = false
      })
  }

  if (immediate) {
    execute()
  }

  return {
    pending,
    data,
    error,
    execute,
  }
}
