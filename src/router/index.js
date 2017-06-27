import App from '../App.vue'
//const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home');
import Home from '../pages/home/home.vue'

export default [{
  path:'/',
  component:App,
  children:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta: { keepAlive: true },
    },
  ]
}]





















