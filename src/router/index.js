import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import CreateCooperative from '../views/CreateCooperative.vue';
import EditCooperative from '../views/EditCooperative.vue';
import Profile from '../views/Profile.vue';
import Home from '../views/Home.vue';
import Details from '../views/DetailsPool.vue'
import Landing from '../views/Landing.vue'


const routes = [{
        path: '/',
        component: Landing
    },
    {
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
        component: Details,
        props: true
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;