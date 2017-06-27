import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App.vue'
import routes from './router/index'


const router = new VueRouter({
  routes
})

new Vue({
  router,
  template:`
    <div>
      <router-view>
        
      </router-view>
    </div>
  `

}).$mount('#app')
