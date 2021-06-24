import Vue from 'vue';
import App from './App.vue';
import LikeNumber from "./LikeNumber.vue";
/* ./LikeNumber.vueからインポートしている */

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)
/* Vue.component("名前", コンポーネント名)と書いてグローバル登録 */

new Vue({
  render: h => h(App),
}).$mount('#app')