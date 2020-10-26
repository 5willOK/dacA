<!--  -->
<template>
  <div class="head">
    <div
      class="class iconfont icon-jiantou3"
      v-if="left"
      onclick="window.history.back()"
    ></div>
    <div class="title">{{ title }}</div>
    <div class="right" v-if="right">icon</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    left: Boolean,
    title: String,
    right: Boolean,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style lang='less'>
.head {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  line-height: 4.4rem;
  background: #fff;
  z-index: 999;
  .back {
    width: 10%;
    height: 4.4rem;
  }
  .title {
    width: 80%;
    font-size: 1.4rem;
    text-align: center;
    line-height: 4.4rem;
    height: 4.4rem;
  }
  .left {
    width: 10%;
    height: 4.4rem;
  }
}
</style>