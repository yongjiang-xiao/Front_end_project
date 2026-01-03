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


  {
    path: '/life/shuttle-bus',
    name: 'shuttle-bus',
    component: () => import('../views/life/ShuttleBus.vue')
  },

  {
  path: '/life/stadium-booking',
  name: 'stadium-booking',
  component: () => import('../views/life/StadiumBooking.vue')
},


  {
    path: '/life/club-activities',
    name: 'club-activities',
    component: () => import('../views/life/ClubActivities.vue')
  },
{ path: '/life/psychological-counseling', 
  name: 'psychological-counseling', 
  component: () => import('../views/life/PsychologicalCounseling.vue') 
},
{
  path: '/life/dorm-repair',
  name: 'dorm-repair',
  component: () => import('../views/life/DormRepair.vue')
},
{
  path: '/life/card-loss',
  name: 'card-loss',
  component: () => import('../views/life/CardLoss.vue')
},
{
  path: '/life/card-recharge',
  name: 'card-recharge',
  component: () => import('../views/life/CardRecharge.vue')
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

router.afterEach(() => {
  document.body.style.overflow = ""
  document.documentElement.style.overflow = ""
})

export default router
