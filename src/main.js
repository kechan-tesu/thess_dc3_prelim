import './assets/main.css'

import { createApp } from 'vue'
import App from './App1.vue'
import router from './router' //import the router
import 'bootstrap/dist/css/bootstrap.min.css' //import bootstrap css
import 'bootstrap' // import bootstrap js

createApp(App)
  .use(router) // use the router
  .mount('#app')
