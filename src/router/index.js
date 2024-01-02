import { createRouter, createWebHistory } from 'vue-router'
import find from '../components/find.vue'
import main from '../components/main.vue'
import login from '../components/login.vue'
import userInfo from '../components/userInfo.vue'

const routes = [
  {
    path: '/',
    name: 'defaultLayout', //헤더 푸터 들어가는애들
    component: () => import('@/layout/defaultLayout.vue'),
    children: [  //요안에 넣어주세요
      {
        path: '/',
        name: 'main',
        component: main
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: userInfo
      }
    ],
},
{
    path: '/',
    name: 'loginLayout', //헤더 푸터 없는 애들
    component: () => import('@/layout/loginLayout.vue'),
    children: [ //요안에 넣어주세요
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/find',
        name: 'find',
        component: find
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
