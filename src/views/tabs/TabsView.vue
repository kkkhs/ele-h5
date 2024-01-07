<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
//记录当前选择的 tab
const active = ref(route.name as string)

watch(active, (newValue) => {
  router.push({ name: newValue })
})
</script>

<template>
  <!-- <div class="center">{{ active }}</div> -->
  <RouterView />
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact-o">我的</TabbarItem>
  </Tabbar>
</template>

<style>
.center {
  text-align: center;
}
</style>
