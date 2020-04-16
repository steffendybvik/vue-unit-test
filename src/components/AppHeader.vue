<template>
  <v-app-bar app dense color="green lighten-2">
    <v-toolbar-title class="white--text">Company name</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text rounded dark :to="{ name: 'home'}">Home</v-btn>
    <v-spacer></v-spacer>
    <v-btn text rounded dark v-show="!currentUser" data-testid="sign-in">Sign in</v-btn>
    <v-btn text rounded dark v-show="!currentUser" data-testid="register">Register</v-btn>

    <v-btn text rounded dark v-show="currentUser" data-testid="profile">Profile</v-btn>
    <v-btn text rounded dark v-show="currentUser" data-testid="sign-out">Sign out</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      currentUser: false,
      attrs: ["text", "rounded", "dark"]
    };
  }
};
</script>
