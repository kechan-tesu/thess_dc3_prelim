import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Feature
  },
  {
    path: '/products',
    name: 'Products',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
