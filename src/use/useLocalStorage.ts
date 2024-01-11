import { computed } from 'vue'

// 字符串序列化
const parseJSON = (value: string) => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch (error) {
    return undefined
  }
}

// <T>: 泛型
export function useLocalStorage<T>(key: string, initalValue: T) {
  //读取localStorage里的值
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? parseJSON(item) : initalValue
    } catch (error) {
      return initalValue
    }
  }
  const storedValue = computed(() => readValue())
  // 设置localStorage里的值
  const setValue = (value: T) => {
    try {
      // 支持传入函数
      const newValue = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(newValue))

      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
  // 移除localStorage里的值
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key)

      // eslint-disable-next-line no-empty
    } catch (error) {}
  }
  return {
    value: storedValue,
    setValue,
    removeItem
  }
}
