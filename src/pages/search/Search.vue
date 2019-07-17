<template>
  <div class="search">
    <div class="search-header">
      <div class="search-input">
        <span class="yo-ico">&#xe650;</span>
        <input type="text" placeholder="Gucci包" v-model="search" />
      </div>
      <span @click="cancel">取消</span>
    </div>
    <!-- <div>
      {{searchlist}}
    </div> -->
   
    <div class="contain">
      <div class="hotsearch">
        <p>热门搜索</p>
        <ul>
          <li v-for="hot_search in hotsearch" :key="hot_search.keyword"><a href="hot_search.uri">{{hot_search.keyword}}</a></li>
        </ul>
      </div>
      <div class="tuijian">
        <p>————为您推荐————</p>
        <ul>
          <li v-for="tuijian in tuijianList" :key="tuijian.product_id" @click="gotoDetails(tuijian.product_id)">
            <img :src="tuijian.product_thumb" alt="">
            <h4>{{tuijian.product_name}}</h4>
            <p>￥{{tuijian.product_price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import http from "../../utils/http";
import _ from "loadsh";
export default {
  data() {
    return {
      hotsearch: "",
      search: "",
      searchlist: "",
      tuijianList:''
    };
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    gotoDetails(id){
      console.log(0)
      this.$router.push({
        name:'details',
        params:{id} 
      })
      
    }
  },
  computed: {},
  async mounted() {
    let result = await http.get({
      url: "/api/search/recommend_list"
    });
    this.hotsearch = result.data.hot_search;
    this.tuijianList = result.data.recommend_products
  },
  watch: {
    search: async function(newsearch) {
      let result = await http.get({
        url: "/search/rpcsearchnew/getkey?pid=2&search=" + newsearch
      });
      this.searchlist = result.data;

      console.log(result.data);
    }
  }
};
</script>
<style lang="stylus">
.search
  background #fff
  .search-header
    display flex
    height 0.44rem
    align-items center   
    padding 0 0.1rem
    .search-input
      flex 1
      margin 0 0.11rem 0 0.08rem
      height 0.32rem
      background #f2f2f2
      border-radius 0.05rem
      margin-right 0.1rem

      span
        margin 0 0.08rem

      input
        width 90%
        background transparent
        border none
        height .32rem
  .contain
    .hotsearch
      p  
        padding-left .1rem
        background #f2f2f2
        height .4rem
        line-height .4rem
      ul
          display flex
          flex-wrap wrap
          padding .1rem .15rem
        li 
          margin 0 .1rem .1rem
          border 0.5px solid #e5e5e5 
          padding 0 .1rem 
          height .3rem
          line-height .3rem
          a 
            color #7e8c8d
    .tuijian
      >p 
        text-align center
        background #f2f2f2
        height .4rem
        line-height .4rem 
      ul
        display flex
        flex-wrap wrap
        justify-content space-around
        li 
          width 42%
          h4 
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis; 
            font-size .12rem
            color #333
            font-weight normal
          p 
            text-align center
            font-size .12rem
            color #999
          img 
            width 100%
            
</style>