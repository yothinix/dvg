import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

Vue.use(VueRouter)

const routes = [
  { paht: '/author/:username', component: Author },
  { paht: '/post/:slug', component: Post },
  { paht: '/tag/:slug', component: PostsByTag },
  { path: '/', component: AllPosts },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
