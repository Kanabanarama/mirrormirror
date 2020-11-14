import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Example from './components/Example'
import PageNotFound from './components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
