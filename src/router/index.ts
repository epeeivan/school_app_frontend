import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect:()=>{
      return {name:'app.landing'}

    },
    children: [
      {
        path: '',
        name: 'app.landing',
        component: () => import('@/layouts/LandingLayout.vue'),
        children: [
          {
            path: '',
            name: 'app.landing.home',
            component: () => import('@/views/landing/LandingHome.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
