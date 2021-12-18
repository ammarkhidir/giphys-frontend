import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Giphys from '../views/Giphys.vue'
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
    path: '/giphys',
    name: 'Giphys',
    component: Giphys
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
