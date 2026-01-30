import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'maplibre-gl'; 
import { mapConfig } from './config/mapConfig';

if (mapConfig.provider === 'mapbox') {
    // mapboxgl.accessToken = mapConfig.accessToken; 
    // MapLibre does not support accessToken property directly on the object in the same way.
    // We will rely on passing the token via URL or map options if possible.
} else {
    // mapboxgl.accessToken = '';
}

if (!navigator.geolocation) {
    alert('Tu navegador no soporta Geolocation')
    throw new Error('Tu navegador no soporta Geolocation')
}

createApp(App).use(store).use(router).mount('#app')
