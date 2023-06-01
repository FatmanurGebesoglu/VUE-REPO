import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonelView from '../views/PersonelView.vue'
import PersonelDetayView from '../views/PersonelDetayView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personel',
    name: 'personel',
    component: PersonelView
  },
  {
    path: '/personel/:id',
    name: 'personeldetay',
    component: PersonelDetayView,
    props: true
  },
  {
    path: '/personeller',
    redirect: '/personel'
  },
  {
    path: '/catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
