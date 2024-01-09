import type { IHomeInfo } from '@/types'
import axios from './base'

export const fetchHomePageData = () => {
  return axios.get<IHomeInfo, IHomeInfo>('home_page')
}
