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


// Users
import test from '../views/test'

Vue.use(Router);

// export default new Router({
//   mode: 'hash', // https://router.vuejs.org/api/#mode
//   linkActiveClass: 'active',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: configRoutes()
// })

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
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
              path : 'RegisterMedis/:idPasien',
              name : 'Tambahkan Rekam Medis',
              component : registerMedis
            }
         
          ]
        },
       

 


      ]
    },

  ]
}

