import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import JobList from '../views/JobList.vue';
import JobDetail from '../views/JobDetail.vue';
import ContactUs from '../views/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/job-list',
    name: 'JobList',
    component: JobList,
  },
  {
    path: '/job-detail/:id=*',
    name: 'JobDetail',
    component: JobDetail,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
