<template>
  <div>
    <h2>{{fashion.title}}</h2>
    <h3>——{{fashion.title_en}}——</h3>
    <ul>
      <li v-for="fashion in fashiondata" :key="fashion.ad_id">
        <img :src="fashion.ad_code" />
        <p>{{fashion.ad_name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  data() {
    return {
      fashiondata: "",
      fashion: ""
    };
  },

  async mounted() {
    let result = await http.get({
      url: "/api/shop/home_all_info"
    });

    let data = result.data.fashion_video;
    let arr = [];
    for (let i in data) {
      arr.push(data[i]);
    }
    this.fashiondata = result.data.fashion_video.list.reverse();
    this.fashion = result.data.fashion_video;
    console.log(this.fashiondata);
    // let aaa = result.data.slice(1);
    // console.log(result);
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

        li 
            width 49%
            margin-bottom 5px
            position relative
            img 
                width 100%  

            p 
                position: absolute;
                left: 0;
                bottom: 0;
                color: #fff;
                text-align: center;
                width: 100%;
                font-size: 18px;
                background: -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, 0.7)));


        li:first-child 
            width 100%
            img 
                width 100%
            p
                font-size 24px

</style>
