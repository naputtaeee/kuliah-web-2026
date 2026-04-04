import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'     // ✅ FIX DI SINI
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')