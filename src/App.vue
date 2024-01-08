<script setup lang="ts">
import TabsView from './views/tabs/TabsView.vue'
import { fetchTest } from './api/test'

fetchTest()
</script>

<template>
  <tabs-view></tabs-view>
</template>

<style scoped></style>
