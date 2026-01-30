import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (!navigator.geolocation) {
    alert('Tu navegador no soporta Geolocation')
    throw new Error('Tu navegador no soporta Geolocation')
}

createApp(App).use(store).use(router).mount('#app')
