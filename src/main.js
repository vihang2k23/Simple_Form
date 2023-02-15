import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";
import VueRouter from "vue-router";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import Welcome from "../src/components/Welcome";
import VueSwal from "vue-swal";

Vue.use(VueSwal);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Signup,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/login",
    component: Login,
    props: true,
  
  },
  {
    path: "/welcome",
    component: Welcome,
    props: true
  }
];

export const router = new VueRouter({ routes });

Vue.use(VeeValidate);
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    next("/login");
  } else {
    next();
  }
});
