import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AddRad from './components/AddRad.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/add',
            name: 'add',
            component: AddRad,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ],
});
