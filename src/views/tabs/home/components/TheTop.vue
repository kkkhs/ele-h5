<script setup lang="ts">
import type { ISearchRecomment } from '@/types'
interface IProps {
  recomments: ISearchRecomment[]
}
defineProps<IProps>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png" />
      <div class="location">幸福小区(北一区东南门)</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" />
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" />
    </div>
    <VanSearch
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="世界茶饮 35减2"
    >
      <template #right-icon>
        <div>搜索</div>
      </template>
    </VanSearch>
    <div class="search-recommend">
      <div v-for="v in recomments" :key="v.value" class="tag">{{ v.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;
  .top {
    display: flex;
    align-items: center;
    padding: 0.1rem 0.1rem 0 0.1rem;
    line-height: 0.15rem;
    font-size: 0.15rem;
    font-weight: bold;
    .location-icon {
      width: 0.24rem;
      height: 0.24rem;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 0.24rem;
      height: 0.24rem;
    }
    .comments-icon {
      width: 0.28rem;
      height: 0.24rem;
      margin-left: 0.1rem;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 0.1rem 0.08rem;
    .tag {
      font-size: 0.12rem;
      border-radius: 0.1rem;
      background: rbg(242, 242, 242, 0.3);
      padding: 0.02rem 0.08rem;
      margin-right: 0.1rem;
    }
  }
}
</style>

<!-- 调整搜索的样式 -->
<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>
