<!-- 左边 -->
<template>
  <div class="CategooryLeft">
    <div class="Categorywarp">
      <ul class="Categoryitem">
        <li
          class="active"
          v-for="item in this.$store.state.categoryitemdatas"
          :key="item.category_id"
        >
          <router-link :to="'/category/' + item.category_id">
            {{ item.menu_name }}
          </router-link>
        </li>
      </ul>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getdata() {
      //http://114.215.173.225:3000/api/v1/category  'http://localhost:3000/api'
      Axios.get("http://localhost:3000/api/v1/category").then((res) => {
        // console.log(res);
        if (res.data.status == 200) {
          this.$store.state.categoryitemdatas = res.data.data;
        }
      });
    },
  },
  mounted() {
    this.getdata();
    console.log(this.$store.state.categoryitemdatas);
  },
};
</script>
<style lang='less' scopred>
.CategooryLeft,
.Categorywarp {
  width: 8.4rem;
  height: 100%;
  background-color: #ccc;
  .Categoryitem {
    width: 8.4rem;
    height: 100%;
    overflow-y: scroll;
    li {
      width: 8.4rem;
      height: 3.8rem;
      line-height: 3.8rem;
      text-align: center;
      font-size: 1.4rem;
    }
    .router-link-active {
      display: block;
      background-color: #fff;
      color: red;
    }
  }
}
</style>