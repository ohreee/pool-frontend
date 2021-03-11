import {
    createRouter,
    createWebHistory
} from 'vue-router';
import CreateCooperative from '../views/CreateCooperative.vue';
import EditCooperative from '../views/EditCooperative.vue';
import Home from '../views/Home.vue';


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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;