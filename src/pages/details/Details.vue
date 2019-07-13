<template>
  <div class="flux">
    <div class="details">
      <div class="container">
        <Swiper></Swiper>
        <span @click="handclick" class="back"></span>
        <div class="price">
          <div class="price-first">
            <em>￥</em>
            <span>{{product_price}}</span>
            <i>{{market_price}}</i>
            <b @click="rankclick">
              {{rank_name}}
              <i></i>
            </b>
          </div>
          <span>{{details.goods_info.tax_post_info}}</span>
          <i class="show"></i>
        </div>
        <div class="recommend">
          <a :href="details.editor_recommend.ad_url">
            <span>[{{details.editor_recommend.ad_type}}]</span>
            <i>{{details.editor_recommend.ad_name}}</i>
          </a>
          <div class="pre">
            <i class="logo"></i>
            <b>{{details.goods_info.send_time_name}}</b>
            <span>{{details.goods_info.send_store}}</span>
          </div>
        </div>
        <div class="pay">
          <div class="pay-top">
            <b>分期支付</b>
            <span>{{details.installment_str}}</span>
            <i @click="fenqi"></i>
          </div>
          <div class="pay-bottom">
            <ul>
              <li v-for="info in details.service_info" :key="info.name">
                <span></span>
                {{info.name}}
              </li>
            </ul>
            <i></i>
          </div>
        </div>
      </div>

      <!-- fotter底部caidanlan -->
      <footer>
        <ul>
          <li>
            <i class="yo-ico">&#xe610;</i>
            <b>客服</b>
          </li>
          <li>
            <i class="yo-ico">&#xe6cd;</i><span>{{goodsNumber}}</span>
            <b>购物袋</b>
          </li>
          <li @click="chosegoods">加入购物袋</li>
          <li>立即购买</li>
        </ul>
      </footer>
    </div>
    <!-- 加入购物袋 -->
    <div v-show="isshow" class="addgoods">
      <div class="pttitle">
        <div class="ptimg">
          <img :src="realdata.good_info.thumb" alt />
        </div>
        <div class="middle">
          <h4>{{realdata.good_info.sku_title}}</h4>
          <p>￥{{realdata.good_info.show_price}}</p>
          <i>{{realdata.sku.current[0].attr_name}}:</i>
          <b>{{realdata.sku.current[0].attr_val}}</b>
          <i>{{realdata.sku.current[1].attr_name}}:</i>
          <b>{{realdata.sku.current[1].attr_val}}</b>
        </div>
        <span class="yo-ico quxiao" @click="chosegoods">&#xe641;</span>
      </div>
      <!-- 颜色大小 -->

      <div class="size">
        <h4>{{realdata.sku.all[0].attr_name}}</h4>
        <span
          v-for="realsize in realdata.sku.all[0].attr_val"
          :key="realsize.attr_value_id"
        >{{realsize.attr_value}}</span>
      </div>
      <div class="size">
        <h4>{{realdata.sku.all[1].attr_name}}</h4>
        <span
          v-for="realsize in realdata.sku.all[1].attr_val"
          :key="realsize.attr_value_id"
        >{{realsize.attr_value}}</span>
      </div>
      <div class="count">
        <h4>数量</h4>
        <span class="left" @click="reduceCount">—</span>
        <span class="center">{{productCount}}</span>
        <span class="right" @click="addCount">+</span>
      </div>
      <div class="button" @click="addgoods">确定</div>
    </div>
    <!-- 分期详情 -->
    <div class="mengceng" v-show="fenqiIsshow | isshow"></div>
    <div v-show="fenqiIsshow" class="fenqi" >
      <h2>分期详情</h2>
      <span class="yo-ico quxiao" @click="fenqi">&#xe641;</span>
      <ul>
        <li v-for="(installment_info,index) in details.installment_info" :key="index">
          <h3>{{installment_info.installment_desc}}</h3>
          <p>{{installment_info.service_charge_desc}}</p>
        </li>
      </ul>
      <div @click="fenqi" class="confim">确定</div>

    </div>
  </div>
</template>

