<!-- 列表 -->
<template>
  <div class="Categorylist">
    <CategoryHead />
    <List :getgoodslist="getgoodslist" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHead from "./CategoryHead";
import List from "@/components/list";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    List,
    CategoryHead,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    getgoodslist() {
      return this.$store.state.goodslists;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // getquery() {
    //   console.log(this.$route.query.cat_id);
    //   let cid = this.$route.query.cat_id;
    //   Axios(`/api/v1/category/goodslist?cat_id=${cid}`).then((res) => {
    //     console.log(res);
    //     if (res.data.status == 200) {
    //       this.listdata = res.data.data;
    //     }
    //   });
    // },
  },
  mounted() {
    // this.getquery();
    // console.log(this.$route.query.cat_id);
    this.$store.dispatch("actgoodslists", { cat_id: this.$route.query.cat_id });
    // this.$store.dispatch("actgoodslists", { cat_id: this.$route.query.cat_id });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
</style>