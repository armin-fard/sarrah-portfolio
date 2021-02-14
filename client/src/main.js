import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify';
import CKEditor from '@ckeditor/ckeditor5-vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(CKEditor)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
