import { createApp } from 'vue'
import router from './router/index.js';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)

app.use(router).mount('#app')