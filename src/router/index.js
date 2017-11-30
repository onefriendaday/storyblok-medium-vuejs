import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Teaser from '@/components/Teaser'
import Blogarticle from '@/components/Blogarticle'
import Root from '@/components/Root'

Vue.use(Router)
Vue.component('root', Root)
Vue.component('teaser', Teaser)
Vue.component('blogarticle', Blogarticle)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
