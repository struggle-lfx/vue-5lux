<template>
  <ul>
    <li v-for="adving in advisingdata" :key="adving.ad_id">
      <a :href="adving.ad_link">
      <img :src="adving.ad_code" />
      </a>
    </li>
  </ul>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      advisingdata: []
    };
  },
  async mounted() {
    let result = await http.get({
      url: "/api/index/columu_recommend"
    });
    this.advisingdata = result.data;
  }
};
</script>
<style lang="stylus" scoped>
ul 
  width 100%
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content space-between
  li 
    width 49%
    padding-bottom .07rem
    img 
        width 100%
</style>