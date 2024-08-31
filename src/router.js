import { createWebHistory, createRouter } from 'vue-router';
import AppDay from './views/AppDay.vue';
import AppForm from './views/AppForm.vue';
import AppHome from './views/AppHome.vue';
import AppTrip from './views/AppTrip.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: "/form",
            name: "AppForm",
            component: AppForm
        },
        {
            path: "/trip",
            name: "AppTrip",
            component: AppTrip
        },
        {
            path: "/day",
            name: "AppDay",
            component: AppDay
        },
    ]
})

export default router;