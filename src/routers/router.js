import Router from "vue-router";
export default new Router({
    routers: [{
      path: "router",
      component: '',
      meta: {},
      children: [{
          path: 'router1',
          component: Router1
        },
        {
          path: 'router2',
          component: Router2
        }
      ]
    }]
  })