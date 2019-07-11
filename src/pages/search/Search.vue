<template>
  <div class="search">
    <div class="search-header">
      <div class="search-input">
        <span class="yo-ico">&#xe650;</span>
        <input type="text" placeholder="Gucci包" v-model="search" />
      </div>
      <span @click="cancel">取消</span>
    </div>
    <div >

    </div>
    {{searchlist}}
    <div class="contain">
      <div class="hotsearch">
        <h2>热门搜索</h2>
        <ul>
          <li v-for="hot_search in hotsearch" :key="hot_search.keyword">{{hot_search.keyword}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import http from "../../utils/http";
import _ from 'loadsh'
export default {
  data() {
    return {
      hotsearch: "",
      search: "",
      searchlist:''
    };
  },
  methods: {
    cancel() {
      this.$router.back();
    },
  },
  computed: {
      
  },
  async mounted() {
    let result = await http.get({
      url: "/api/search/recommend_list"
    });
    this.hotsearch = result.data.hot_search;
  },
  watch: {
    search: async function(newsearch) {
      let result = await http.get({
        url: "/search/rpcsearchnew/getkey?pid=2&search=" + newsearch
      });
      this.searchlist = result.data
      console.log(result);
    }
  }
};
</script>
<style lang="stylus">
.search {
  .search-header {
    display: flex;
    height: 0.44rem;
    align-items: center;
    background: #fff;
    padding: 0 0.1rem;

    .search-input {
      flex: 1;
      margin: 0 0.11rem 0 0.08rem;
      height: 0.32rem;
      background: #f2f2f2;
      border-radius: 0.05rem;
      margin-right: 0.1rem;

      span {
        margin: 0 0.08rem;
      }

      input {
        width: 90%;
        background: transparent;
        border: none;
      }
    }
  }
}
</style>