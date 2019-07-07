<template>
  <div class="contain">
    <div class="single">
      <a :href="advertdata.new_register[0].ad_link">
        <img :src="advertdata.new_register[0].ad_code" alt srcset />
      </a>
    </div>
    <ul class="vip_member">
      <li v-for="vip_member in advertdata.vip_member" :key="vip_member.ad_id">
        <img :src="vip_member.ad_code" alt srcset />
      </li>
    </ul>
    <div class="single">
      <a :href="advertdata.five_example.ads_info.ad_link">
        <img :src="advertdata.five_example.ads_info.ad_code" alt srcset />
      </a>
    </div>
    <div>
      <ul v-for="article_list in advertdata.article_list" :key="article_list.ads_info.ad_id">
        111
        <img :src="article_list.ads_info.ad_code" alt srcset />
        <li v-for="product_info in article_list.ads_info.product_info" :key="product_info.id">
          <img :src="product_info.product_thumb" alt srcset />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      advertdata: [],
      goodsitem: []
    };
  },
  async mounted() {
    let result = await http.get({
      url: "/api/index/other_advert"
    });
    //console.log(JSON.stringify(result.data))
    this.advertdata = result.data;
    // ss
    console.log(result.data.article_list);
  }
};
</script>
<style lang="stylus" scoped>
.contain 
  .single 
    width 100% 
    a 
      width 100%
      img 
        width 100%
  .vip_member
    width 100%
    display flex
    flex-wrap wrap
    li:nth-child(n+2)
      width 25%
    img 
      width 100%
</style>