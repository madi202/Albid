export default [
  {
    _name: 'CSidebarNav',
    _children: [
        {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'User Profile',
        to: '/UserProfil',
        icon: 'cil-user',
      },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Test Page',
      //   to: '/test',
      //   icon: 'cil-user',
      // },
      //bagian ke 2
      {
        _name: 'CSidebarNavTitle',
        _children: ['Pasien']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'List Pasien',
        to: '/Pasien/ListPasien',
        icon: 'cil-list'
      },
      {
        _name:'CSidebarNavItem',
        name:'Tambahkan Pasien',
        to:'/Pasien/TambahPasien',
        icon:'cil-user-follow'
      },
      //bagian ke 3 / rekam medis
      

      //bagian ke 4
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Extras']
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Pages',
      //   route: '/pages',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'Login',
      //       to: '/pages/login'
      //     },
      //     {
      //       name: 'Register',
      //       to: '/pages/register'
      //     },
      //     {
      //       name: 'Error 404',
      //       to: '/pages/404'
      //     },
      //     {
      //       name: 'Error 500',
      //       to: '/pages/500'
      //     }
      //   ]
      // },
    ]
  }
]