<template>
  <div class="shopnav">
    <ul>
      <li v-for="li in uldata" v-bind:key="li.cata_id">{{li.cata_name}}</li>
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
  position fixed

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