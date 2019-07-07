<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="swipper in swipperdata" :key="swipper.slide_id ">
         <img :src="swipper.filepath" /> 
            
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: ["swipperdata"],
    computed: {
    swiper() {
     return this.$refs.mySwiper.swiper
    }
   }
}
</script>