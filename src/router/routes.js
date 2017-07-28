import HomeView from '@/views/HomeView'
import PageView from '@/views/PageView'
import MovieView from '@/views/MovieView'
import BookView from '@/views/BookView'
import StatusView from '@/views/StatusView'
import GroupView from '@/views/GroupView'
import LoginView from '@/views/LoginView'

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
        path: 'movie',
        name: 'MovieView',
        component: MovieView
      },
      {
        path: 'book',
        name: 'BookView',
        component: BookView
      },
      {
        path: 'status',
        name: 'StatusView',
        component: StatusView
      },
      {
        path: 'group',
        name: 'GroupView',
        component: GroupView
      },
      {
        path: 'RegisterView',
        name: 'RegisterView',
        component: HomeView
      },
    ]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
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
