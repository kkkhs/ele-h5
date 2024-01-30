<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useAsync } from '@/use/useAsync';
import { fetchShopPageData } from '@/api/shop';
import OpLoadingView from '@/components/OpLoadingView.vue';
import OpTodo from '@/components/OpTodo.vue';
import ShopHeader from './components/ShopHeader.vue';
import { PRIMARY_COLOR } from '@/config';
import GoodsList from './components/GoodsList.vue';

const TAB_LIST = [
  {
    value: 1,
    label: '全部商品',
    component: GoodsList
  },
  {
    value: 2,
    label: '评价',
    component: OpTodo
  },
  {
    value: 3,
    label: '商家',
    component: OpTodo
  },
]

const active = ref(TAB_LIST[0].value)

const route = useRoute()
const { id } =  route.params
const{ data, pending } = useAsync(() => fetchShopPageData(id as string), {
  announcement: '',
  discounts: [],
  redbags: [],
  activitys: [],
  branch: '',
  comments: [],
  deliveryDistance: '',
  deliveryStrategy: '',
  deliveryStratingPrice: '',
  deliveryTags: [],
  deliveryTime: '',
  id: '',
  monthlyCount: 0,
  postUrl: '',
  bgUrl: '',
  score: 0,
  services: [],
  shopName: '',
  tops: [],
})

const onClickLeft = () =>history.back()
</script>

<template>
  <div class="shop-page">
    <VanNavBar left-text="返回" left-arrow @click-left="onClickLeft"></VanNavBar>
    <OpLoadingView :loading="pending" type="skeleton">
      <ShopHeader :data="data"></ShopHeader>
      <VanTabs v-model="active" :color="PRIMARY_COLOR" sticky animated swipeable>
        <VanTab v-for="v in TAB_LIST" :key="v.value" :title="v.label" :name="v.value">
          <component :is="v.component"></component>
        </VanTab>
      </VanTabs>
  </OpLoadingView>
  </div>
</template>