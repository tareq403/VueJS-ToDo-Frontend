import Vue from 'vue'
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import App from './App.vue';
import Config from "./config";

const http = axios.create({
  baseURL: Config.BASE_URL
})

Vue.prototype.$http = http;
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
