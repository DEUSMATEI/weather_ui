<template>
<v-form>
<div class="cardcontainer">
<v-col cols="12" sm="6">
    <v-text-field  
    v-model="email"  
    name="input_email"
    label="Email"
    :rules="rules.required"    
    
    >
    </v-text-field>

    <v-text-field
    v-model="password"
    name="input_password"
    label="Password"
    :type="show1 ? 'text' : 'password'"    
    >
    </v-text-field>

    <v-btn depresed small color="primary">Login</v-btn>
</v-col>
</div>

</v-form>
</template>

<script>
export default {
    data(){
        return{
            email: "",
            password: "",
            rules:{
            required: value => !!value || 'Required.'
            }
        }
    }
}
</script>
<style scoped>
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  margin: auto 30%;
}
</style>