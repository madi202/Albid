import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
// const Dashboard = () => import('@/views/Dashboard')
import Dashboard from '../views/Dashboard'
import userProfil from '../views/Bidan/UserProfil'


//Views - pasien
import ListPasien from '../views/Pasien/ListPasien'
import TambahPasien from '../views/Pasien/TambahkanPasien'
import DetailsPasien from '../views/Pasien/DetailsPasien'

// views - rekam medis
import registerMedis from '../views/RekamMedis/RegisterMedis'
import RekamMedisANC from '../views/RekamMedis/AntenatalCare'
import RekamMedisAssesmentAwal from '../views/RekamMedis/AssesmentAwal'
import AsesmenSubjektif from '../views/RekamMedis/AsesmenSubjektif'
import AsesmenObjektif from '../views/RekamMedis/AsesmenObjektif'

import Soap1 from '../views/RekamMedis/INC/SOAP1'
import Soap2 from '../views/RekamMedis/INC/SOAP2'
import Soap3 from '../views/RekamMedis/INC/SOAP3'
import Soap4 from '../views/RekamMedis/INC/SOAP4'
// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
import test from '../views/test'

Vue.use(Router);



const router = new Router({
  // mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
          next()
          return
      }
      next('/pages/login')
  } else {
      next()
  }
})
export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      meta : {
        requiresAuth : true
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path :'UserProfil',
          name:'User Profil',
          component: userProfil
        },
        {
          path :'test',
          name:'Test page',
          component: test
        },
        // {
        //   path :'TambahPasien',
        //   name:'Tambah Pasien',
        //   component: TambahPasien
        // },

        {
          path: 'Pasien',
          redirect: '/Pasien/ListPasien',
          name: 'Pasien',
          component: {
            render (c) { return c('router-view') }
          },
          children: [


            {
              path: 'ListPasien',
              name: 'List Pasien',
              component: ListPasien
            },
            {
              path: 'TambahPasien',
              name: 'Tambah Pasien',
              component: TambahPasien
            },
            {
              path: 'Details/:id',
              name: 'Details Pasien',
              component: DetailsPasien,
            },

            {
              path : 'RekamMedisANC/:idRekamMedis',
              name : 'Rekam Medis ANC',
              component : RekamMedisANC
            },
            {
              path : 'RekamMedisAwal/:idRekamMedis',
              redirect : 'RekamMedisAwal/:idRekamMedis/subjektif',
              name : 'Rekam Medis Asessment Awal',
              component : RekamMedisAssesmentAwal,
              children : [
                {
                  path :'subjektif',
                  name : 'Assement Awal-Subjektif',
                  component : AsesmenSubjektif
                },
                {
                  path :'objektif',
                  name : 'Assement Awal-Objektif',
                  component : AsesmenObjektif
                },
              ]
            },
            {
              path : 'RekamMedisINC/:idRekamMedis',
              name : 'Rekam Medis Intranatal Care',
              component : {
                render (c) { return c('router-view') }
              },
              children : [
                {
                  path :'SOAP1',
                  name : 'Intranatal Care_ Kala 1',
                  component : Soap1
                },
                {
                  path :'SOAP2',
                  name : 'Intranatal Care_ Kala 2',
                  component : Soap2
                },
                {
                  path :'SOAP3',
                  name : 'Intranatal Care_ Kala 3',
                  component : Soap3
                },
                {
                  path :'SOAP4',
                  name : 'Intranatal Care_ Kala 4',
                  component : Soap4
                },
              ]
            },
            
            {
              path : 'RegisterMedis/:idPasien',
              name : 'Tambahkan Rekam Medis',
              component : registerMedis
            }

          ]
        },





      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

