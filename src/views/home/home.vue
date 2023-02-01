<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox />
    <!-- <div v-if="showMassage">woshi xinxi</div> -->
    <home-categories />
    <homeContent />
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './components/home-nav-bar.vue';
import homeSearchBox from './components/home-search-box.vue';
import homeCategories from './components/home-categories.vue';
import homeContent from './components/home-content.vue';
import useScorll from '@/hooks/useScorll';

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

// useScorll(() => {
//   homeStore.fetchHouseListData();
// });

const { isReachBottom, scrollTop } = useScorll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// const showMassage = ref(false);
// watch(scrollTop, (newTop) => {
//   showMassage.value = newTop > 100;
// });

// const showMassage = computed(() => {
//   return scrollTop.value >= 100;
// });
</script>

<style lang="less" scoped>
.home {
  // height: calc(100vh - 50px);
  // overflow-y: auto;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  padding-bottom: 70px;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
