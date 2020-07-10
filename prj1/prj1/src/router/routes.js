
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/home/InputDataBuku.vue') },
      { path: 'transaksibuku', component: () => import('pages/home/TransaksiBuku.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      {
        path: 'auth/login',
        component: () => import('pages/users/Login.vue')
      },
      {
        path: 'auth/register',
        component: () => import('pages/users/Register.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
