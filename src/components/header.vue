<template>
    <header>
      <div class="search"  @click="search">
        <!-- <a href="#/search"> -->
          <span class="yo-ico">&#xe650;</span>
          <i>5LUX.COM</i>
        <!-- </a> -->
      </div>
      <span class="yo-ico">&#xe6cd;</span><b v-show="goodsNumber>0">{{goodsNumber}}</b>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    number(){
          return this.$store.getters.number
      }

  },
  methods: {
    search(){
      this.$router.push('/search')
    }
  },
  computed:{
    ...mapGetters({
      goodsNumber:'goodsNumber'
    })
  }
}
</script>

<style lang="stylus">
header
  height .44rem
  display flex
  padding-right .17rem
  align-items center
  background black
  .search
    flex 1;
    height .3rem
    background #fff
    margin 0 .16rem 0 .17rem;
    border-radius .05rem;
    background-color hsla(0,0%,100%,.5);
    display: flex
    position relative
    a 
      width 100%
      color #000
      >span
          font-size .16rem
          margin 0 .08rem    
      i
          font-size .16rem

  >span
      font-size .22rem
      color #fff

  b 
    position: absolute;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
    background: #f33;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 15px;
    right: 11px;
    top: 9px;
  
       
</style>