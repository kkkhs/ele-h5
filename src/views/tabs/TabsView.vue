<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
//记录当前选择的 tab
const active = ref('home')
</script>

<template>
  <div class="center">{{ active }}</div>
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
