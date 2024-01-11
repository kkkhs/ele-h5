import type { IUserInfo } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@/use/useLocalStorage'

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
  const {
    value: $userInfo,
    setValue: $setUserInfoValue,
    removeItem: $removeUserInfoItem
  } = useLocalStorage('userInfo', getDefaultUserInfo())
  const { setValue: $setTokenValue, removeItem: $removeTokenItem } = useLocalStorage('token', '')
  const state = ref({
    userInfo: getDefaultUserInfo(),
    token: ''
  })
  // 获取信息
  const getUserInfo = computed(() => {
    // 为什么不直接读 localStorage 的值呢？
    // 因为读取 localStorage 是比较耗时的操作，所以这里先读 store
    if (!state.value.userInfo || !state.value.userInfo.id) {
      state.value.userInfo = $userInfo.value
    }
    return state.value.userInfo
  })
  // 登陆时设置信息
  const setInfo = ({ token, userInfo }: IUserState) => {
    state.value.userInfo = userInfo
    state.value.token = token
    $setUserInfoValue(userInfo)
    $setTokenValue(token)
  }
  // 移除信息
  const removeInfo = () => {
    state.value.userInfo = getDefaultUserInfo()
    state.value.token = ''
    $removeUserInfoItem()
    $removeTokenItem()
  }
  return {
    state,
    getUserInfo,
    setInfo,
    removeInfo
  }
})
