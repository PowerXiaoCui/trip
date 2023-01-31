<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" show-action placeholder="城市/区域/位置" shape="round" @cancel="cancelClick" />
      <van-tabs v-model:active="tabActive">
        <!-- <van-tab :title="allCity?.cityGroup?.title">{{}}</van-tab>
            <van-tab :title="allCity?.cityGroupOverSea?.title"></van-tab> -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <cityGroup :groupData="currentGroup" /> -->
      <template v-for="(value, key, index) in allCities" :key="index">
        <cityGroup v-show="tabActive ===key" :groupData="value"></cityGroup>
      </template>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

import cityGroup from './components/city-group.vue';

const router = useRouter()
const searchValue = ref("")

const cancelClick = () => {
  router.back()
}

const tabActive = ref()

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {

  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
