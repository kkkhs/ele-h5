import type { ISearchResultList } from '@/types'
import axios from './base'

export function fetchSearchData(key = '') {
  return axios.get<ISearchResultList, ISearchResultList>('home_search', {
    params: { _label_like: key }
  })
}
