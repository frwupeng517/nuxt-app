import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

const i18n = createI18n({
  legacy: false, // 注意: 在这里需要配置  legacy: false，不然会报错：Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
  locale: 'zh',
  messages: { zh, en }
});

export default i18n;
