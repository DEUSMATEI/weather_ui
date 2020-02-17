import Vue from "vue";
import Router from "vue-router";

//Views
import LoginView from "./views/Login.vue"
import Weather from "./views/Weather.vue"
import store from "./store";

Vue.use(Router);

const isSignedIn = (to, from, next) =>{
    if(store.state.user) next();
    else next("/")
}

const isSignedOut = (to, from, next) =>
{
    if(!store.state.user) next();
    else next("/weather");
}
export default new Router({
    routes: [
        {path: "/", component: LoginView, beforeEnter: isSignedOut},
        {path: "/weather", component: Weather, beforeEnter: isSignedIn}
    ]
})