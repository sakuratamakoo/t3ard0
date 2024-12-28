import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '/assets/main.css';
import App from './App.vue';
import router from './router';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const pinia = createPinia().use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Toast);
app.provide('$toast', useToast());
app.mount('#app');
