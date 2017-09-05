import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const User = {
  template: '<div> user </div>'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: []
    }
  ]
})
