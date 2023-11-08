/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  evn: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    // 'no-console': true // 콘솔 사용 x 설정값
    //이런식으로 운영에선 사용하지않도록 설정도 가능
    'no-console': process.evn.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
