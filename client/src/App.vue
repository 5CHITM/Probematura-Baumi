<template>
  <v-app>
    <v-app-bar app absolute color="gray" height="100">
      <v-img max-width="90" contain elevation="4" src="@/assets/beg-immobilien-logo.svg" class="mr-2"></v-img>

      <v-toolbar-title class="d-none d-sm-block">
        <div class="text-h5"><span class="cyan--text">L</span>angs <span class="cyan--text">E</span>states <span class="cyan--text">G</span>roup</div>
        <div class="text-subtitle-1">INTERNATIONAL REAL ESTATE</div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" outlined class="mx-2" active-class="cyan white--text">Home</v-btn>
      <v-btn to="/news" outlined class="mx-2" active-class="cyan white--text">News</v-btn>
      <v-btn to="/team" outlined class="mx-2" active-class="cyan white--text">Team</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
