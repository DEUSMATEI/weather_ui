<template>
  <div class="mainContainer">
    <v-card flat>
      <v-card-text>
        <v-text-field v-model="email" placeholder="E-mail..." :error-messages="emailErr" />
        <v-text-field
          v-model="password"
          placeholder="Password..."
          type="password"
          :error-messages="passErr"
        />
        <v-btn @click="signIn" color="primary" block>Sign In</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailErr: [],
      password: "",
      passErr: []
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password,
        sucCallback: this.onSuccess,
        errCallback: this.onError
      });
    },
    onSuccess() {
      /*Router push to second view*/
      this.$router.push("/");
    },
    onError(err) {
      const code = err.code;
      switch (code) {
        case "auth/invalid-email":
          this.emailErr = ["Wrong Email address"];
          break;
        case "auth/user-not-found":
          this.emailErr = ["User not found"];
          break;
        case "auth/wrong-password":
          this.passErr = ["Wrong password"];
          break;
        default:
          break;
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