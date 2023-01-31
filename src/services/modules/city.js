import cslRequest from '../request/index';

export function getCityAll() {
  return cslRequest.get({
    url: '/city/all',
  });
}
