<!-- 轮播图 -->
<template>
  <div class="swipe">
    <mt-swipe
      :auto="4000"
      :show-indicators="true"
      :default-index="0"
      :continuous="true"
    >
      <mt-swipe-item v-for="item in homeSwipe" :key="item.swipe_id">
        <img :src="item.swipe_img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { getHomeSwipe } from "@/api/index";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  computed: {
    homeSwipe() {
      return this.$store.state.homeSwipe;
    },
  },
  methods: {},
  mounted() {
    //console.log(getHomeSwipe().then((res) => console.log(res)));
    this.$store.dispatch("actgetHomeSwipe");
    console.log(this.$store.state.homeSwipe);
  },
};
</script>
<style lang='less'>
.swipe {
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  height: 12rem;

  margin-top: 9rem;
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>