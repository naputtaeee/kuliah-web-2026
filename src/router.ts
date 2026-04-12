import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Users from './pages/Users.vue'
import Detail from './pages/Detail.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router