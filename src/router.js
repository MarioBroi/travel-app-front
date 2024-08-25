import { createWebHistory, createRouter } from "vue-router";
import AppHome from './components/views/AppHome.vue';
import AppForm from './components/views/AppHome.vue';
import AppTrip from './components/views/AppHome.vue';
import AppDay from './components/views/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppHome,
            name: 'Home'
        },
        {
            path: "/form",
            component: AppForm,
            name: "AppForm",
        },
        {
            path: "/trip",
            component: AppTrip,
            name: "AppTrip",
        },
        {
            path: "/day",
            component: AppDay,
            name: "AppDay",
        }
    ]
})

export default router;