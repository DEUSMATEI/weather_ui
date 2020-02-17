import Vue from "vue";
import Router from "vue-router";

//Views
import LoginView from "./views/Login.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {path: "/", component: LoginView}
    ]
})