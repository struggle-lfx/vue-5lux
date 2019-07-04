<template>
  <div>
    <div>
      <h2>{{fashion.title}}</h2>
      <h3>——{{fashion.title_en}}——</h3>
      <ul>
        <li v-for="fashion in fashiondata" :key="fashion.ad_id">
          <img :src="fashion.ad_code" />
          <p>{{fashion.ad_name}}</p>
        </li>
      </ul>
    </div>
   <div>
        <h2>{{life.title}}</h2>
        <h3>——{{life.title_en}}——</h3>
        <ul>
            <li>
                <img :src="life.list.ad_code" alt="">
                <p>{{life.list.ad_name}}</p>
            </li>
        </ul>
   </div>
    <div class="oversea">
      <h2>{{oversea.title}}</h2>
      <h3>——{{oversea.title_en}}——</h3>
      <ul>
        <li v-for="oversealist in overseadata" :key="oversealist.ad_id">
          <img :src="oversealist.ad_code" />
          <p>{{oversealist.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="oversea">
      <h2>{{vip.title}}</h2>
      <h3>——{{vip.title_en}}——</h3>
      <ul>
        <li v-for="viplist in vipdata" :key="viplist.ad_id">
          <img :src="viplist.ad_code" />
          <p>{{viplist.ad_name}}</p>
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
      fashiondata: "",
      fashion: "",
      life:'',
      overseadata:'',
      oversea:'',
      vip:'',
      vipdata:''
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/home_all_info"
    });

    // let data = result.data.fashion_video;
    // let arr = [];
    // for (let i in data) {
    //   arr.push(data[i]);
    // }
    this.fashiondata = result.data.fashion_video.list.reverse();
    this.fashion = result.data.fashion_video;  
    this.life = result.data.star_outfits;
    this.overseadata = result.data.oversea_recommend.list
    this.oversea = result.data.oversea_recommend
    
    this.vipdata = result.data.vip_special.list
    this.vip = result.data.vip_special

  }
};
</script>
<style lang="stylus" scoped>
div 
  h2 
    text-align center
    font-size 16px
  

  h3 
    text-align center
    font-weight normal
    margin-bottom 8px
  

  ul 
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-between

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
      
    

    li:first-child 
      width 100%

      img 
        width: 100%     
      p 
        font-size: 24px

.oversea
    ul
        position relative
        li:nth-child(2)
            position absolute
            left 0
            bottom 5%
            img 
                height 100%
        li:nth-child(3)
            position absolute
            left 49%
            bottom 30%
            img 
                height 100%
            p 
                bottom 10%
        li:nth-child(1)
            p 
                bottom 55%


</style>
