<!-- 首页公共头部 -->
<template>
  <div class="HomeHeader">
    <div class="header">
      <input type="text" placeholder="请输入关键字" />
      <i></i>
    </div>
    <div class="login">
      <a>登录</a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.HomeHeader {
  width: 100%;
  height: 4.4rem;
  background-color: red;
  display: flex;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 999;
  align-items: center;
  .header {
    box-sizing: border-box;
    width: 85%;
    padding: 0 10px;
    input {
      width: 100%;
      text-indent: 1.5rem;
      height: 3rem;
      border-radius: 1.5rem;
      font-size: 1.2rem;
    }
  }
  .login {
    width: 15%;
    height: 4.4rem;
    a {
      width: 100%;
      display: inline-block;
      font-size: 1.6rem;
      text-align: center;
      line-height: 4.4rem;
      color: #fff;
    }
  }
}
</style>