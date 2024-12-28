<script setup>
import { onMounted } from 'vue';
onMounted(async () => {
  const setVarStyle = (key, value, dom = document.documentElement) => {
    dom.style.setProperty(key, value);
  };
  setVarStyle('--el-color-primary', '#000000')
  setVarStyle('--el-color-primary-light-9', '#000000')
  setVarStyle('--el-color-primary-light-3', '#000000')
});
</script>


<template>
  <RouterView />
</template>
<style>
*{
  -webkit-tap-highlight-color: transparent;
}
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background: transparent; 
}

::-webkit-scrollbar-thumb {
  background: #ffffff56;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: transparent; 
  border: none; 
}
@font-face {
  font-family: 'teardrop';
  font-style: normal;
  font-weight: 800;
  src: local('teardrop'), url('/assets/fonts/teardrop.woff2') format('woff2');
}
@font-face {
  font-family: 'qingxie';
  font-style: normal;
  font-weight: 400;
  src: local('qingxie'), url('/assets/fonts/qingxie.woff2') format('woff2');
}
@font-face {
  font-family: 'din_thin';
  font-style: normal;
  font-weight: 400;
  src: local('din_thin'), url('/assets/fonts/din_thin.woff2') format('woff2');
}
@font-face {
  font-family: 'din_bold';
  font-style: normal;
  font-weight: 800;
  src: local('din_bold'), url('/assets/fonts/din_bold.woff2') format('woff2');
}
:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;

    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    --secondary: #f4f5f7;
    --success: #33946a;
    --info: #11cdef;
    --warning: #ffe37d;
    --danger: #f04747;
    --light: #adb5bd;
    --dark: #212529;
    --default: #172b4d;
    --highlight: #bb86fc;
    --highlight-dark: #0c6cca;
    --highlight-light: #3999f7;
    --muted: #4c4c4c;
    --muted-grey: #bbb;
    --offwhite: #f8f8f8;
    --primary-bg: #201e1e;
    --secondary-bg: #000;
    --tertiary-bg: #1f1f1f;
    --input-bg: #282828;
    --gold: #f3d98e;
    --gold-dark: #bd901f;

    --background: #141414;

    --opaque-white: rgba(255,255,255,0.2);

    --button-font-family: Muli, sans-serif;
    --button-font-size: 1rem;
    --button-sm-font-size: 0.875rem;

    -webkit-font-smoothing: antialiased;

    --dropdown-background: var(--tertiary-bg);

    --z-index-1: 9;
    --z-index-2: 99;
    --z-index-3: 999;
    --z-index-4: 9999;
    --z-index-5: 99999;
    --z-index-6: 999999;
    --z-index-super: 9999999;

    --silk-color: #f68e2d;
    --instinct-color: #50a683;
    --uncaged-color: #675bc7;

    --toggle-on-color: var(--primary);
}
</style>
