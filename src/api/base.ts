import { useLocalStorage } from '@/use/useLocalStorage'
import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
  baseURL: 'http://121.40.200.148:8000/api'
})

// 请求头加token
instance.interceptors.request.use((config) => {
  const { value: token } = useLocalStorage('token', '')
  if (config.headers && token.value) {
    config.headers['x-token'] = token.value
  }
  return config
})

//添加拦截器
instance.interceptors.response.use(
  (response) => {
    const { data: _data } = response
    const { data, code, msg } = _data
    if (code !== 0) {
      showDialog({
        message: msg
      }).then(() => {
        // 关闭弹窗的逻辑
      })
      return Promise.reject(msg)
    }
    return data
  },
  (err) => {
    // 没有权限的情况
    if (err.response && err.response.status === 401) {
      showDialog({
        message: '请登录'
      }).then(() => {
        // 关闭弹窗的逻辑
      })
    }
  }
)

export default instance