<script>
import http from "../../utils/http";
import Swiper from "../../components/Swiper";
import { MessageBox } from "mint-ui";
import{mapGetters} from 'vuex'
export default {
  data() {
    return {
      details: "",
      isshow: false,
      fenqiIsshow:false,
      realdata: {},
      productCount: 1,
      product_price: "",
      market_price: "",
      rank_name: ""
    };
  },
  components: {
    Swiper
  },
  async mounted() {
    //获取详情页的数据
    let result = await http.get({
      url: "/api/good/goodsdetail/from=&mtoken=",
      params: {
        id: this.$route.params.id
      }
    });
    this.details = result.data;
    console.log(result.data.installment_info)
    this.product_price = result.data.goods_info.product_price;
    this.market_price = result.data.goods_info.market_price;
    this.rank_name = result.data.user_price_info.rank_name;
    //获取红卡价的信息
    this.price = {
      nameone:
        this.details.rank[0].rank_name + ":" + this.details.rank[0].rank_price,
      nametwo:
        this.details.rank[1].rank_name + ":" + this.details.rank[1].rank_price,
      namethree:
        this.details.rank[2].rank_name + ":" + this.details.rank[2].rank_price
    };
    //获取加入购物车的详细信息
    let message = await http.get({
      url: "/api/good/goodsdetail_sku/",
      params: {
        product_id: this.$route.params.id
      }
    });
    this.realdata = message.data;
  },
  methods: {
    //返回按钮
    handclick() {
      this.$router.back();
    },
    //红卡价的弹窗
    rankclick() {
      MessageBox({
        title: "会员价",
        message:
          this.price.nameone +
          "</br>" +
          this.price.nametwo +
          "</br>" +
          this.price.namethree,
        confirmButtonText: "了解"
      });
    },
    addCount() {
      this.productCount++;
    },
    reduceCount() {
      if (this.productCount === 1) {
        return;
      }
      this.productCount--;
    },

    //加入购物车
    addgoods() {
      var data = {
        price: this.product_price,
        productCount: this.productCount,
        id: this.$route.params.id
      };
      this.$store.commit("addTocar", data);
      //加入购物车1秒后，消失
      setTimeout(() => {
        this.isshow = !this.isshow;
      }, 1000);

      console.log(this.$store.state);
    },

    chosegoods() {
      this.isshow = !this.isshow;
    },
    fenqi(){
      this.fenqiIsshow = !this.fenqiIsshow
    }
  },
  computed: {
    ...mapGetters([
      'goodsNumber'
    ])
  },
};
</script>

