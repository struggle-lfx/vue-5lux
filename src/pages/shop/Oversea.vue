<template>
    <div class="oversea">
      <h2>{{oversea.title}}</h2>
      <h3>——{{oversea.title_en}}——</h3>
      <ul>
        <li v-for="oversea in overseadata" :key="oversea.ad_id">
          <img :src="oversea.ad_code" />
          <p>{{oversea.ad_name}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      overseadata:'',
      oversea:''
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/home_all_info"
    });

    this.overseadata = result.data.oversea_recommend.list
    this.oversea = result.data.oversea_recommend
    console.log(this.oversea)

  }
};
</script>
<style lang="stylus" scoped>
div 
  h2 
    text-align center
    font-size 16px
  

  h3 
    text-align center
    font-weight normal
    margin-bottom 8px
  
  ul 
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-between
    position relative

    li 
      width 49%
      margin-bottom 5px
      position relative

      img 
        width 100%
      

      p 
        position absolute
        left 0
        bottom 0
        color #fff
        text-align center
        width 100%
        font-size 18px
        background -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, 0.7)));
      
    

    li:first-child 
      width 100%
      img 
        width: 100%
      p 
        font-size: 24px
    li:nth-child(2)
        position absolute
        left 0
        bottom 0

// .oversea
//     ul
//         position relative
//         li:nth-child(2)
//             position absolute
//             left 0
//             bottom 0

</style>
