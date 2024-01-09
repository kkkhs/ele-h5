import type { IShop, IList, IPaginate, IShopDetail } from '@/types'
import axios from './base'

export const fetchShopList = ({ _page, _limit }: IPaginate) => {
  return axios.get<IList<IShop>, IList<IShop>>('shop_list', {
    params: {
      _page,
      _limit,
    },
  })
}

export const fetchShopPageData = (id: string) => {
  return axios.get<IShopDetail, IShopDetail>('shop_page', {
    params: { id },
  })
}
