<template>
  <div class="details">
    <div class="container">
      <Swiper></Swiper>
      <span @click="handclick" class="back"></span>
      <div class="price">
        <div class="price-first">
          <em>￥</em><span>{{details.goods_info.product_price}}</span>
          <i>{{details.goods_info.market_price}}</i>
          <b @click="rankclick">{{details.user_price_info.rank_name}}<i></i> </b>
        </div>
        <span>{{details.goods_info.tax_post_info}}</span><i class="show" @click="frombottom"></i>
      </div>
      <div class="recommend">
        <a :href='details.editor_recommend.ad_url'>
        <span>[{{details.editor_recommend.ad_type}}]</span>
        <i>{{details.editor_recommend.ad_name}}</i></a>
        <div class="pre">
          <i class="logo"></i>
          <b>{{details.goods_info.send_time_name}}</b>
          <span>{{details.goods_info.send_store}}</span>
        </div>
      </div>
      <div class="pay">
        <div class="pay-top">
          <b>分期支付</b>
          <span>{{details.installment_str}}</span>
          <i></i>
        </div>
        <div class="pay-bottom">
          <ul>
            <li v-for="info in details.service_info" :key="info.status">
              <span></span> {{info.name}}
            </li>
          </ul>
          <i></i>

        </div>
      </div>

    </div>
    
    <div class="footer"></div>
  </div>
</template>

<script>

import http from "../../utils/http";
import Swiper from "../../components/Swiper";
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      details: ""
    };
  },
  components: {
    Swiper
  },
  async mounted() {
    let result = await http.get({
      url: "/api/good/goodsdetail/from=&mtoken=",
      params: {
        id: this.$route.params.id
      }
    });
    this.details = result.data;
    this.price={
      name1:this.details.rank[0].rank_name +':'+ this.details.rank[0].rank_price,
      name2:this.details.rank[1].rank_name +':'+ this.details.rank[1].rank_price,
      name3:this.details.rank[2].rank_name +':'+ this.details.rank[2].rank_price,
    }
  },
  methods: {
    handclick() {
      this.$router.back();
    },
    rankclick(){
      MessageBox({
        title: '会员价',
        message: this.price.name1 +'</br>'+
         this.price.name2 +'</br>'+ this.price.name3,
         confirmButtonText:'了解'
      });
    },


  }
};
</script>

<style lang="stylus" scoped>
.details
  background #fff
  display flex
  flex-direction column
  height 100%
  .container
    flex 1
    overflow auto

    .back 
      background url('/image/back.png') no-repeat
      position absolute
      top 0.07rem
      left 0.13rem
      z-index 2000
      width 30px
      height 30px
      background-size 30px 30px
    .price
      padding .2rem .15rem .05rem
      border-bottom 1px solid #e8e8e8
      .price-first
        color #9b885f
        span 
          font-size .24rem
          margin-right .05rem
        >i 
          font-size .13rem
          color #999
          text-decoration line-through
          margin-right .1rem
        b
          border .05px solid #9b885f
          padding .05rem
          height .16rem
          
          i           
            display inline-block
            width 6px
            height 10px
            background-size 6px 10px
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeBAMAAADTIlMfAAAAG1BMVEUAAACbiF+biF+biF+biF+biF+biF+biF+biF9gSelDAAAACHRSTlMAMO+fEM+/cFJyq8wAAAArSURBVBjTY2BJZIAC1yYBKKuiQxHKYu6AC1rQURDBQsjSQwjhc0RoIEIIANNeHKNe4jnzAAAAAElFTkSuQmCC') 
            margin-top 3px
            background-repeat no-repeat
            margin-left 5px
      .show 
        background url('/image/explain.png')
        width .2rem
        height .2rem
        background-size .2rem .2rem
        display inline-block
        margin-left .05rem
        vertical-align sub
    .recommend
      padding .15rem .15rem .1rem
      border-bottom .1rem solid #f2f2f2 
      a
        color red
        font-size .12rem
        height .22rem
        display inline-block
      .pre
        .logo 
          width: 20px;
          height: 20px;
          display: inline-block;
          background-image: url('/image/logo.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
          vertical-align: top; 
        b  
          font-size .1rem
          font-weight normal
          margin-left .05rem
          color #999  
        span 
          font-size .1rem
    
          color #c8a985 
    .pay 
      .pay-top
        margin .15rem .15rem 0
        padding-bottom .15rem
        border-bottom 1px solid #e5e5e5
        position relative
        b 
          background #9b885f
          color #fff   
          font-size .11rem 
          margin-right .1rem
          border-radius 2px
          padding 0 .05rem 
        span 
          font-size .14rem
        i 
          background url('/image/pay.png') 
          width .22rem
          height .22rem
          display inline-block
          background-size .22rem .22rem
          position absolute
          right .15rem
      .pay-bottom
        margin .15rem .15rem
        position relative 

        ul
          display flex
          flex-wrap wrap
          width 85%
          li 
            padding 0 .1rem .1rem 0
            span 
              background url('/image/server.png')
              width .15rem
              height .15rem
              display inline-block
              background-size .15rem .15rem
            span:nth-type(5)
                background url('/image/noserver.png')
        i  
          background url('/image/pay.png') 
          width .22rem
          height .22rem
          display inline-block
          background-size .22rem .22rem
          position absolute
          right .15rem
          top 50%

  .footer
    height .5rem
    background red


</style>