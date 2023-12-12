import { createWebHistory, createRouter } from "vue-router";
import HomeApp from './components/HomeApp.vue';
import ProductApp from './components/ProductApp.vue';
import ContactUs from './components/ContactUs.vue';
import LoginApp from './components/LoginApp.vue';

const routes = [
    {
        name: 'HomeApp',
        path: '/',
        component: HomeApp,
    },
    {
        name: 'ProductApp',
        path: '/product',
        component: ProductApp,
    },
    {
        name: 'ContactUs',
        path: '/contact',
        component: ContactUs,
    }
    ,
    {
        name: 'LoginApp',
        path: '/login',
        component: LoginApp,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;