<!-- 首页-首页 -->
<template>
  <div class="home-index">
    <div class="swipe">
      <swipe></swipe>
    </div>
    <QuckNav />
    <SwipeNews />
    <SwipeList :swipeListDatas="swipeListDatas" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "../../../components/Swipe";
import QuckNav from "../components/QuckNav";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuckNav,
    SwipeNews,
    SwipeList,
  },
  data() {
    //这里存放数据
    return {
      swipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅1",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅2",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅3",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅4",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅5",
        },
        {
          id: 6,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅6",
        },
        {
          id: 7,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅7",
        },
        {
          id: 8,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅8",
        },
        {
          id: 9,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅9",
        },
        {
          id: 10,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅10",
        },
      ],
    };
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
.nav-list {
  background: red;
  .ly-tabbar {
    background: red;
  }
}
</style>