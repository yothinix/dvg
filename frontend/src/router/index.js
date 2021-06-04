import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

Vue.use(VueRouter)

const routes = [
  { path: '/author/:username', component: Author },
  { path: '/post/:slug', component: Post },
  { path: '/tag/:slug', component: PostsByTag },
  { path: '/', component: AllPosts },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
