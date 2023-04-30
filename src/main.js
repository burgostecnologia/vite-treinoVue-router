import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'

import Home from './views/home.vue'
import About from './views/about.vue'
//import Movie from './views/movie.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
  //  {path: '/movie', component: Movie}
    {path: '/movie', component: () => import('./views/movie.vue')}, //assim só carrega quando acessar , + performatico
    {path: '/servico', name: 'servico', component: () => import('./views/servico.vue')},
    {path: '/usuarios/:id', name: 'usuarios', component: () => import('./views/usuarios.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
