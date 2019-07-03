<template>
<div>
<ul v-for="advertitem in advertdata" :key="advertitem.ad_id">
    <li v-for="advertlist in advertitem" :key="advertlist.ad_id">
       
      <img :src="advertlist.ad_code" />
      <!-- <span v-for="advert in advertlist" :key="advert.ad_id"> 
          <img :src="advert.ad_code" /> -->


      <!-- </span> -->
      <!-- {{advert}}<br> -->
    </li>
  </ul>
</div>
  
</template>
<script>
import http from '../../utils/http'
export default {
    data() {
        return {
            advertdata:[]
        }
    },
  async mounted() {
    let result = await http.get({
      url: "/api/index/other_advert"
    });
    //console.log(JSON.stringify(result.data))
    this.advertdata =  result.data
    console.log(result)
  }
    
}
</script>
<style lang="stylus" scoped>
ul
    width 100%
    li
    width 100%
        img 
            width 100%
        span 
            width 100%
            img 
                width 100%

    
</style>