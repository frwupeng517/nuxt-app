<script setup lang="ts">
import zh from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

console.log('useI18n', useI18n());
const { t, locale: localeLanguage } = useI18n();
const locale = ref(zh);
const toggleLang = (lang) => {
  console.log('lang', lang);
  console.log('localeLanguage', localeLanguage.value);
  locale.value = lang;
  localeLanguage.value = lang.name === 'zh-cn' ? 'zh' : lang.name;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <div>
      <router-link to="/">{{ t('message.home') }}</router-link>
      <router-link to="/my">{{ t('message.my') }}</router-link>
    </div>
    <el-button @click="toggleLang(zh)">切换中文</el-button>
    <el-button @click="toggleLang(en)">切换英文</el-button>
    <router-view />
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
