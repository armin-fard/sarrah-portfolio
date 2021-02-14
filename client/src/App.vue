<template>
  <v-app>
    <v-main class="container">
      <v-container>
        <v-row class="text-center">
          <v-col>
            <!-- <v-avatar
              class="avatar"
              size="155"
            >
              <img
                src="./assets/avatar.jpg"
                alt="Avatar"
              >
            </v-avatar> -->
            <p>Something here...</p>
          </v-col>
        </v-row>
        <v-card color="default">
        <v-row class="text-center">
          <v-col v-for="(route, i) in routes" :key="i">
            <v-btn @click="navClicked(route.link)" text color="secondary" rounded>
              <v-icon color="secondary" small class="btn-icon">{{ route.icon }}</v-icon>
              {{ route.label }}
            </v-btn>
          </v-col>
        </v-row>
        </v-card>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="default" :elevation="12">
      <v-spacer></v-spacer>
      <div style="text-color: #D37D48">&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    routes: [
      {
        label: 'Home',
        link: '/home',
        icon: 'fa-home'
      },
            {
        label: 'About',
        link: '/about',
        icon: 'fa-book-open'
      },
      {
        label: 'Blog',
        link: '/blog',
        icon: 'fa-comment-alt'
      },
      {
        label: 'Contact',
        link: '/contact',
        icon: 'fa-envelope'
      },
    ]
  }),
  methods: {
    navClicked (link) {
      console.log(link)
      this.$router.push(link)
  
    }
  },
  created () {
    this.$vuetify.theme.light = true
  },
};
</script>

<style lang="scss">
@import './assets/css/stylesheet.css';
</style>
