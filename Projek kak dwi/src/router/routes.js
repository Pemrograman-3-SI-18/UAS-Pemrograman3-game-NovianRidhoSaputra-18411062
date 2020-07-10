
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/home/DataGame.vue') },
      { path: 'inputdatagame', component: () => import('pages/Admin/home/InputDataGame.vue') },
      { path: 'editdatagame/:id', component: () => import('pages/Admin/home/EditDataGame.vue') },
      { path: 'transaksipelanggan', component: () => import('pages/Admin/Transaksi/Transaksipelanggan.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Pembeli/DataGame/Pembeli.vue') },
      { path: 'pencariangame', component: () => import('pages/Pembeli/DataGame/PencarianGame.vue') },
      { path: 'transaksianda', component: () => import('pages/Pembeli/TransaksiPembeli/TransaksiPembeli.vue') },
      { path: 'pembayaran', component: () => import('pages/Pembeli/TransaksiPembeli/Pembayaran.vue') }

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
        path: 'auth/registrasi',
        component: () => import('pages/users/registrasi.vue')
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
