<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <houseItemV9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
        />
        <houseItemV3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import houseItemV9 from '@/components/home-item-v9/home-item-v9.vue';
import houseItemV3 from '@/components/home-item-v3/home-item-v3.vue';

const homestore = useHomeStore();
const { houseList } = storeToRefs(homestore);
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
