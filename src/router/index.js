import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapView.vue')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/LifeView.vue'),
    children: [
      // {
      //   path: 'psychological-counseling',
      //   name: 'psychological-counseling',
      //   component: () => import('../views/life/PsychologicalCounseling.vue')
      // },
      // {
      //   path: 'stadium-booking',
      //   name: 'stadium-booking',
      //   component: () => import('../views/life/StadiumBooking.vue')
      // },
      {
        path: 'shuttle-bus',
        name: 'shuttle-bus',
        component: () => import('../views/life/ShuttleBus.vue')
      },
      // {
      //   path: 'card-loss',
      //   name: 'card-loss',
      //   component: () => import('../views/life/CardLoss.vue')
      // },
      // {
      //   path: 'card-recharge',
      //   name: 'card-recharge',
      //   component: () => import('../views/life/CardRecharge.vue')
      // },
      // {
      //   path: 'dorm-repair',
      //   name: 'dorm-repair',
      //   component: () => import('../views/life/DormRepair.vue')
      // },
      // {
      //   path: 'club-activities',
      //   name: 'club-activities',
      //   component: () => import('../views/life/ClubActivities.vue')
      // }
    ]
  },
  {
    path: '/life/shuttle-bus',
    name: 'shuttle-bus',
    component: () => import('../views/life/ShuttleBus.vue')
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('../views/WeatherView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router