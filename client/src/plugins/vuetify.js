import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      dark : {
        primary: '#3657c0',
        secondary: '#3da2f1',
        info: '#dde0ff',
        success: '#00ac4c',
        warning: '#ffc202',
        error: '#ff637c',
        accent: '#ffffff'
      },
      // light : {
      //   primary: '#e8c3da',
      //   secondary: '#ededed',
      //   info: '#dde0ff',
      //   success: '#00ac4c',
      //   warning: '#ffd600',
      //   error: '#d81109',
      //   accent: '#001529'
      // },
      light : {
        default: '#f7f7f7',
        primary: 'e8bdae',
        secondary: '#D37D48',
        info: '#48656B'
      },
    }
  }
});
