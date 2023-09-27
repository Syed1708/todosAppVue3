import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// pinia 
import { createPinia } from 'pinia'
const pinia = createPinia()


createApp(App).use(pinia).mount('#app')
// createApp(App).mount('#app')
