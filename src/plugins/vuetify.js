import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' // 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
          light: {
            isbg: '#FAFAFA',
          },
        },
    },
});
