<script setup lang="ts">
import type { IGood, IMenu } from '@/types'
import { ref, watch } from 'vue'
import OpLoadingView from '@/components/OpLoadingView.vue';
import { useAsync } from '@/use/useAsync';
import { useCartStore } from '@/stores/cart'
import { fetchGoodsListData } from '@/api/goods'
import { useRoute } from 'vue-router';
import GoodsItem from './GoodsItem.vue';

const route = useRoute()
const { id } = route.params
const { pending } = useAsync(
  () => fetchGoodsListData(id as string).then((v) => v.data), [] as IMenu[])
const data: IMenu[] = [
      {
        value: 1,
        label: '单品活动',
        icon: '',
        goods: [
          {
            id: 1,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 2,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:19.9,
            oldPrice:32.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 3,
            name: '【果切】',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:15.9,
            oldPrice:26.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 4,
            name: '【果切】',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:29.9,
            oldPrice:38.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      },
      {
        value: 2,
        label: '满减活动',
        icon: '',
        goods: [
          {
            id: 5,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 6,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 7,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 8,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      },
      {
        value: 3,
        label: '热销爆款',
        icon: '',
        goods: [
          {
            id: 9,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 10,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 11,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 12,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      },
      {
        value: 4,
        label: '其他',
        icon: '',
        goods: [
          {
            id: 13,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 14,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 15,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 16,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      }
      ,
      {
        value: 4,
        label: '其他',
        icon: '',
        goods: [
          {
            id: 17,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 18,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 19,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 20,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      }
      ,
      {
        value: 5,
        label: '热门',
        icon: '',
        goods: [
          {
            id: 21,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 22,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 23,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 24,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      }
      ,
      {
        value: 6,
        label: '热销款',
        icon: '',
        goods: [
          {
            id: 25,
            name: '【果切】红柚+芒果 约350g 芒果拼拼',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:1,
            checked:true
          },{
            id: 26,
            name: '【果切】随机拼 约250g 阳光果切',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 345,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 27,
            name: '【果切】111',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          },{
            id: 28,
            name: '【果切】222',
            imgUrl: '/imgs/index_page/shop-list/post1.png',
            sellCount: 587,
            rating: 4.2,
            price:9.9,
            oldPrice:22.9,
            tips:"",
            discount:{
              type:1,
              limitCount:1,
            },
            cartCount:0,
            checked:false
          }
        ]
      }
    ]

const { setCartItems } = useCartStore()
watch(data, (nv) => {
  const cartGoods = nv.reduce((p: IGood[], v: IMenu) => [...p, ...v.goods], []).filter((v) => v.cartCount)
  setCartItems(cartGoods)
})
const categoryActive = ref(0)
</script>

<template>
  <OpLoadingView :loading="pending" type="skeleton">
    <div class="shop-goods-list">
      <VanSidebar v-model="categoryActive">
        <VanSidebarItem v-for="v in data" :key="v.label" :title="v.label"></VanSidebarItem>
      </VanSidebar>
      <div class="list">
        <template v-for="v in data" :key="v.label">
          <div class="category-name">{{ v.label }}</div>
          <GoodsItem v-for="cv in v.goods" :key="cv.id" :data="cv"/>
        </template>
      </div>
    </div>
  </OpLoadingView>
</template>

<style lang="scss" scoped>
.shop-goods-list{
  display: flex;

  .list{
    flex: 1;
    margin: 0 10px;
    .category-name {
      font-size: 15px;
      font-weight: bold;
      padding: 10px 0 ;
      line-height: 1.2;
    }
  }
}
</style>