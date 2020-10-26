 import Ajax from './ajax';

 const Base_Url = 'http://localhost:3000/api'

 export const userlogin = (user_name, pass, captcha) => Ajax(Base_Url + '/v1/users/login', { user_name: user_name, login_password: pass, captcha: captcha }, 'post');
 // import ajax from "./ajax"

 // //定义一个全局变量--全局路径
 // const Base_URL = "/api"

 // export const userlogin = (user_name, pass, captcha) => ajax(Base_URL + "/v1/users/login", { user_name, login_password: pass, captcha }, "post")