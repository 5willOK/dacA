<!-- 右边 -->
<template>
  <div class="CategoryRight">
    <div class="Categorywarp2">
      <div class="ad">
        <a href="javascript:;">
          <img :src="this.ad" alt="" />
        </a>
      </div>
      <div v-for="item in categorylist" :key="item.cat_id">
        <h4>
          -<span>{{ item.cat_name }}</span
          >-
        </h4>
        <ul class="Categoryitem">
          <li v-for="item in item.child" :key="item.cat_id">
            <router-link :to="'/list?cat_id=' + item.cat_id">
              <img
                src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
                alt=""
              />
              <span>{{ item.cat_name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categorylist: [],
      ad: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      console.log(to.params.cid);
      this.getcategorydata(to.params.cid);
    },
  },
  //方法集合
  methods: {
    getcategorydata(cid) {
      // http://114.215.173.225:3000/api/v1/category/categorylist/858
      Axios(`http://localhost:3000/api/v1/category/categorylist/${cid}`).then(
        (res) => {
          // console.log(res);
          if (res.status == 200) {
            this.categorylist = res.data.data;
            var arr = this.$store.state.categoryitemdatas.filter((data) => {
              return data.category_id == cid;
            });
            this.ad = arr[0].menu_img;
            console.log(this.ad);
          }
        }
      );
    },
  },
  mounted() {
    // this.getcategorydata();
    this.getcategorydata("858");
    console.log(this.$store.state.categoryitemdatas);
    //console.log(this.$store.state.categoryitemdatas.menu_img);
  },
};
</script>
<style lang='less'>
.CategoryRight {
  width: 100%;
  .Categorywarp2 {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .ad {
      width: 100%;
      a {
        img {
          width: 90%;
          margin-left: 5%;
        }
      }
    }
    h4 {
      width: 100%;
      height: 2rem;
      font-size: 1.6rem;
      text-align: center;
      line-height: 2rem;
      margin: 1rem 0;
      font-weight: normal;
      color: #ccc;
    }
    .Categoryitem {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      //   justify-content: center;
      text-align: center;
      //   margin-left: 2.5rem;
      //   width: calc(100% - 2.5rem);
      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
        a {
          span {
            font-size: 1.4rem;
            font-weight: normal;
            display: block;
          }
        }
      }
    }
  }
}
</style>