import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'

import { Swiper as SwiperComponent, SwiperSlide as SwiperSlideComponent } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const app = createApp(App)

app.component('swiper', SwiperComponent)
app.component('swiper-slide', SwiperSlideComponent)
app.mount('#app')
