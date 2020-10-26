<!-- 列表 -->
<template>
  <div class="list">
    <ul>
      <li v-for="data in getgoodslist" :key="data.goods_id">
        <router-link :to="'/goodsdetail?goods_id=' + data.goods_id">
          <img :src="data.goods_img" alt="" />
          <h3>{{ data.goods_name }}</h3>
          <p>{{ data.shop_price }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    getgoodslist: Array,
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
.list {
  ul {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 50%;
      margin: 0 3% 0 3%;
      width: calc(50% - 6%);
      img {
        width: 100%;
      }
      h3 {
        width: 90%;
        text-align: left;
        font-size: 1.2rem;
        color: #333;
        height: 4rem;
        line-height: 2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        width: 50%;
        font-size: 1.4rem;
        color: red;
        text-align: center;
        &::before {
          content: "￥";
        }
      }
    }
  }
}
</style>