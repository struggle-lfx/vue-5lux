<template>
  <div>
    <Swiper></Swiper>
    <span @click="handclick" class="back"></span>
    <div class="price">
      <span>{{details.goods_info.product_price}}</span>
      <i>{{details.goods_info.market_price}}</i>
      <b @click="rankclick">{{details.user_price_info.rank_name}}</b>


    </div>
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
    console.log(result.data)
    this.details = result.data;
  },
  methods: {
    handclick() {
      this.$router.back();
    },
    rankclick(){
      MessageBox({
        title: '会员价',
        message: this.price,
      });
    },

  }
};
</script>

<style lang="stylus">
.back {
  background: url('/back.png') no-repeat;
  position: absolute;
  top: 0.07rem;
  left: 0.13rem;
  z-index: 2000;
  width: 30px;
  height: 30px;
  background-size: 30px 30px;
}
</style>