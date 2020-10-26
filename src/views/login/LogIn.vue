<!-- logIn -->
<template>
  <div class="login">
    <div class="touxiang">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1741476901,4013212021&fm=11&gp=0.jpg"
        alt=""
      />
    </div>
    <form>
      <div class="changetab">
        <input
          type="button"
          value="短信登录"
          :class="{ active: changeTab }"
          @click="changetabFn"
        />
        <input
          type="button"
          value="密码登录"
          :class="{ active: !changeTab }"
          @click="changetabFn"
        />
      </div>
      <div class="tabl" v-if="!changeTab">
        <section class="phone">
          <input type="text" placeholder="请输入手机号" v-model="phone" />
          <div class="phonecaptcha" @click="getphonecaptcha" v-if="flag">
            发送验证码
          </div>
          <div class="timeout" v-else>{{ timeNum }}秒</div>
        </section>
        <section>
          <input type="text" placeholder="请输入验证码" />
        </section>
      </div>
      <div class="tabr" v-else>
        <section>
          <input
            type="text"
            placeholder="用户名/邮箱/手机号"
            v-model="user_name"
          />
        </section>
        <section>
          <input
            type="text"
            placeholder="密码"
            v-if="showpass"
            v-model="pass"
          />
          <input type="password" v-else v-model="pass" />
          <i
            class="iconfont icon-xianshi"
            v-if="showpass"
            @click="showpassFn"
          ></i>
          <i class="iconfont icon-yincang" v-else @click="showpassFn"></i>
        </section>
        <section>
          <input type="text" placeholder="验证码" v-model="captcha" />
          <img :src="imgsrc" alt="" @click="getcaptcha" />
        </section>
      </div>
      <input type="button" value="登录" class="loginbtn" @click="login" />
    </form>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { userlogin } from "@/api/login";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      changeTab: false,
      timeNum: 0,
      phone: "",
      timer: "",
      flag: true,
      showpass: false,
      captcha: "",
      user_name: "",
      pass: "",
      imgsrc: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    identifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changetabFn() {
      this.changeTab = !this.changeTab;
    },
    getphonecaptcha() {
      if (this.identifyPhone) {
        this.flag = !this.flag;
        this.timeNum = 60;
        this.timer = setInterval(() => {
          this.timeNum--;
          if (this.timeNum == 0) {
            this.flag = !this.flag;
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 3000,
        });
      }
    },
    showpassFn() {
      this.showpass = !this.showpass;
    },
    getcaptcha() {
      this.imgsrc =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
    async login() {
      if (!this.user_name) {
        Toast("请输入用户名/邮箱/手机号！");
      } else if (!this.pass) {
        Toast("请输入密码！");
      } else if (!this.captcha) {
        Toast("请输入验证码！");
      }
      const result = await userlogin(this.user_name, this.pass, this.captcha);
      console.log(result);
      if (result.status == 500) {
        this.getcaptcha();
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.err_code == 0) {
        this.getcaptcha();
        Toast(result.msg);
      }
      if (result.status == 200) {
        this.$router.push("/home");
      }
    },
  },
  mounted() {
    console.log(this.$route);
    this.getcaptcha();
  },
};
</script>
<style lang='less'>
.login {
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
    width: 85%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .changetab {
      width: 100%;
      display: flex;
      justify-content: center;
      input {
        width: 45%;
        height: 4rem;
        background: red;
        border: none;
        margin: 1rem 1rem;
      }
      .active {
        background: #ccc;
      }
    }
    .tabl {
      width: 100%;
      section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        input {
          width: 90%;
          height: 4rem;
          border: 1px solid #ccc;
          text-indent: 1em;
          margin: 1rem 1rem;
          border-radius: 8px;
        }
        i {
          width: 24px;
          height: 24px;
        }
      }
      .phone {
        position: relative;
        .phonecaptcha,
        .timeout {
          position: absolute;
          height: 4rem;
          right: 2rem;
          top: 50%;
          margin-top: -2rem;
          line-height: 4rem;
        }
      }
    }
    .tabr {
      width: 100%;
      section {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        i {
          position: absolute;
          right: 3rem;
          top: 2rem;
        }
        input {
          width: 90%;
          height: 4rem;
          border: 1px solid #ccc;
          text-indent: 1em;
          margin: 1rem 1rem;
          border-radius: 8px;
        }
        img {
          position: absolute;
          top: 50%;
          right: 1rem;
          width: 10rem;
          margin-top: -2rem;
        }
      }
    }
    .loginbtn {
      width: 90%;
      color: #fff;
      background-color: red;
      margin: 1rem 1rem;
      border-radius: 8px;
      height: 4rem;
      font-size: 1.6rem;
    }
  }
}
</style>