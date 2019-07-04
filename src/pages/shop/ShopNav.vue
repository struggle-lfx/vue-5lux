<template>
  <div class="shopnav">
    <!-- <ul>
      <li v-for="li in uldata" v-bind:key="li.cata_id">{{li.cata_name}}</li>
    </ul>-->
    <ul>
      <li>首页</li>
      <li>箱包</li>
      <li>美妆</li>
      <li>服装</li>
      <li>腕表</li>
      <li>配饰</li>
      <li>鞋靴</li>
      <li>母婴</li>
      <li>美酒</li>
      <li>美食</li>
      <li>家居</li>
      <li>电子</li>
      <li>办公</li>
    </ul>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      uldata: []
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/catalist"
    });
    this.uldata = result.data;
  }
};
</script>
<style lang="stylus" scoped>
.shopnav 
  width 100%
  overflow hidden
  ul 
    padding-left 25px
    width 100%
    display flex
    overflow auto
    align-items center 
    height 39px
    

    li 
      margin-right 30px
      flex-shrink 0
      font-size 15px
    
  

</style>