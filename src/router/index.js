import Vue from 'vue'
import Router from 'vue-router'

//  Components
import Hello from '@/components/Hello'
import NewEmojie from '@/components/NewEmojie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/addlog',
      name: 'AddLog',
      component: NewEmojie
    }
  ]
})
