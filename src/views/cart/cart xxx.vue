<!--  -->
<template>
  <div class="cart">
    <Head :left="left" :title="title" :right="right" />
    <div class="content2">
      <div class="content-warp">
        <ul>
          <li v-for="(item, index) in cartlist" :key="item.goods_id">
            <div class="select" @click="selectFn(index)">
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
                    <a href="jacvascript:;" @click="jian(item, index)">-</a>
                    <input type="text" v-model="item.goods_num" value="1" />
                    <a href="jacvascript:;" @click="addnum(item, index)">+</a>
                  </div>
                  <div class="del">
                    <i class="dele iconfont icon-shanchu1"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartfoot">
      <div class="selectall">
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          style="color: red"
          v-if="true"
        ></i>
        <i class="iconfont icon-danxuankuang" v-else></i>
        <span>全选</span>
      </div>
      <div class="totle">
        <span>合计:</span>
        <span class="num">0</span>
      </div>
      <div class="gobuy">去结算 (<span>0</span>)</div>
    </div>
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
      A: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartlist() {
      // console.log(JSON.parse(localStorage["carts"]));
      return this.$store.state.carts;
    },
    // allselect() {
    //   var isallselect = this.A.every((item) => {
    //     return item.goods_select == true;
    //   });
    //   console.log(isallselect);
    //   return isallselect;
    // },
  },

  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // changeselect(item, index) {
    //   console.log(333);
    //   this.A[index].goods_select = !this.A[index].goods_select;
    //   console.log(this.A[index].goods_select);
    //   localStorage["carts"] = JSON.stringify(this.A);
    // },
    addnum(item, index) {
      item.goods_num++;
      this.A[index].goods_num = item.goods_num;
      JSON.parse(localStorage["carts"])[index].goods_num = item.goods_num;
      localStorage.setItem("carts", JSON.stringify(this.A));
      // this.$store.commit("addcarts", index);
    },
    jian(item, index) {
      if (item.goods_num == 1) {
        item.goods_num == 1;
        console.log("必须买一件");
      } else {
        item.goods_num--;
        this.A[index].goods_num = item.goods_num;
        // JSON.parse(localStorage["carts"])[index].goods_num = item.goods_num;
        localStorage.setItem("carts", JSON.stringify(this.A));
      }

      // this.$store.commit("addcarts", index);
    },
    selectFn(index) {
      // sel = !sel;
      this.A[index].goods_select = !this.A[index].goods_select;
      localStorage.setItem("carts", JSON.stringify(this.A));
    },
  },
  mounted() {
    // this.addnum();
    this.A = JSON.parse(localStorage["carts"]);
  },
};
</script>
<style lang='less'>
.content2 {
  width: 100%;
  .content-warp {
    width: 100%;
    margin-top: 4.5rem;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 10rem;
        background: lightgreen;
        display: flex;
        // flex-direction: column;
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
.cartfoot {
  position: absolute;
  bottom: 4.9rem;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
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