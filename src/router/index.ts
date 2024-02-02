import { createRouter,createWebHashHistory } from 'vue-router'
import TabsView from '@/views/tabs/TabsView.vue'
import HomeView from '@/views/tabs/home/HomeView.vue'
import OrderView from '@/views/tabs/order/OrderView.vue'
import MeView from '@/views/tabs/me/MeView.vue'
import LoginView from '@/views/login/LoginView.vue'
import ShopView from '@/views/shop/ShopView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        { name: 'home', path: '/home', component: HomeView },
        { name: 'order', path: '/order', component: OrderView },
        { name: 'me', path: '/me', component: MeView }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    {
      name: 'shop',
      path: '/shop/:id',
      component: ShopView
    }
  ]
})

export default router
