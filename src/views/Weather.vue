<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row
                allign="center"
                justify="center"                
                style="height:300px;"
                > 
                <v-card class="ma-3 pa-6" outlined tile>       
            <v-text-field                    
                v-model = "city"
                placeholder="City..."                                                         
                />
            <v-text-field                    
                v-model = "state"
                placeholder="State..."                                                         
                />        
            <v-btn
                @click="getWeather"
                color="primary"
                block>See Weather</v-btn>
                </v-card>
                <v-card class="ma-3 pa-6" outlined tile> 
                    <template v-if="weather_available">
                    <h1> weather</h1>
                    Lat: {{lat}} <br>
                    Lon: {{lon}} <br>
                    Temperature: {{temp}} &#8451; <br>
                    Wind Speed: {{wind}} km/h
                    </template>

                    <template v-else>
                    <h1> Weather not available</h1>
                    Please select a city and corresponding state                    
                    </template>
                </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            city: "",
            state: "",
            lat: 0,
            lon: 0,
            temp: 0,
            wind: 0,
            weather_available: false
        };
    },
    methods: {
        getWeather(){
            axios.get('http://127.0.0.1:5001/weather?city=' + this.city + '&state=' + this.state)
            .then(response => {
                this.lat = response["data"]["coord"]["lat"];
                this.lon = response["data"]["coord"]["lon"];
                this.temp = response["data"]["temp"];
                this.wind = response["data"]["wind_speed"];
                this.weather_available = true;
            });            
        }
    }
}
</script>

<style scoped>
.mainContainer{
     height: 100%;
     padding: 1.5rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
}
</style>