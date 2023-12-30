//- assets
import './style.postcss'
import 'iconify-icon'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..

import App from '@/App.vue'
import router from './router'

//- config
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'

// Form Validator
import '@formkit/themes/genesis'
import { plugin, defaultConfig } from '@formkit/vue'


const vuetify = createVuetify({
  components,
  directives
})

//- import longdo map api script
const longDoAPI = 'https://api.longdo.com/map/?key=' + import.meta.env.VITE_LONGDO_MAP_API_KEY
const script = document.createElement('script')
script.setAttribute('src', longDoAPI)
script.setAttribute('type', 'text/javascript')
document.head.appendChild(script)

const app = createApp(App)

AOS.init()

app.use(createPinia())

app.use(router)
app.use(
  plugin,
  defaultConfig({
    theme: 'genesis' // will load from CDN and inject into document head
  })
)
app.use(vuetify)

app.mount('#app')
