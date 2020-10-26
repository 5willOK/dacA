<!--  -->
<template>
  <div class="cart">
    <Head :left="left" :title="title" :right="right" />
    <div class="content2" v-if="hascart">
      <div class="content-warp">
        <ul>
          <li v-for="(item, index) in cartlist" :key="item.goods_id">
            <div class="select" @click="changeselect(index)">
              <i
                class="iconfont icon-danxuankuangxuanzhong"
                style="color: red"
                v-if="item.goods_select"
              ></i>
              <i class="iconfont icon-danxuankuang" v-else></i>
            </div>
            <div class="msg">
              <div class="goodsimg">
                <img :src="item.goods_img" alt="" />
              </div>
              <div class="goodsmsg">
                <div class="goodstitle">
                  {{ item.goods_name }}
                </div>
                <div class="dogoods">
                  <div class="price">{{ item.shop_price }}</div>
                  <div class="donum">
                    <a href="jacvascript:;" @click="jian(index)">-</a>
                    <input
                      type="text"
                      v-model="item.goods_num"
                      @input="tochange(item.goods_num, index)"
                    />
                    <a href="jacvascript:;" @click="addnum(index)">+</a>
                  </div>
                  <div class="del" @click="del(index)">
                    <i class="dele iconfont icon-shanchu1"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cartfoot">
        <div class="selectall" @click="allselect">
          <i
            class="iconfont icon-danxuankuangxuanzhong"
            style="color: red"
            v-if="allcart"
          ></i>
          <i class="iconfont icon-danxuankuang" v-else></i>
          <span>全选</span>
        </div>
        <div class="totle">
          <span>合计:</span>
          <span class="num">{{ addallprice }}</span>
        </div>
        <div class="gobuy">
          去结算 (<span>{{ addgooodsnum }}</span
          >)
        </div>
      </div>
    </div>
    <router-link to="/home" class="nogoods" v-else>
      <i class="iconfont icon-gouwuche"></i>
      <span>你的购物车是空的，快去买点东西吧！！！</span>
    </router-link>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/head.vue";
import Footer from "@/components/footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
    Footer,
  },
  data() {
    //这里存放数据
    return {
      left: true,
      title: "购物车",
      right: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartlist() {
      return this.$store.state.carts;
    },
    allcart() {
      console.log(this.$store.state.is_allselect);
      return this.$store.state.is_allselect;
    },
    addallprice() {
      let allprice = 0;
      this.$store.state.carts.forEach((item) => {
        if (item.goods_select == true) {
          allprice = item.shop_price * item.goods_num + allprice;
          // allprice =allprice+item.shop_price;
        }
      });
      return allprice;
    },
    addgooodsnum() {
      let num = 0;
      this.$store.state.carts.forEach((item) => {
        if (item.goods_select == true) {
          num = Number(item.goods_num) + num;
          console.log(num);
          // allprice =allprice+item.shop_price;
        }
      });
      return num;
    },
    hascart() {
      if (this.$store.state.carts.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },

  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addnum(index) {
      this.$store.commit("addcarts", index);
    },
    jian(index) {
      this.$store.commit("jiancarts", index);
    },
    changeselect(index) {
      this.$store.commit("changeselect", index);
    },
    allselect() {
      this.$store.commit("allselect");
    },
    tochange(st, index) {
      if (this.$store.state.carts[index].goods_num <= 1) {
        console.log(1);

        this.$store.state.carts[index].goods_num = 1;
        localStorage.setItem("carts", JSON.stringify(this.$store.state.carts));
      } else {
        console.log(2);
        let numl = st.replace(/[^0-9]/g, "");
        let num = 0;
        num = Number(numl) + num;
        this.$store.state.carts[index].goods_num = num;
        localStorage.setItem("carts", JSON.stringify(this.$store.state.carts));
      }
    },
    del(index) {
      this.$store.state.carts.splice(index, 1);
      localStorage.setItem("carts", JSON.stringify(this.$store.state.carts));
    },
  },
  mounted() {
    // localStorage.setItem("is_allselect", "false");
  },
};
</script>
<style lang='less'>
// Body {
// scrollbar-arrow-color: #f4ae21; /**//*三角箭头的颜色*/
// scrollbar-face-color: #333; /**//*立体滚动条的颜色*/
// scrollbar-3dlight-color: #666; /**//*立体滚动条亮边的颜
// 色*/
// scrollbar-highlight-color: #666; /**//*滚动条空白部分的
// 颜色*/
// scrollbar-shadow-color: #999; /**//*立体滚动条阴影的颜
// 色*/
// scrollbar-darkshadow-color: #666; /**//*立体滚动条强阴
// 影的颜色*/
// scrollbar-track-color: #666; /**//*立体滚动条背景颜色*/
// scrollbar-base-color:#f8f8f8; /**//*滚动条的基本颜色*/
// Cursor:url(mouse.cur); /**//*自定义个性鼠标*/
// }
.cart {
  width: 100%;
  height: 100%;
}
.content2 {
  width: 100%;
  margin: 4.4rem 0 9.4rem 0;
  position: absolute;
  height: calc(100% - 13.8rem);
  top: 0rem;
  left: 0;
  right: 0;
  bottom: 0rem;
  .content-warp {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0rem;
      left: 0;
      right: 0;
      bottom: 0rem;
      overflow: auto;
      li {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .select {
          width: 8%;
        }
        .msg {
          width: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          .goodsimg {
            width: 25%;
            img {
              width: 100%;
            }
          }
          .goodsmsg {
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-left: 1.5rem;
            .goodstitle {
              font-size: 1.2rem;
              height: 4rem;

              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              line-height: 2rem;
            }
            .dogoods {
              width: 100%;
              margin-top: 1rem;
              height: 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              .price {
                width: 50%;
                font-size: 1.6rem;
                color: red;
                &::before {
                  content: "￥";
                }
              }
              .donum {
                width: 40%;
                a {
                  width: 2rem;
                  height: 2rem;
                  display: block;
                  background-color: #ccc;
                  float: left;
                  font-size: 1.4rem;
                  text-align: center;
                  line-height: 2rem;
                }
                input {
                  width: 3rem;
                  height: 2rem;
                  float: left;
                }
              }
              .del {
                width: 10%;
              }
            }
          }
        }
      }
    }
  }
}
.nogoods {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  i {
    font-size: 24rem;
  }
  span {
    font-size: 1.4rem;
    color: #555;
  }
}
.cartfoot {
  position: fixed;
  bottom: 4.9rem;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  z-index: 99;
  background: #fff;
  > div {
    width: 33%;
    text-align: center;
    line-height: 4.5rem;
    height: 4.5rem;
    font-size: 1.4rem;
  }
  .selectall {
    text-align: left;
  }
  .totle {
    .num {
      color: red;
      font-size: 1.6rem;
    }
  }
  .gobuy {
    background: red;
    color: #fff;
  }
}
</style>