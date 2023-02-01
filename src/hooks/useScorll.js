import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';

// export default function useScorll(reachBottomCB) {
//   const scorllListenerHandler = () => {
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     if (clientHeight + scrollTop + 1 >= scrollHeight) {
//       if (reachBottomCB) reachBottomCB();
//     }
//   };

//   onMounted(() => {
//     window.addEventListener('scroll', scorllListenerHandler);
//   });

//   onUnmounted(() => {
//     window.addEventListener('scroll', scorllListenerHandler);
//   });
// }

export default function useScorll() {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const scorllListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value + 1 >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener('scroll', scorllListenerHandler);
  });

  onUnmounted(() => {
    window.addEventListener('scroll', scorllListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
