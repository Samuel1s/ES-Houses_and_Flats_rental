import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import ListHouses from '@/components/ListHouses.vue'
import CreateHouses from '@/components/CreateHouses.vue'
import DetailsHouse from '@/components/DetailsHouse.vue'
import ListFlats from '@/components/ListFlats.vue'
import CreateFlats from '@/components/CreateFlats.vue'
import DetailsFlat from '@/components/DetailsFlat.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'Sobre', component: About },
  { path: '/listHouses', name: 'ListaCasas', component: ListHouses },
  { path: '/addHouses', name: 'CadastroCasa', component: CreateHouses },
  { path: '/updateHouse', name: 'AtualizarCasa', component: DetailsHouse },
  { path: '/listFlats', name: 'ListaFlats', component: ListFlats },
  { path: '/addFlats', name: 'CadastroFlat', component: CreateFlats },
  { path: '/updateFlat', name: 'AtualizarFlat', component: DetailsFlat },
]

const router = new Router({
  routes 
})

export default router

