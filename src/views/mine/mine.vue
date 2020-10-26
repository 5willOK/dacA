<!--  -->
<template>
  <div class="mine">
    <div>
      <SelectLogin />
    </div>
    <Footer v-if="!this.$route.path.includes('mine')"></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/footer.vue";
import SelectLogin from "../login/SelectLogin";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    SelectLogin,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      console.log(to.params);
    },
  },
  //方法集合
  methods: {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$route.path.includes("mine");
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