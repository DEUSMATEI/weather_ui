<template>
  <v-container fluid>
    <v-row>
      <br />
      <br />
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row allign="center" justify="center" style="height:300px;">
          <v-card class="ma-6 pa-6" outlined tile>
            <v-text-field v-model="city" placeholder="City..." :error-messages="cityErr" />
            <v-text-field v-model="state" placeholder="State..." :error-messages="stateErr" />
            <v-btn @click="getWeather" color="primary" block>See Weather</v-btn>
          </v-card>
          <v-card class="ma-3 pa-6" outlined tile>
            <template v-if="weather_available">
              <h1>weather</h1>
              City: {{ filtered_city }}
              <br />
              Lat: {{ lat }}
              <br />
              Lon: {{ lon }}
              <br />
              Temperature: {{ temp }} &#8451;
              <br />
              Wind Speed: {{ wind }} km/h
            </template>

            <template v-else>
              <h1>Weather not available</h1>
              <br />
              {{ user_message }}
            </template>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      city: "",
      cityErr: [],
      state: "",
      stateErr: [],
      lat: 0,
      lon: 0,
      temp: 0,
      wind: 0,
      display_city: "",
      weather_available: false,
      user_message: "Please select a city and corresponding state"
    };
  },
  /**
   * User input is filtered automatically and storred in:
   * filtered_city and filtered_state
   *
   * Only letters, whitespaces and dashes are allowed
   *
   */
  computed: {
    filtered_city: function() {
      return this.city.replace(/[^-a-zA-Z\s]/g, "");
    },
    filtered_state: function() {
      return this.state.replace(/[^-a-zA-Z\s]/g, "");
    }
  },
  methods: {
    /**
     * getWeather()
     *
     * This function reset error messages then validate user input.
     * If user input is validated a GET request is made to a backend api.
     * The result of request is verify the weather data
     * or error message is diplayed to user
     */
    getWeather() {
      try {
        /*Reset error message*/
        this.cityErr = this.stateErr = "";

        /*Check user input */
        if (this.filtered_city == "") {
          this.cityErr = ["Can't be empty"];
        } else if (this.filtered_state == "") {
          this.stateErr = ["Can't be empty"];
        } else {
          axios
            .get(
              "https://python-api-weather.herokuapp.com/weather?city=" +
                this.filtered_city +
                "&state=" +
                this.filtered_state
            )
            .then(response => {
              //Check if data is valid
              if (response["data"]["coord"] != null) {
                this.lat = response["data"]["coord"]["lat"];
                this.lon = response["data"]["coord"]["lon"];
                this.temp = response["data"]["temp"];
                this.wind = response["data"]["wind_speed"];
                this.weather_available = true;
                this.display_city = this.filtered_city;
              } else {
                this.user_message = "Unable to find city";
                this.weather_available = false;
              }
            })
            .catch(() => {
              //An error has occurred during GET request processing
              this.weather_available = false;
              this.user_message = "An error has occurred please try again";
            });
        }
      } catch {
        this.weather_available = false;
        this.user_message = "An error has occurred please try again";
      }
    }
  }
};
</script>

<style scoped>
.mainContainer {
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
