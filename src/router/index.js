import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,

    component: () => import(/* webpackChunkName: 'destination-details' */ "../views/DestinationDetails.vue"),
    children : [{
      path: ':experienceSlug',
      name: 'experienceDetails',
      props: true,
      component : () => import(/* webpackChunkName : 'experience-details'*/ "../views/ExperienceDetails.vue")
    }],
    //cheking is there any slug or mot
    beforeEnter: (to,from,next) => {
      const exists = store.destinations.find(destination => destination.slug === to.params.slug);
      exists ? next() : next({name: 'notFound'});
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component : () => import(/* webpackChunkName : 'not-found'*/ "../components/NotFound.vue")

  }
];

const router = new VueRouter({
  //linkExactActiveClass: 'hi-active-link',
  mode: "history",
  scrollBehavior:(to,from,savedPosition) => {
    if(savedPosition){
      return savedPosition;
    } else {
      const position = {};
      if(to.hash){
        position.selector = to.hash;
        if(document.querySelector(to.hash)){
          return position;
        }
        return false;
      }
    }
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
