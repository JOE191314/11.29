import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Video = () => import('views/video/Video')
const PandaChallenge = () => import('views/pandaChallenge/PandaChallenge')
const Game = () => import('views/game/Game')
const About = () => import('views/about/About')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/pandaChallenge',
    component: PandaChallenge
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/about',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
