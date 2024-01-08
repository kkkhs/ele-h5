<script setup lang="ts">
import { RouterView } from 'vue-router'
import TabsView from './views/tabs/TabsView.vue'
import { fetchTest } from './api/test'

fetchTest()
</script>

<template>
  <RouterView />
  <tabs-view></tabs-view>
</template>

<style scoped></style>
