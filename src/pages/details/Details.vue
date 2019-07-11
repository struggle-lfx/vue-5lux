<template>
  <div class="details">
    <div class="container">
      <Swiper></Swiper>
      <span @click="handclick" class="back"></span>
      <div class="price">
        <div class="price-first">
          <em>￥</em>
          <span>{{details.goods_info.product_price}}</span>
          <i>{{details.goods_info.market_price}}</i>
          <b @click="rankclick">
            {{details.user_price_info.rank_name}}
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
          <i></i>
        </div>
        <div class="pay-bottom">
          <ul>
            <li v-for="info in details.service_info" :key="info.status">
              <span></span>
              {{info.name}}
            </li>
          </ul>
          <i></i>
        </div>
      </div>
    </div>

    <footer>
      <ul>
        <li>
          <i></i>
          <b>客服</b>
        </li>
        <li>
          <span class="yo-ico">&#xe6cd;</span>
          <b>购物袋</b>
        </li>
        <li @click="addgoods">加入购物车</li>
        <li>立即购买</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import http from "../../utils/http";
import Swiper from "../../components/Swiper";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      details: ""
    };
  },
  components: {
    Swiper
  },
  async mounted() {
    let result = await http.get({
      url: "/api/good/goodsdetail/from=&mtoken=",
      params: {
        id: this.$route.params.id
      }
    });
    this.details = result.data;
    this.price = {
      nameone:
        this.details.rank[0].rank_name + ":" + this.details.rank[0].rank_price,
      nametwo:
        this.details.rank[1].rank_name + ":" + this.details.rank[1].rank_price,
      namethree:
        this.details.rank[2].rank_name + ":" + this.details.rank[2].rank_price
    };
  },
  methods: {
    handclick() {
      this.$router.back();
    },
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
    addgoods() {
      var idExist = this.$store.state.goodsList.find(item => {
        return item.id == "" + this.$route.params.id;
      });
      if (!idExist) {
        var data = {
          price: Math.floor(Math.random() * 100),
          stock: "件",
          number: 1,
          select: false,
          id: this.$route.params.id
        };
        this.$store.commit("addGoods", data);
        this.addSuccess = true;
      } else {
        return alert("已加入购物车");
      }
      console.log(this.$store);
    }
  }
};
</script>

<style lang="stylus" scoped>
.details {
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;

  .container {
    flex: 1;
    overflow: auto;

    .back {
      background: url('/image/back.png') no-repeat;
      position: absolute;
      top: 0.07rem;
      left: 0.13rem;
      z-index: 2000;
      width: 30px;
      height: 30px;
      background-size: 30px 30px;
    }

    .price {
      padding: 0.2rem 0.15rem 0.05rem;
      border-bottom: 1px solid #e8e8e8;

      .price-first {
        color: #9b885f;

        span {
          font-size: 0.24rem;
          margin-right: 0.05rem;
        }

        >i {
          font-size: 0.13rem;
          color: #999;
          text-decoration: line-through;
          margin-right: 0.1rem;
        }

        b {
          border: 0.05px solid #9b885f;
          padding: 0.05rem;
          height: 0.16rem;

          i {
            display: inline-block;
            width: 6px;
            height: 10px;
            background-size: 6px 10px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeBAMAAADTIlMfAAAAG1BMVEUAAACbiF+biF+biF+biF+biF+biF+biF+biF9gSelDAAAACHRSTlMAMO+fEM+/cFJyq8wAAAArSURBVBjTY2BJZIAC1yYBKKuiQxHKYu6AC1rQURDBQsjSQwjhc0RoIEIIANNeHKNe4jnzAAAAAElFTkSuQmCC');
            margin-top: 3px;
            background-repeat: no-repeat;
            margin-left: 5px;
          }
        }
      }

      .show {
        background: url('/image/explain.png');
        width: 0.2rem;
        height: 0.2rem;
        background-size: 0.2rem 0.2rem;
        display: inline-block;
        margin-left: 0.05rem;
        vertical-align: sub;
      }
    }

    .recommend {
      padding: 0.15rem 0.15rem 0.1rem;
      border-bottom: 0.1rem solid #f2f2f2;

      a {
        color: red;
        font-size: 0.12rem;
        height: 0.22rem;
        display: inline-block;
      }

      .pre {
        .logo {
          width: 20px;
          height: 20px;
          display: inline-block;
          background-image: url('/image/logo.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
          vertical-align: top;
        }

        b {
          font-size: 0.1rem;
          font-weight: normal;
          margin-left: 0.05rem;
          color: #999;
        }

        span {
          font-size: 0.1rem;
          color: #c8a985;
        }
      }
    }

    .pay {
      .pay-top {
        margin: 0.15rem 0.15rem 0;
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #e5e5e5;
        position: relative;

        b {
          background: #9b885f;
          color: #fff;
          font-size: 0.11rem;
          margin-right: 0.1rem;
          border-radius: 2px;
          padding: 0 0.05rem;
        }

        span {
          font-size: 0.14rem;
        }

        i {
          background: url('/image/pay.png');
          width: 0.22rem;
          height: 0.22rem;
          display: inline-block;
          background-size: 0.22rem 0.22rem;
          position: absolute;
          right: 0.15rem;
        }
      }

      .pay-bottom {
        margin: 0.15rem 0.15rem;
        position: relative;

        ul {
          display: flex;
          flex-wrap: wrap;
          width: 85%;

          li {
            padding: 0 0.1rem 0.1rem 0;

            span {
              background: url('/image/server.png');
              width: 0.15rem;
              height: 0.15rem;
              display: inline-block;
              background-size: 0.15rem 0.15rem;
            }

            span:nth-type(5) {
              background: url('/image/noserver.png');
            }
          }
        }

        i {
          background: url('/image/pay.png');
          width: 0.22rem;
          height: 0.22rem;
          display: inline-block;
          background-size: 0.22rem 0.22rem;
          position: absolute;
          right: 0.15rem;
          top: 50%;
        }
      }
    }
  }

  footer {
    height: 0.5rem;

    ul {
      height: 100%;
      border: 1px solid #ccc;
      text-align: center;

      li {
        float: left;
        line-height: 100%;
        vertical-align: middle;
        // border 1px solid #ccc
        height: 100%;
      }

      li:nth-child(1) {
        width: 20%;
      }

      li:nth-child(2) {
        width: 20%;
      }

      li:nth-child(3) {
        width: 30%;
      }

      li:nth-child(4) {
        width: 30%;
      }
    }
  }
}
</style>