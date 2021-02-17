import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light : {
        default: '#F8E2D5',
        title1: '#FF000F',
        secondary: '#3A3F3A',
        footer: '#007075'
      },
    }
  }
});
