import Vue from 'vue'
import App from './App.vue'

import VuePhotoSwipe from '../src/lib'

Vue.use(VuePhotoSwipe)
new Vue({
  el: '#app',
  render: h => h(App)
})
