<template>
  <div class="car">
    <div class="toptab">
      <div class="car-header">
        <i @click="back"></i> <p>购物袋()</p>
        <span>编辑</span>
      </div>
      <div class="car-bottom">
        <p>
          温馨提示：现在登录，您可以同步电脑与手机购物袋中的商品
        </p>
        <span>登录</span>

      </div>
    </div>
    
    <ul class="car-contain">
      <li v-for="good in goods" :key="good.id">
        <div class="header">
          <span>{{good.mbpage_title}}</span>
          <i></i>
          <b>编辑</b>
        </div>
        
        <div class="li-contain">
          <div>
            <img :src="good.imgurl" alt="">
          </div>
          
          <span>{{good.brand_name}}</span>
        </div>
       

      </li>
    </ul>
    <!-- {{goods}} -->
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    // selectId(){
    //   return this.$store.state.goodsList.filters(goods=>goods.id) 
    // }
    // // console.log(selectId)
    ...mapState({
      goods:state=>state.goodsList
     
    })
  },
  methods: {
     selectId:function(){
       let Id = []
       for(goodsId in goods){
         Id.push(goodsId.id)

       }
       return Id
       console.log(Id)
     },
     back(){
       console.log(0)
       this.$router.push('/home')
     }
  },
}
</script>
<style lang="stylus">
.car 
  background #fff
  .toptab
    .car-header
      height .44rem
      line-height .44rem   
      border-bottom: 0.5px solid rgba(0,0,0,.5);
      i 
        background url('/image/backWhite.png')
        width .22rem
        height .22rem
        line-height .22rem
        background-size .22rem .22rem
        display inline-block
        position absolute
        top .11rem
        left .15rem
      p 
        text-align center
      span 
        position absolute
        right .1rem
        top 0
    .car-bottom
      height .54rem
      display flex
      align-items center
      
      p 
        padding-left .15rem
        margin .05rem 0
      span 
        width 50px
        height .3rem
        background #9b885f
        color #fff
        text-align center
        line-height .3rem
  .car-contain
    
    li
      margin-top .10rem 
      border-top 10px solid #e5e5e5
      .header
        position relative
        border-bottom 1px solid #e5e5e5
        span
          display inline-block
          margin-left .15rem
          height .42rem
          line-height .42rem
          color #666666
          font-size .12rem
        i 
          background url('/image/arrowheader.png')
          width .07rem
          height .13rem
          background-size .07rem .13rem
          display inline-block
          margin-left .05rem
        b 
          position absolute
          right 10px
          top .1rem
          font-weight normal
          color #666

      .li-contain
        padding .1rem 0
        img 
          width .9rem 

  
</style>