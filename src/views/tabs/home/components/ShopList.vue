<script setup lang="ts">
import type { IShop } from '@/types'
import { ref } from 'vue'
import { fetchShopList } from '@/api/shop'
import OpList from '@/components/list/OpList'
import ShopItem from './ShopItem.vue'

let page = 1
const shopList = ref([] as IShop[])
const loading = ref(false)
const finished = ref(false)

const onLoad = async () => {
  const { data, total } = await fetchShopList({
    _page: page++,
    _limit: 5,
  })
  shopList.value.push(...data)
  loading.value = false

  if (shopList.value.length >= total) {
    finished.value = true
  }
}
</script>

<template>
  <div class="home-shop-list">
    <OpList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ShopItem v-for="v in shopList" :key="v.id" :data="v" />
    </OpList>
  </div>
</template>

<style lang="scss" scoped>
.home-shop-list {
  padding: 8px 10px;
}
</style>
