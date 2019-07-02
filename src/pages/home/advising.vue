<template>


  
</template>
<script>
import http from '../../utils/http'
export default {
    async mounted() {
    let result =  await http.get({
      url:'/index/columu_recommend'
    })
    //this.swipperdata = result.data  
    console.log(result)
    },
}
</script>