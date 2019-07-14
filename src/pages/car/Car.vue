<template>
  <div class="car">
    <div class="car-header">
      <i @click="back"></i> <span>购物袋()</span>
    </div>
    <ul class="car-contain">
      <li v-for="good in goods" :key="good.id">
        <div class="header">
          <span>{{good.mbpage_title}}</span>
          <i></i>
          <b>编辑</b>
        </div>
        
        <div class="li-contain">
          <img :src="good.imgurl" alt="">
          <p>{{good.name}}</p>
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
  .car-header
    height .44rem
    line-height .44rem   
    border-bottom: 0.5px solid rgba(0,0,0,.5);
    i 
      background url('/image/backWhite.png')
      width .22rem
      height .22rem
      background-size .22rem .22rem
      display inline-block

  .car-contain
    
    li
      margin-top .10rem 
      .header
        position relative
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
        img 
          width .9rem 

  
</style>