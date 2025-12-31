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

  // ✅ 生活服务首页（保留）
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/LifeView.vue')
  },

  // ✅ 校车（如果你希望它也是独立页面，可以像这样单独放出来）
  {
    path: '/life/shuttle-bus',
    name: 'shuttle-bus',
    component: () => import('../views/life/ShuttleBus.vue')
  },

  // ✅ 体育馆预约：真正独立的新页面
  {
    path: '/stadium-booking',
    name: 'stadium-booking',
    component: () => import('../views/life/StadiumBooking.vue')
  },

  {
    path: '/life/club-activities',
    name: 'club-activities',
    component: () => import('../views/life/ClubActivities.vue')
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
