<template>
  <div class="index-container">
    <Header></Header>
    <main>
      <Swipper v-bind:swipperdata="swipperdata"></Swipper>
      <Nav></Nav>
      <Advising></Advising>



    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import http from '../../utils/http'
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Swipper from '../../components/swipper.vue'
import Nav from './nav'
import Advising from './advising'
export default {
  components: {
    Header,
    Footer,
    Swipper,
    Nav,
    Advising
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
  }
};
</script>
<style lang="stylus" >
.mint-swipe 
  width 100%
  height 412px

</style>