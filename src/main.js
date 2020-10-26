import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import MintUi from 'mint-ui';
import LyTab from 'ly-tab';
import store from './vuex/store';


import 'mint-ui/lib/style.css';

Vue.use(MintUi)
Vue.use(LyTab)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')