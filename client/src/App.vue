<template>
  <v-app>
    <v-main class="container">
      <div class="nav-image-container">
        <v-overlay
          :absolute=true
          :value=true
          opacity="0"
          z-index="0"
        >
          <v-btn text small color="secondary" rounded>
            About
          </v-btn>
          <v-btn text small color="secondary" rounded>
            Blog
          </v-btn>
          <v-avatar size="150" tile>
            <img
            src="./assets/Logo.png"
            alt="Picture"
            class="logo"
            
          >
          </v-avatar>
          <v-btn text small color="secondary" rounded>
            Contact
          </v-btn> 
          <v-btn text small color="secondary" rounded>
            Portfolio
          </v-btn> 
        </v-overlay>
        <img
          src="./assets/nav.jpg"
          alt="Picture"
          class="nav-img"
        >
      </div> 
      <v-container>
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
.nav-image-container {
  width: 100%;
  // height: 10rem;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.logo {
  width: 100%;
  object-fit: contain;
}
.nav-img {
  width: 100%;
  height: 45rem;
  object-fit: cover;
}
.container .v-overlay {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>
