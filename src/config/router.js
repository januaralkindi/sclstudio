import Home from 'pages/home'
import Services from 'pages/services'
import Products from 'pages/products'

import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Home ,name:'home' },
    { path: '/services', component: Services ,name:'services' },
    { path: '/products', component: Products ,name:'products' },


  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })
  
  export default router