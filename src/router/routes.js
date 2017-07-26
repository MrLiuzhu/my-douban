import HomeView from '@/views/HomeView'
import PageView from '@/views/PageView'

import NotFoundPage from '@/components/page/404'
import ErrorPage from '@/components/page/500'


let routes = [
  {
    path: '/',
    redirect:'/pages/home'
  },
  {
    path: '/pages',
    component:PageView,
    children:[
      {
        path:'',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: 'MovieView',
        name: 'MovieView',
        component: HomeView
      },
      {
        path: 'StatusView',
        name: 'StatusView',
        component: HomeView
      },
      {
        path: 'RegisterView',
        name: 'RegisterView',
        component: HomeView
      },
      {
        path: 'LoginView',
        name: 'LoginView',
        component: HomeView
      },
    ]
  },
  {
    path: '/500',
    component: ErrorPage
  },
  {
    path: '*',
    redirect: '/pages/',
  }
]

export default routes
