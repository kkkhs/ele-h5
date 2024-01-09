import axios from './base'

export const fetchTest = () => {
  return axios.get('test')
}
