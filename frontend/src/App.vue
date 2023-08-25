<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components:{NavBarComp, FooterComp}
}

// const debounce = (fn, delay) => {
//   let timer = null;
//   return function(){
//     let context = this;
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(function (){
//       fn.apply(context, args); 
//     }, delay);
//   };
// };
// const _ResizeObserver = window.ResizeObserver;
// window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
//   constructor(callback){
//     callback = debounce(callback, 16);
//     super(callback);
//   }
// }
</script>

<style >


</style>