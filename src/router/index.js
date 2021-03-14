import {
    createRouter,
    createWebHistory
} from 'vue-router';
import CreateCooperative from '../views/CreateCooperative.vue';
import EditCooperative from '../views/EditCooperative.vue';
import Profile from '../views/Profile.vue';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue'


const routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/edit-cooperative',
        component: EditCooperative
    },
    {
        path: '/create-cooperative',
        component: CreateCooperative
    },
    {
        path: '/settings',
        component: Profile
    },
    {
        path: '/details',
        component: Details
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;