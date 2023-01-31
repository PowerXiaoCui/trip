import cslRequest from '../request/index';

export function getHomeHotSuggests() {
  return cslRequest.get({
    url: '/home/hotSuggests',
  });
}

export function getHomeCategories() {
  return cslRequest.get({
    url: '/home/categories',
  });
}
export function getHomeHouseList(currentPage = 1) {
  return cslRequest.get({
    url: '/home/houseList',
    params: {
      page: currentPage,
    },
  });
}
