<template>
    <div class="index-container">
        <Header></Header>
        <main>
          <ShopNav></ShopNav>
          <Swipper v-bind:swipperdata="swipperdata"></Swipper>
          <ButtonInfo></ButtonInfo>
          <Fashion></Fashion>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Swipper from '../../components/swipper.vue';
import ShopNav from './ShopNav';
import http from '../../utils/http'
import ButtonInfo from './ButtonInfo'
import Fashion from './Fashion'
export default {
  components: {
    Header,
    Footer,
    Swipper,
    ShopNav,
    ButtonInfo,
    Fashion
  },
  data() {
    return {
      swipperdata:[]
    }
  },

  async mounted() {
    let result =  await http.get({
      url:'/api/shop/slide',
      params:{
        mtoken:''
      }
    })
    this.swipperdata = result.data

    
  }
};
</script>

<style lang="stylus" scoped>
.mint-swipe 
  height 300px
  width 100%

</style>