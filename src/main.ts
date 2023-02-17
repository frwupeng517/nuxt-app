import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from '@/locales/i18n';

createApp(App)
  .use(
    ElementPlus
    // { size: "small", zIndex: 3000 }
  )
  .use(router)
  .use(i18n)
  .mount('#app');
