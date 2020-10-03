import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/hi',
        name: 'Hi',
        component: () => import(/* webpackChunkName: "hi" */ '../components/Hi.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
