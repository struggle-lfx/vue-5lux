<template>
<div>
<ul v-for="advertitem in advertotherdata" :key="advertitem.ad_id">
    <li v-for="advertlist in advertitem" :key="advertlist.ad_id">
       
      <img :src="advertlist.ad_code" />
            <span v-for="advert in advertlist" :key="advert.ad_id"> 
          <img :src="advert.ad_code" /> 


      </span>

    </li>
  </ul>
  </div>
</template>
<script>
import http from '../../utils/http'
export default {
    data() {
        return {
            advertotherdata:[]
        }
    },
  async mounted() {
    let result = await http.get({
      url: "/api/index/other_advert"
    });
    
    this.advertotherdata =  result.data.article_list.product_info
    console.log(this.advertotherdata)
  }
    
}
</script>