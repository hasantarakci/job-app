import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import JobList from '../views/JobList.vue';
import JobDetail from '../views/JobDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/joblist',
    name: 'JobList',
    component: JobList,
  },
  {
    path: '/jobdetail/:id=*',
    name: 'JobDetail',
    component: JobDetail,
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
