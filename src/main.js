import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/css/index.css';
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import messages from "./helper/translate";

Vue.config.productionTip = false;

const i18n = new VueI18n({
  lazy: true,
  locale: "mn",
  messages,
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
