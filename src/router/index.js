import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Hello from '@/views/hello'
import Job from '@/views/job'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    }
  ]
})
