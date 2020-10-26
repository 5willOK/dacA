<!-- 分类头部 -->
<template>
  <div class="category-header">
    <div class="upurl">
      <i class="iconfont icon-jiantou3" onclick="window.history.back()"></i>
    </div>
    <form>
      <input
        type="text"
        placeholder="请输入关键字"
        @focus="tosearch"
        class="keyword"
        ref="key"
      />
      <i class="iconfont icon-sousuo1"></i>
    </form>
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
  methods: {
    tosearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang='less'>
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  background-color: #666;
  .upurl {
    width: 15%;
    text-align: center;
    i {
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
    }
  }
  form {
    width: 80%;
    position: relative;
    text-align: center;
    input {
      width: 100%;
      height: 3rem;
      margin-top: 0.7rem;
      border-radius: 1.5rem;
      font-size: 1.2rem;
      text-indent: 2em;
    }
    i {
      position: absolute;
      top: 0;
      right: 0;
      width: 4.4rem;
      height: 4.4rem;
      line-height: 4.4rem;
    }
  }
}
</style>