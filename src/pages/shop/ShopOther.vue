<template>
<div>
    <div class="latest">
      <h3>——{{new_recommenddata.title_en}}——</h3>
      <ul>
        <li v-for="new_recommend in new_recommendlist" :key="new_recommend.ad_id">
          <img :src="new_recommend.ad_code" />
          <p>{{new_recommend.ad_name}}</p>
        </li>
      </ul>
    </div>
     <div class="flagdata">
       <h2>{{top5flagdata.title}}</h2>
      <h3>——{{top5flagdata.title_en}}——</h3>
      <ul>      
        <li v-for="top5flag in top5flaglist" :key="top5flag.ad_id">
          <img :src="top5flag.ad_code" />
          <div class="logo"><img :src="top5flag.brand_logo" /></div> 
          <p>{{top5flag.ad_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      new_recommendlist:'',
      new_recommenddata:'',
      top5flaglist:'',
      top5flagdata:''

    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/home_all_info"
    });

    this.new_recommendlist = result.data.new_recommend.list
    this.new_recommenddata = result.data.new_recommend

    this.top5flagdata = result.data.top5flag
    this.top5flaglist = this.top5flagdata.list
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

.flagdata
   h2 
    text-align center
    font-size 16px
  

  h3 
    text-align center
    font-weight normal
    margin-bottom 8px
  ul
    width 100%
    li 
      width 100%
      position relative
      margin-bottom 5px
      .logo
        width 60px
        height 60px
        border-radius 50%
        background #fff
        position absolute
        top 0
        left 0 
        bottom 0
        right 0
        margin auto
        display flex
        overflow hidden
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
        background -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, 0.7)))
</style>
