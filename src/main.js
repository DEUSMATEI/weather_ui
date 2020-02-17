import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"
import router from "./router";
import firebase from 'firebase'



Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyB_POFKvF4VRkhXHnAiHLm_IbmmTQs64Ds",
  authDomain: "weather-c1b50.firebaseapp.com",
  databaseURL: "https://weather-c1b50.firebaseio.com",
  projectId: "weather-c1b50",
  storageBucket: "weather-c1b50.appspot.com",
  messagingSenderId: "1035201416822",
  appId: "1:1035201416822:web:ee8441522f4a451cebd957",
  measurementId: "G-C1P2R4EBGZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
