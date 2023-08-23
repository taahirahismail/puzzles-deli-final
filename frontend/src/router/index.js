import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../components/SingleProduct.vue')
  },
  // check
  {
    path: '/product', 
    name: 'add product', 
    component: () => import('../components/AddProduct.vue')
  }, 
  // check
  {
    path: '/product/:id', 
    name: 'update product',
    component: () => import('../components/UpdateProduct.vue')
  },
  // check
  {
    path: '/register',
    name: 'add user', 
    component: () => import('../components/AddUser.vue')
  },
  // check 
  {
    path: '/user/:id',
    name: 'update user', 
    component: ()=> import('../components/UpdateUser.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
