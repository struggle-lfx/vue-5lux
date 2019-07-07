<template>
  <div class="contain">
    <div class="single">
      <a :href="advertdata.new_register[0].ad_link">
        <img :src="advertdata.new_register[0].ad_code" alt srcset />
      </a>
    </div>
    <ul class="vip_member">
      <li v-for="vip_member in advertdata.vip_member" :key="vip_member.ad_id">
        <img :src="vip_member.ad_code" alt srcset />
      </li>
    </ul>
    <div class="single">
      <a :href="advertdata.five_example.ads_info.ad_link">
        <img :src="advertdata.five_example.ads_info.ad_code" alt srcset />
      </a>
    </div>
    <div class="list">
      <div v-for="article_list in advertdata.article_list" :key="article_list.ads_info.ad_id" >       
        
        <div class="listitem">
          <img :src="article_list.ads_info.ad_code" alt srcset />
          <div>
            <h3>{{article_list.ads_info.ad_name}}</h3>
          <p>{{article_list.ads_info.ad_title}}</p>
          </div>
          
        </div>
        <div class="nav">
          <ul>
            <li v-for="product_info in article_list.ads_info.product_info" :key="product_info.id" :id="product_info.id" @click="handleclick">
              <img :src="product_info.product_thumb" alt srcset />
              <p>{{product_info.ad_title}}</p>
              <span>{{product_info.ad_subtitle}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      advertdata: [],
      goodsitem: []
    };
  },
  async mounted() {
    let result = await http.get({
      url: "/api/index/other_advert"
    });
    //console.log(JSON.stringify(result.data))
    this.advertdata = result.data;
    // ss
    console.log(result.data.article_list);
  }
};
</script>
<style lang="stylus" scoped>
.contain 
  .single 
    width 100% 
    margin-bottom .1rem
    a 
      width 100%
      img 
        width 100%
  .vip_member
    width 100%
    display flex
    flex-wrap wrap
    li 
      margin-bottom .1rem
      width 100%
      img 
        width 100%
    li:nth-child(n+2)
      width 23%
      margin-left 2%

   .list
     background #fff
     .listitem
      >img 
        width 100%
      >div
        margin  .18rem .2rem 0 .2rem
        border-bottom solid .5px #000
        padding-bottom .2rem
        h3 
          font-size .14rem
          include ellipsis(null, 1);
          padding-bottom .18rem
        p 
          font-size .12rem
    .nav 
      overflow hidden
      padding .2rem .1rem

      ul 
        width 100%
        display flex
        overflow auto
        align-items center 

        li 
          flex-shrink 0
          width 1.3rem
          height 1.8rem
          text-align center
          span 
            font-size .12rem
            color #999
          p
            font-size .13rem
            color #333
          img 
            height 80%
           
   
</style>