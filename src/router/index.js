import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CreateGroupView from '../views/CreateGroupView.vue'
import GroupView from '../views/GroupView.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/creategroup',
    name: 'creategroup',
    component: CreateGroupView
  },
  {
    path: '/group',
    name: 'group',
    component: GroupView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  const protectedRoutes = ['/group']
    if(protectedRoutes.includes(to.path) && !store.getters.getLogged) {
      return '/';
    }
    else if(to.name == 'creategroup' && !store.getters.getLogged)
    {
      return '/login';
    }
});

export default router
