import Todo from '@/components/OpTodo.vue'
import ShopList from './components/ShopList.vue'

export const HOME_TABS = [
  {
    title: '附近推荐',
    value: 'recommend',
    component: ShopList
  },
  {
    title: '发现好菜',
    value: '1',
    component: Todo
  },
  {
    title: '超市',
    value: '2',
    component: Todo
  },
  {
    title: '水果',
    value: '3',
    component: Todo
  },
  {
    title: '买菜',
    value: '4',
    component: Todo
  },
  {
    title: '到店吃',
    value: '5',
    component: Todo
  },
  {
    title: '玩乐',
    value: '6',
    component: Todo
  },
  {
    title: '医药',
    value: '6',
    component: Todo
  }
]
