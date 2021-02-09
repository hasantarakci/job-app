import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import JobPostings from '../views/JobPostings.vue';
import JobDetail from '../views/JobDetail.vue';
import ContactUs from '../views/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home,
  },
  {
    path: '/job-postings',
    name: 'jobPostings',
    component: JobPostings,
  },
  {
    path: '/job-detail/:id=*',
    name: 'jobDetail',
    component: JobDetail,
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: ContactUs,
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
