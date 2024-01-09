<script setup lang="ts">
import TabsView from './views/tabs/TabsView.vue'
import { fetchTest } from './api/test'

fetchTest()
</script>

<template>
  <tabs-view></tabs-view>
</template>

<style>
@import 'normalize.css';

#app {
  /** 字体抗锯齿，让字体看起来更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.14rem;
}
</style>
