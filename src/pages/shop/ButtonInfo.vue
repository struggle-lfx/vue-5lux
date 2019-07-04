<template>
    <ul>
      <li v-for="li in uldata" v-bind:key="li.cata_id">         
          <img :src="li.ad_code" alt="" srcset="">
          <i>{{li.ad_name}}</i>
      </li>

    </ul>
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
      url: "/api/shop/buttons_info"
    });
    this.uldata = result.data.button_list;
  }
};
</script>
<style lang="stylus" scoped>
ul 
    display flex
    justify-content space-around
    align-items center
    height 80px
    background #fff
    li 
        display flex
        flex-direction column
        align-items center       
        img 
            width 20px
        i
            color #7e8c8
</style>
