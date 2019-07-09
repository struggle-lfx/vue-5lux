<template>
<!-- 
<div>
  
    <ul v-for="fashionitem in fashion_guide" :key="fashionitem.ad_id">
        <img :src="fashionitem.ad_code" alt="" srcset="">
      <li v-for="fashionlist in fashionitem" :key="fashionlist.ad_id">
        <img :src="fashionlist.ad_code" />
        <AdverSmall v-bind:adver-small="adver-small"></AdverSmall>
      </li>
    </ul>
  </div> -->


       <!-- <h2>{{top5flagdata.title}}</h2>
      <h3>——{{top5flagdata.title_en}}——</h3> -->
      <ul>      
        <li v-for="top5flag in fashion_guide" :key="top5flag.ad_id">
          <img :src="top5flag.product_thumb" />
          <p>{{top5flag.brand_name}}</p>
        </li>
      </ul>


</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
        fashion_guide:''
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/home_all_info"
    });
    this.fashion_guide = result.data.fashion_guide.list.product_info
    // this.top5flaglist = this.fashion_guide.list
  }
};
</script>
<style lang="stylus" scoped>
.latest 
  h3 
    text-align center
    font-weight normal
    margin-bottom 8px
  
  ul 
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-between
    position relative

    li 
      width 49%
      margin-bottom 5px
      position relative
      
      img 
        width 100%
      p 
        position absolute
        left 0
        bottom 0
        color #fff
        text-align center
        width 100%
        font-size 18px
        background -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, 0.7)));


</style>
