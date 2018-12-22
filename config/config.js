export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      }
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './HelloWorld'
      },
      {
        path: '/helloworld',
        component: './HelloWorld'
      },
      {
        path: '/puzzlecards',
        component: './Puzzlecards'
      },
      {
        path: '/list',
        component: './list'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
  proxy: {
    '/test': {
      target: 'http://114.116.89.193:8999',
      changeOrigin: true,
    },
  },
};