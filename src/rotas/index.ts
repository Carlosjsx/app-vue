import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePages.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginPages.vue'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../pages/CadastroPages.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../pages/NotFound.vue'),
  }
];

const router = createRouter({ 
  history: createWebHistory(), 
  routes,
});

export default router;