<style lang="stylus" scoped>
.flux
  height 100%

  .details
    background #fff
    display flex
    flex-direction column
    height 100%

    .container
      flex 1
      overflow auto

      .back
        background url('/image/back.png') no-repeat
        position absolute
        top 0.07rem
        left 0.13rem
        z-index 2000
        width 30px
        height 30px
        background-size 30px 30px

      .price
        padding 0.2rem 0.15rem 0.05rem
        border-bottom 1px solid #e8e8e8

        .price-first
          color #9b885f

          span
            font-size 0.24rem
            margin-right 0.05rem

          >i
            font-size 0.13rem
            color #999
            text-decoration line-through
            margin-right 0.1rem

          b
            border 0.05px solid #9b885f
            padding 0.05rem
            height 0.16rem

            i
              display inline-block
              width 6px
              height 10px
              background-size 6px 10px
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeBAMAAADTIlMfAAAAG1BMVEUAAACbiF+biF+biF+biF+biF+biF+biF+biF9gSelDAAAACHRSTlMAMO+fEM+/cFJyq8wAAAArSURBVBjTY2BJZIAC1yYBKKuiQxHKYu6AC1rQURDBQsjSQwjhc0RoIEIIANNeHKNe4jnzAAAAAElFTkSuQmCC')
              margin-top 3px
              background-repeat no-repeat
              margin-left 5px

        .show
          background url('/image/explain.png')
          width 0.2rem
          height 0.2rem
          background-size 0.2rem 0.2rem
          display inline-block
          margin-left 0.05rem
          vertical-align sub

      .recommend
        padding 0.15rem 0.15rem 0.1rem
        border-bottom 0.1rem solid #f2f2f2

        a
          color red
          font-size 0.12rem
          height 0.22rem
          display inline-block

        .pre
          .logo
            width 20px
            height 20px
            display inline-block
            background-image url('/image/logo.png')
            background-size 20px 20px
            background-repeat no-repeat
            vertical-align top

          b
            font-size 0.1rem
            font-weight normal
            margin-left 0.05rem
            color #999

          span
            font-size 0.1rem
            color #c8a985

      .pay
        .pay-top
          margin 0.15rem 0.15rem 0
          padding-bottom 0.15rem
          border-bottom 1px solid #e5e5e5
          position relative

          b
            background #9b885f
            color #fff
            font-size 0.11rem
            margin-right 0.1rem
            border-radius 2px
            padding 0 0.05rem

          span
            font-size 0.14rem

          i
            background url('/image/pay.png')
            width 0.22rem
            height 0.22rem
            display inline-block
            background-size 0.22rem 0.22rem
            position absolute
            right 0.15rem

        .pay-bottom
          margin 0.15rem 0.15rem
          position relative

          ul
            display flex
            flex-wrap wrap
            width 85%

            li
              padding 0 0.1rem 0.1rem 0

              span
                background url('/image/server.png')
                width 0.15rem
                height 0.15rem
                display inline-block
                background-size 0.15rem 0.15rem

              span:nth-type(5)
                background url('/image/noserver.png')

          i
            background url('/image/pay.png')
            width 0.22rem
            height 0.22rem
            display inline-block
            background-size 0.22rem 0.22rem
            position absolute
            right 0.15rem
            top 50%

    footer
      height 0.5rem

      ul
        height 100%
        display flex
        justify-content space-around
        align-items center
        border 1px solid #ccc
        text-align center

        li:nth-child(1)
          width 20%
          border-right 1px solid #ccc
          display flex
          flex-direction column
          i 
            font-size .2rem
          b
            font-size .11rem
            font-weight normal 


        li:nth-child(2)
          width 20%
          display flex
          flex-direction column
          position relative
          b
            font-size .11rem
            font-weight normal 
          i 
            font-size .2rem
          span
            position: absolute;
            display: inline-block;
            width: 15px;
            height: 15px;
            border: 1px solid #fff;
            box-sizing: border-box;
            border-radius: 50%;
            background: #f33;
            color: #fff;
            font-size: 10px;
            text-align: center;
            line-height: 15px;
            left: 37px;
            top: 5px;

        li:nth-child(3)
          width 30%
          background #ccb27f
          color #fff
          line-height 0.5rem

        li
          height 100%

        li:nth-child(4)
          width 30%
          background #9b885f
          color #fff
          line-height 0.5rem

  .addgoods
    width 100%
    height 4.8rem
    background #fff
    position absolute
    bottom 0
    z-index 2000

    .pttitle
      height 0.9rem
      background #fff
      position relative
      border-bottom 1px solid #e5e5e5

      .ptimg
        width 1rem
        height 1rem
        position absolute
        left 0.15rem
        bottom 0.15rem
        border 0.01rem solid #ccc
        background #fff
        text-align center

        img
          height 100%

      .middle
        position absolute
        left 1.25rem

        h4
          font-size 0.12rem
          padding 0.15rem 0 0.07rem
          color #333
          line-height 0.12rem

        p
          color #9b885f

        b
          font-size 0.12rem
          color #999
          font-weight normal
          margin-right 0.05rem

        i
          font-size 0.12rem
          color #999

      .quxiao
        position absolute
        right 5px

    .size
      height 0.85rem
      padding-left 0.15rem
      border-bottom 0.05px solid #ccc

      h4
        padding 0.16rem 0 0.1rem
        font-weight normal
        font-size 0.14rem
        line-height 0.14rem

      span
        display inline-block
        border 1px solid #9b885f
        width 20%
        height 0.3rem
        text-align center
        line-height 0.3rem
        margin-right 0.1rem
        border-radius 0.05rem
        color #9b885f

    .count
      h4
        padding 0.16rem 0 0.1rem
        font-weight normal
        font-size 0.14rem
        line-height 0.14rem

      span
        width 0.3rem
        height 0.3rem
        border 0.05px solid #333
        display inline-block
        text-align center
        line-height 0.3rem
        margin-right 0.02rem

      .center
        width 0.48rem

      .right
        font-size 0.2rem

    .button
      background #9b885f
      height 0.5rem
      width 100%
      text-align center
      position absolute
      bottom 0
      font-size 0.14rem
      line-height 0.5rem
      color #fff
  .fenqi
    position absolute
    bottom 0 
    background #fff 
    width 100%
    z-index 3
    height 3.4rem 
    h2
      border-bottom 0.05px solid #e5e5e5
      height .5rem
      line-height .5rem
      text-align center
    .quxiao
      position absolute
      right .16rem
      top .12rem
      font-size .14rem
    ul 
      margin-left .15rem
      li
        height .46rem
        margin .1rem 0 0 .15rem
        border-bottom 0.05px solid #e5e5e5 
        h3 
          font-weight normal 
        p 
          font-size .1rem
          color #999

    .confim
      background #9b885f
      height .5rem
      line-height .5rem
      color #fff
      font-size .16rem
      text-align center
      position absolute
      bottom 0
      width 100%
  //蒙层
  .mengceng
    height 100%
    width 100%
    background black
    position absolute
    z-index 2
    opacity 0.5
    bottom 0   
</style>