<template>
  <div>
    <ul v-for="advertitem in advertotherdata" :key="advertitem.ad_id">
      <li v-for="advertlist in advertitem" :key="advertlist.ad_id">
        <img :src="advertlist.ad_code" />
        <AdverSmall v-bind:adver-small="adver-small"></AdverSmall>
      </li>
    </ul>
  </div>
</template>
<script>
import http from "../../utils/http";
import AdverSmall from "./adver-small";
export default {
  data() {
    return {
      advertotherdata: []
    };
  },
  components: {
    AdverSmall
  },
  async mounted() {
    let result = await http.get({
      url: "/api/index/other_advert"
    });

    this.advertotherdata = result.data.article_list;
    console.log(this.advertotherdata);
  }
};
</script>