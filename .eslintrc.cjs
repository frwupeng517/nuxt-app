module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'], // 如果我们希望要使用分号，则在 rules 字段增加配置
    'comma-dangle': ['error', 'never'] // 需要结尾处的逗号 ['always']
    // 'no-console': 2 // 不允许出现console语句
  }
};
