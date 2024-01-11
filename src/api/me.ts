import type { IMeInfo } from '@/types'
import axios from './base'

export const fetchMePageData = () => {
  return axios.get<IMeInfo, IMeInfo>('me_page')
}
