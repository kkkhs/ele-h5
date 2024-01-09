<script setup lang="ts">
import TheTop from './components/TheTop.vue'

const recomments = [
  {
    value: 1,
    label: '牛腩'
  },
  {
    value: 2,
    label: '色拉'
  }
]
</script>

<template>
  <div class="home-page">
    <TheTop :recomments="recomments" />
  </div>
</template>

<style></style>
