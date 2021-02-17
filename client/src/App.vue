<template>
  <v-app>
    <v-main class="background">
      <div class="nav-image-container">
        <v-overlay
          :absolute=true
          :value=true
          opacity="0"
          z-index="0"
        >
          <v-btn class="nav-btn" color="secondary" text small rounded>
            <h3>About</h3>
          </v-btn>
          <v-btn class="nav-btn" color="secondary" text small rounded>
            <h3>Blog</h3>
          </v-btn>
          <v-avatar size="200" tile>
            <img
            src="./assets/Logo.png"
            alt="Picture"
            class="logo"
            
          >
          </v-avatar>
          <v-btn class="nav-btn" color="secondary" text small rounded>
            <h3>Contact</h3>
          </v-btn> 
          <v-btn class="nav-btn" color="secondary" text small rounded>
            <h3>Portfolio</h3>
          </v-btn> 
        </v-overlay>
        <img
          src="./assets/nav.jpg"
          alt="Picture"
          class="nav-img"
        >
      </div> 
      <router-view></router-view>
    </v-main>
    <v-footer height="100" color="footer" :elevation="12">
      <div style="text-color: #D37D48">&copy; {{ new Date().getFullYear() }}</div>
      <v-spacer></v-spacer>
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
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spartan:wght@200&display=swap');

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
  height: 30rem;
  object-fit: cover;
}
.nav-btn {
  font-family: 'Spartan', sans-serif;
  margin: auto;
}
.nav-image-container .v-overlay {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
