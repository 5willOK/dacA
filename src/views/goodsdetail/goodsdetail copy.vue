<!-- goodsd -->
<template>
  <div class="goodsdetail">
    <Head :left="left" :title="title" :right="right" />
    <swiper :getgoodsdetail="getgoodsdetail" />
    <div class="content">
      <div class="price">000</div>
      <div class="btitle">
        大家看法看来dfdfddfdf安分局大家发了附件电放了骄傲的分厘卡机分类澳两地警方垃圾的十六客服捡垃圾法拉盛雕刻技法lads
      </div>
      <div v-html="this.$store.state.goodsdetail" class="detail"></div>
    </div>
    <div class="goodsfoot">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shoucang">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
      <div class="cart">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div class="addcart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/head";
import swiper from "@/components/Swiper";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    Head,
  },
  data() {
    //这里存放数据
    return {
      left: true,
      title: "商品详情",
      right: false,
      detail: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    getgoodsdetail() {
      return this.$store.state.goodsdetail;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    console.log(this.$route.query.goods_id);
    this.$store.dispatch("actgoodsdetail", {
      goods_id: this.$route.query.goods_id,
    });
  },
};
</script>
<style lang='less'>
.content {
  width: 100%;
  margin-top: 2rem;
  width: calc(100% - 10%);
  margin: 0 5%;
  .price {
    font-size: 1.4rem;
    margin-top: 2rem;
    color: red;
    &::before {
      content: "￥";
    }
  }
  .btitle {
    width: 100%;
    margin: 1rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 1.4rem;
  }
  .detail {
    width: 100px;
    img {
      width: 100%;
    }
  }
}
.goodsfoot {
  width: 100%;
  height: 4.9rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  text-align: center;

  z-index: 999;
  background: #fff;
  > div {
    font-size: 1.2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    i {
      font-size: 2rem;
    }
  }
  .addcart {
    flex: 2;
    background: #f55;
    color: #fff;
    font-size: 1.4rem;
  }
  .buy {
    flex: 2;
    background: #ff976a;
    color: #fff;
    font-size: 1.4rem;
  }
  .shoucang {
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef;
  }
}
</style>