import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

import Home from '../views/Home.vue';
import Login from '../views/Auth/Login.vue';
import SignUp from '../views/Auth/SignUp.vue';
import RestorePassword from '../views/Auth/RestorePassword.vue';
import QuickPlay from '../views/QuickPlay.vue';

Vue.use(VueRouter);

const notAuthRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/restorepassword',
    name: 'RestorePassword',
    component: RestorePassword,
  },
  {
    path: '/quickplay',
    name: 'QuickPlay',
    component: QuickPlay,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const routes = [
  ...notAuthRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (notAuthRoutes.some((route) => route.path === to.path)) {
    next();
  } else if (store.getters['AUTH/isAuth']) {
    next();
  } else {
    next('/');
  }
});

export default router;
