import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Root from '@/pages/Root'
import SIGN_IN_ROUTE from '@/pages/SignIn/SignIn.route'
import SIGN_UP_ROUTE from '@/pages/SignUp/SignUp.route'

Vue.use(Router)

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const Details = {
  template: '<div> details!!! </div>'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
    {
      path: '/about',
      name: 'about',
      component: Hello
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path: 'details',
          name: 'Details',
          component: Details
        }
      ]
    }
  ]
})
