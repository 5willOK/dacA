<!-- 选择登录 -->
<template>
  <div class="SelectLogin">
    <div class="touxiang">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1741476901,4013212021&fm=11&gp=0.jpg"
        alt=""
      />
    </div>
    <form>
      <h3>请选择登录方式</h3>
      <input type="button" value="手机登录" @click="toLogin" />
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
    toLogin() {
      this.$router.push("/logIn");
    },
  },
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
<style lang='less'>
.SelectLogin {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .touxiang {
    width: 20%;
    border-radius: 50%;
    border: #eee solid 6px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  form {
    width: 60%;
    text-align: center;
    h3 {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
    }
    input {
      width: 100%;
      height: 5rem;
      background: rgb(196, 37, 37);
      border: none;
    }
  }
}
</style>