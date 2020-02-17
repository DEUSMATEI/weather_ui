import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase/app"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {}
    },
    mutations:{
        setUser: (state, user) =>{
            state.user = user;
        }
    },
    actions:{
        signIn({commit}, payload){
            firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(user =>{
                commit("setUser", user);
                payload.sucCallback();
            })
            .catch(err => {
                payload.errCallback(err);
            })
        },
        signOut(){
            firebase.auth().signOut();
        }
    }
})