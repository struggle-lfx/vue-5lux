<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(swipper,index) in swipperdata" :key="swipper.slide_id ">
        <img :src="swipper.filepath" />
            <div class="swiper-pagination swiper-pagination-fraction">
              <span class="swiper-pagination-current">{{index+1}}</span> /
              <span class="swiper-pagination-total">5</span>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
import "../assets/script/swiper.min.js";
import "../assets/styles/swiper.min.styl";
import http from "../utils/http";


export default {
  data() {
    return {
      swipperdata: ""
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/good/goodsdetail/from=&mtoken=",
      params: {
        id: this.$route.params.id
      }
    });
    this.swipperdata = result.data.goods_gallery;
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true
      });
    });

  }
};
</script>
<style lang="stylus">
.swiper-container 
  height 3.75rem
  background #fff
  .swiper-pagination
    text-align right
    padding-top .44rem
    padding-bottom .1rem
    bottom 0
    background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.5)));

  img 
    height 100%
    width 100%
    object-fit contain
    vertical-align middle

</style>