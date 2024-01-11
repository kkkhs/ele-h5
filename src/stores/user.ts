import type { IUserInfo } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface IUserState {
  userInfo: IUserInfo
  token: string
}

// 设置默认信息
const getDefaultUserInfo = (): IUserInfo => ({
  id: '',
  avatar: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
  nickname: '请登录'
})

export const useUserStore = defineStore('user', () => {
  const state = ref({
    userInfo: getDefaultUserInfo(),
    token: ''
  })
  // 获取信息
  const getUserInfo = computed(() => {
    return state.value.userInfo
  })
  // 登陆时设置信息
  const setInfo = ({ token, userInfo }: IUserState) => {
    state.value.userInfo = userInfo
    state.value.token = token
  }
  // 移除信息
  const removeInfo = () => {
    state.value.userInfo = getDefaultUserInfo()
    state.value.token = ''
  }
  return {
    state,
    getUserInfo,
    setInfo,
    removeInfo
  }
})
