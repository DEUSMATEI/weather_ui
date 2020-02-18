import Vue from "vue";
import Router from "vue-router";

//Import views
import LoginView from "./views/Login.vue";
import Weather from "./views/Weather.vue";
import store from "./store";

Vue.use(Router);

/**
 * Router use navigation guards
 * to prevent user entering certain pages if isn't loged in
 */
const isSignedIn = (to, from, next) => {
  if (store.state.user) next();
  else next("/login");
};

const isSignedOut = (to, from, next) => {
  if (!store.state.user) next();
  else next("/");
};

/**
 * Configure router path
 *   - '/': Weather view
 *   - '/login': Login view
 */
export default new Router({
  routes: [
    { path: "/login", component: LoginView, beforeEnter: isSignedOut },
    { path: "/", component: Weather, beforeEnter: isSignedIn }
  ]
});
