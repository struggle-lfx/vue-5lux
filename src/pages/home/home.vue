<template>
  <div class="index-container">
    <Header></Header>
    <main>
      <Swipper v-bind:swipperdata="swipperdata"></Swipper>
      <Nav></Nav>
      <Advising></Advising>
      <Advert></Advert>
      <!-- <Adverother></Adverother> -->
      
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
import Advert from './advert'
import Adverother from './adver-other'

export default {
  components: {
    Header,
    Footer,
    Swipper,
    Nav,
    Advising,
    Advert,
    Adverother

  },
  data() {
    return {
      swipperdata:[]
    }
  },

  async mounted() {
    let result =  await http.get({
      url:'/api/index/index_slider'
    })
    this.swipperdata = result.data  
  }
};
</script>
<style lang="stylus" >
main 
  overflow auto
  .mint-swipe 
    height 70%
    img 
      width 100%


</style>