import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Hi from '@/components/Hi.vue';
import Hi1 from '@/components/Hi1.vue';
import Hi2 from '@/components/Hi2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home11',
    component: Home
  },
  {
    path: '/hi',
    name: 'Hi',
    component: Hi,
    children: [
      {
        path: 'hi1',
        name: 'Hi1',
        component: Hi1
      },
      {
        path: 'hi2',
        name: 'Hi2',
        component: Hi2
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
