<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card color="default" flat class="justify-center text-center">
          <v-card-title class="justify-center">
            <p class="card-title">Hi,</p>
          </v-card-title>
          <v-card-text class="justify-center">
            <p class="card-text">
              I'm Sarrah Wolfe, a freelance writer<br/>
              based out of Orange County. I have<br/>
              a passion for turning everyday life<br/>
              into unique, engaging stories.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="2"/>
      <v-col cols="4">
        <v-card color="default" flat class="justify-center text-left">
          <v-card-title class="justify-left">
            <p class="card-title">My Services</p>
          </v-card-title>
          <v-card-text class="justify-center">
            <p class="card-text">
              While I offer a wide range of services, my specialties include<br/>
              blog posts, book reviews, and marketing e-mails. Looking<br/>
              for something else? No worries, my writing versatile and<br/>
              can be tailored to fit your needs.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" />
    </v-row>
    <v-row class="text-center">
      <v-col cols="2"/>
      <v-col cols="8">
        <v-card color="default" flat class="justify-center text-center">
          <v-card-title class="justify-end">
            <p class="card-title">See My Work At</p>
          </v-card-title>
          <v-card-text class="justify-center">
            <v-avatar size="200" tile>
              <img
              src="../assets/mcdonalds.jpg"
              alt="Picture"
              class="logo"
              
            >
            </v-avatar>
              <v-avatar size="200" tile>
                <img
                src="../assets/in-n-out.png"
                alt="Picture"
                class="logo"
                
              >
            </v-avatar>
              <v-avatar class="logo-avatar" size="200" tile>
                <img
                src="../assets/taco-bell.png"
                alt="Picture"
                class="logo"
                
              >
            </v-avatar>
            <v-avatar size="200" tile>
              <img
                src="../assets/sonic.png"
                alt="Picture"
                class="logo"
                
              >
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2" />
    </v-row>
  </v-container>
</template>

<script>
  import '../../style/custom.css' 
  export default {
    name: 'Home',

    data: () => ({

    }),
  }
</script>
<style scoped>
.card-title {
  font-family: 'Spartan', sans-serif;
  font-size: 2rem;
  color: #FF000F;
}
.card-text {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #3A3F3A;
}
.logo-avatar {
  margin: 1rem;
}
</style>
