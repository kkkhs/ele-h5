<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
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
  <vanTabbar v-model="active">
    <vanTabbarItem name="home" icon="home-o">首页</vanTabbarItem>
    <vanTabbarItem name="order" icon="bars">订单</vanTabbarItem>
    <vanTabbarItem name="me" icon="contact-o">我的</vanTabbarItem>
  </vanTabbar>
</template>

<style>
.center {
  text-align: center;
}
</style>
