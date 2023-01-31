<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox />
    <home-categories />
    <homeContent />
    <button class="moreData" @click="moreBtnClick">获取数据</button>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './components/home-nav-bar.vue';
import homeSearchBox from './components/home-search-box.vue';
import homeCategories from './components/home-categories.vue';
import homeContent from './components/home-content.vue';

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListDara();

const moreBtnClick = () => {
  homeStore.fetchHouseListDara();
};
</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 50px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
