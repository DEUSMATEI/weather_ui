<template>
<div>     
    <v-app-bar app>      
      <v-toolbar-title>
        <router-link to="/weather" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :v-if="item.cond"       
          >   
          
          {{ item.title }}
        </v-btn>
        <v-btn
        v-if="$store.state.user"
        text
        @click="signOut">
        Sign Out
        </v-btn>
        
                
      </v-toolbar-items>
    </v-app-bar>
</div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {  
  data(){
    return {
      appTitle: 'Weather',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/weather', cond: true}                        
     ]
    }
    },    
  
  methods:{
    signOut(){
       this.$store.dispatch("signOut");              
    },
    redirect(){
        /*Router push to second view*/
        this.$router.push("/");
    }
  }
};
</script>