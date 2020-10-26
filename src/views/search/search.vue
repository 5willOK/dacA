<!--  -->
<template>
  <div class="search">
    <div class="category-header head2">
      <div class="upurl">
        <i class="iconfont icon-jiantou3" onclick="window.history.back()"></i>
      </div>
      <form>
        <input
          type="text"
          placeholder="请输入关键字"
          class="keyword"
          v-model="keywords"
        />
        <i class="iconfont icon-sousuo1"></i>
      </form>
    </div>
    <div
      @click="
        getsearch();
        tolist();
      "
      class="searchkey"
    >
      搜索
    </div>
    <div class="content-search">
      <div class="title-now">
        <div>
          <span>最近搜索</span>
          <div class="iconfont icon-shanchu"></div>
        </div>
        <ul>
          <li>暂无</li>
          <li>暂无</li>
          <li>暂无</li>
          <li>暂无</li>
          <li>暂无</li>
          <li>暂无</li>
        </ul>
      </div>
      <div class="title-hot">
        <div>
          <span>热搜</span>
        </div>
        <ul>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getsearch() {
      this.$store.dispatch("getsearch", { keywords: this.keywords });
    },
    tolist() {
      this.$router.push("/searchlist?keywords=" + this.keywords);
    },
  },
  mounted() {},
};
</script>
<style lang='less'>
.head2 {
  width: 85%;
  color: #fff;
}
.searchkey {
  width: 15%;
  height: 4.4rem;
  font-size: 1.4rem;
  text-align: center;
  line-height: 4.4rem;
  background: #666;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  color: #fff;
}
.content-search {
  width: 100%;
  margin: 6rem 2rem 0 2rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title-now {
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.4rem;
    > div {
      display: flex;
      margin-bottom: 1.5rem;
      justify-content: space-between;
    }
    ul {
      width: 100%;
      li {
        width: 20%;
        float: left;
        background: #efefef;
        border-radius: 6px;
        text-align: center;
        height: 3rem;
        line-height: 3rem;
        margin: 0.5rem 0.5rem;
      }
    }
  }
  .title-hot {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.4rem;
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }
    ul {
      width: 100%;
      li {
        width: 20%;
        float: left;
        background: #efefef;
        border-radius: 6px;
        text-align: center;
        height: 3rem;
        line-height: 3rem;
        margin: 0.5rem 0.5rem;
      }
    }
  }
}
</style>