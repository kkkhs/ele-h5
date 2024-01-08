import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
  baseURL: '/api'
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
