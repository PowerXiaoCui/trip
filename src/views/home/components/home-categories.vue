<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const store = useHomeStore();
const { categories } = storeToRefs(store);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 60px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 69px;
    margin-top: 8px;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
