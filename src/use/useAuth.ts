import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { auth } from '@/api/user'
import type { ILoginInfo } from '@/types'

export function useAuth() {
  const store = useUserStore()
  const user = computed(() => store.getUserInfo) //取数据
  const login = async (data: ILoginInfo) => {
    const { token, userInfo } = await auth(data)
    store.setInfo({ token, userInfo })
  }
  const logout = () => {
    store.removeInfo()
    location.reload()
  }
  return {
    user,
    login,
    logout
  }
}
