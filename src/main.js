import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

/**
 * This app use firebase for authentication
 */
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

/**
 * Add user observe
 * This function update user value from Store state
 * and redirect to login if user is signet out
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit("setUser", user);
  if (!user) router.push("/login");
});

/**
 * New Vue instance with:
 *  - Vuetify
 *  - Router
 *  - Store
 */
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
