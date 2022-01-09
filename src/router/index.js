import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Random from '../views/Random.vue'
import MyFavourite from '@/views/MyFavourite'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/myfavourite',
    name: 'MyFav',
    component: MyFavourite
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
