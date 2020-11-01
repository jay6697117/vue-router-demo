import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Hi from '@/components/Hi.vue';
import Hi1 from '@/components/Hi1.vue';
import Hi2 from '@/components/Hi2.vue';
import Error404 from '@/components/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hi',
    name: 'Hi',
    component: Hi
  },
  {
    path: '/hi/:id',
    name: 'Hi',
    component: Hi,
    children: [
      {
        path: '/hi/1',
        name: 'Hi1',
        components: {
          default: Hi,
          left: Hi1,
          right: Hi2
        }
      },
      {
        path: '/hi/2',
        name: 'Hi2',
        components: {
          default: Hi,
          left: Hi1,
          right: Hi2
        }
      }
    ]
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  },
  { path: '/', redirect: { name: 'Home' } }
];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
