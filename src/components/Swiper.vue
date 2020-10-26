<!--  -->
<template>
  <div class="Swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in getgoodsdetail"
          :key="item.goods_id"
        >
          <img :src="item.goods_img" alt="" />
        </div>
        <div class="swiper-slide">我是占位的</div>
        <div class="swiper-slide">别看，我也是占位的</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    getgoodsdetail: Array,
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
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang='less'>
.swiper-container {
  margin-top: 4.4rem;
  width: 100%;
  .swiper-wrapper {
    width: 100%;
    height: 37.5rem;
    img {
      width: 100%;
    }
  }
}
</style>
