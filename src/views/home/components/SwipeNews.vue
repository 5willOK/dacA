<!-- SwipeNews -->
<template>
  <div class="SwipeNews">
    <div class="logo">
      <img :src="imgtitle" alt="" />
      <!-- <img src="../../../assets/images/news-title.png" alt="" /> -->
    </div>
    <div class="Newslist">
      <ul ref="news" :class="{ 'news-list': true, flags: flag == true }">
        <li v-for="item in newlistdata" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

// import img from "@/assets/images/news-title.png";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgtitle: require("../../../assets/images/news-title.png"),
      flag: false,
      timer: "",
      newlistdata: [
        {
          id: 1,
          title: "列表1",
        },
        {
          id: 2,
          title: "列表2",
        },
        {
          id: 3,
          title: "列表3",
        },
        {
          id: 4,
          title: "列表4",
        },
        {
          id: 5,
          title: "列表5",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {
    scrollnews() {
      //   console.log(this.$refs);
      var oul = this.$refs.news; //通过ref属性获得ul节点
      this.flag = !this.flag;
      oul.style.marginTop = "-5rem";

      var that = this;
      setTimeout(function () {
        that.newlistdata.push(that.newlistdata[0]);
        that.newlistdata.shift();
        that.flag = !that.flag;
        oul.style.marginTop = "0";
      }, 1000);
    },
  },
  mounted() {
    // console.log(1);
    this.timer = setInterval(this.scrollnews, 2000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang='less'>
.SwipeNews {
  width: 100%;
  height: 5rem;
  display: flex;
  width: calc(100% - 20px);
  margin: 0 10px;
  img {
    height: 3rem;
    margin-top: 1rem;
  }
  .Newslist {
    margin-left: 2rem;
    overflow: hidden;

    li {
      height: 5rem;
      line-height: 5rem;
      text-align: left;
      font-size: 1.4rem;
    }
  }
  .flags {
    transition: all 1s;
  }
}
</style>