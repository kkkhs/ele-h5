<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '../../search/SearchView.vue'
import { useToggle } from '@/use/useToggle'

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
const [isSearchViewShown, toggleSearchView] = useToggle(false)
</script>

<template>
  <div class="home-page">
    <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
  </div>
</template>

<style></style>
