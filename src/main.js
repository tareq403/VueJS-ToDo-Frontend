import Vue from 'vue'
import Router from "vue-router"
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import App from './App.vue';
import Config from "./config";
import router from "./routers";

const http = axios.create({
  baseURL: Config.BASE_URL
})

Vue.prototype.$http = http;
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
