import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import ListHouses from '@/components/ListHouses.vue'
import CreateHouses from '@/components/CreateHouses.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'Sobre', component: About },
  { path: '/listHouses', name: 'ListaCasas', component: ListHouses },
  { path: '/addHouses', name: 'CadastroCasa', component: CreateHouses }
]

const router = new Router({
  routes 
})

export default router

