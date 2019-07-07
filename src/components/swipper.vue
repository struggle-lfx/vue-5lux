<template>

    <mt-swipe >
      <mt-swipe-item v-for="swipper in swipperdata" :key="swipper.slide_id ">
        

         <img :src="swipper.silde_original"/>
      </mt-swipe-item>
    </mt-swipe>

</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  props: ["swipperdata"],
};
</script>


<style lang="stylus" scoped>

img 
  height 100%
  width 100%
>>>.mint-swipe-indicator
      color #fff
      opacity 1 
      border 1px solid #fff
      background  transparent   
      &.is-active
        background #fff
</style>