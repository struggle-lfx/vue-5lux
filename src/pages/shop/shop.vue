<template>
    <div class="index-container">
        <Header></Header>
        <main>
          <Swipper v-bind:swipperdata="swipperdata"></Swipper>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Swipper from '../../components/swipper.vue';
import http from '../../utils/http'
export default {
  components: {
    Header,
    Footer,
    Swipper
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
        console.log(result.data)
    this.swipperdata = result.data

    
  }
};
</script>

<style lang="stylus" scoped>
.mint-swipe 
  height 300px
  width 100%

</style>