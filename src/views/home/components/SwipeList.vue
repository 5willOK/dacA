<!-- 搏动滚动 -->
<template>
  <div class="SwipeList">
    <div class="swipelist-warp">
      <div class="swiplist-warp-warp" :style="obj2">
        <div
          class="swipelist-item"
          v-for="item in swipeListDatas"
          :key="item.id"
        >
          <img :src="item.imgsrc" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="obj"></div>
    </div>
    <div class="temp"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    swipeListDatas: Array,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      screen: document.documentElement.clientWidth || document.body.clientWidth,
      scrollcontentW: 1100,
      barbg: 100,
      barW: 20,
      startX: 0,
      endX: 0,
      barmoveW: 0,
      content: 0, //内容滚动的距离
      tempcontent: 0, //临时储存上一次滚动的left值
    };
  },
  //监听属性 类似于data概念
  computed: {
    obj() {
      return {
        width: `${this.barW}px`,
        left: `${this.barmoveW}px`,
      };
    },
    obj2() {
      return {
        left: `${this.tempcontent}px`,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   计算进度条的宽度
    barWidth() {
      this.barW = (this.screen * this.barbg) / this.scrollcontentW;
    },
    // 找到触摸开始的位置，以屏幕大小为主
    touchstart(e) {
      console.log((this.startX = e.touches[0].pageX));
      this.startX = e.touches[0].pageX;
    },
    touchmove(e) {
      let movecontentW = e.touches[0].pageX - this.startX;
      //   console.log(movecontentW);  从触摸开始移动到放开手的位置

      //取消overflow的scroll,使用计算数值返回数据改变style样式来移动内容
      //this.tempcontent为本次触摸移动距离movecontentW加上已经被移动至左侧的
      //距离this.content，第一次this.content为0
      this.tempcontent = movecontentW + this.content; //内容共移动的距离
      console.log(this.tempcontent);
      console.log(this.content);

      //首先使用进度条移动距离比上内容触摸移动的距离等于
      // 进度条背景比上内容长度求出进度条移动距离，
      // 然后加上上次进度条移动后的距离长度求出本次进度条的移动位置
      this.barmoveW =
        -(movecontentW * this.barbg) / this.scrollcontentW + this.endX;
      //   console.log(this.barmoveW);

      //   判断边界
      if (this.barmoveW <= 0) {
        this.barmoveW = 0;
      } else if (this.barmoveW >= this.barbg - this.barW) {
        this.barmoveW = this.barbg - this.barW;
      }

      if (this.tempcontent >= 0) {
        //按着向右滑动为正值
        this.tempcontent = 0;
      } else if (this.tempcontent <= this.screen - this.scrollcontentW) {
        this.tempcontent = this.screen - this.scrollcontentW;
      }
    },
    touchend() {
      this.endX = this.barmoveW; //记录上次移动结束后进度条已经移动的位置
      //在移动结束后将已经移动的内容距离存如临时数据this.content
      this.content = this.tempcontent;
      console.log(this.content);
    },
    bindlisten() {
      this.$el.addEventListener("touchstart", this.touchstart, false);
      this.$el.addEventListener("touchmove", this.touchmove, false);
      this.$el.addEventListener("touchend", this.touchend, false);
    },
  },

  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.barWidth();
    this.bindlisten();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipelist-warp {
  width: 100%;
  height: 19rem;
  background: yellowgreen;
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: 0;
  .swiplist-warp-warp {
    width: 110rem;
    height: 19rem;
    position: absolute;
    top: 0;
    left: 0;
    .swipelist-item {
      width: 11rem;
      height: 19rem;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      img {
        width: 10rem;
      }
    }
  }
}
.swipelist-warp::-webkit-scrollbar {
  display: none;
}
.progress {
  width: 100px;
  height: 5px;
  background-color: #999;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  .progress-bar {
    width: 20px;
    height: 5px;
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.temp {
  width: 100%;
  height: 50rem;
  background-color: #ccc;
}
</style>