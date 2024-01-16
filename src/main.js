/* eslint-disable */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import en from "element-plus/dist/locale/en.mjs"
import 'element-plus/dist/index.css'
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus, {locale: en})
app.mount('#app');
