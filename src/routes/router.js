import { createRouter, createWebHistory } from "vue-router"
import mainPage from "../pages/mainPage.vue"
import animeSerialCard from '../pages/animeSerialCard.vue'
import notFoundPage from '../pages/notFoundPage.vue'
import animeSerialPage from '../pages/animeSerialPage.vue'
import animeFilmPage from '../pages/animeFilmPage.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'Главная страница', component: mainPage, alias: '/' },
        { path: '/anime-card/:id', component: animeSerialCard, name: 'Страница фильма' },
        { path: '/anime-serial', component: animeSerialPage },
        { path: '/anime-film', component: animeFilmPage },
        { path: '/:pathMatch(.*)*', name: 'Ссылки не существует', component: notFoundPage },

    ]
})