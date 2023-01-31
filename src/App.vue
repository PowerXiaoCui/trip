<template>
  <div class="app">
    <RouterView />

    <!-- <tab-bar v-if="!router.meta.hideTabBar" /> -->
    <tab-bar />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tab-bar/tab-bar.vue';

const router = useRoute();
</script>

<style lang="less" scoped></style>
