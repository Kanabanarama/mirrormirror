import Vue from 'vue'
import App from './src/App.vue'
import router from './src/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
