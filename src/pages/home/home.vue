<template>
  <div class="index-container">
    <Header></Header>
    <main>
      <Swipper v-bind:swipperdata="swipperdata"></Swipper>


      22222
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Swipper from '../../components/swipper.vue'
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
      url:'/index/index_slider'
    })
    this.swipperdata = result.data  
    console.log(result)
  }
};
</script>
<style lang="stylus" >
.mint-swipe 
  width 100%
  height 412px

</style>