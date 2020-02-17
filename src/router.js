import Vue from "vue";
import Router from "vue-router";

//Views
import LoginView from "./views/Login.vue"
import Weather from "./views/Weather.vue"
import store from "./store";

Vue.use(Router);

const isSignedIn = (to, from, next) =>{
    if(store.state.user) next();
    else next("/login")
}

const isSignedOut = (to, from, next) =>
{
    if(!store.state.user) next();
    else next("/");
}
export default new Router({
    routes: [
        {path: "/login", component: LoginView, beforeEnter: isSignedOut},
        {path: "/", component: Weather, beforeEnter: isSignedIn}
    ]
})