<template>
  <div>
    <Swipper4 v-bind:swipperdata="swipperdata"></Swipper4>
    <span @click="handclick">返回</span>
  </div>
</template>

<script>
import http from "../../utils/http";
import Swipper4 from "../../components/Swipper4";
export default {
  data() {
    return {
      swipperdata: []
    };
  },
  components: {
    Swipper4
  },

  methods: {
    handclick() {
      this.$router.back();
    }
  },
  async mounted() {
    let result = await http.get({
      url: "/api/good/goodsdetail/from=&mtoken=",
      params: {
        id: this.$route.params.id
      }
    });
    this.swipperdata = result.data.goods_gallery;


    console.log(result.data);
  }
};
</script>

<style lang="stylus">
.swiper-container 
    width 600px
    height 300px
    img 
        width 100%

</style>