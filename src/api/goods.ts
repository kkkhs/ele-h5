import axios from "axios"
import type { IMenuList } from '@/types'

export const fetchGoodsListData = (shopId: string) => {
  return axios.get<IMenuList, IMenuList>('goods_list', {
    params: { shopId },
  })
}