import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import {ZiggyVue} from '../../vendor/tightenco/ziggy'

const MyPreset = definePreset(Aura, {
    primitive: {
        maroon: {
            50:  '#fdf2f2',
            100: '#fde8e8',
            200: '#fbd5d5',
            300: '#f8b4b4',
            400: '#f98080',
            500: '#800000',
            600: '#d82a2a',
            700: '#b32222',
            800: '#991a1a',
            900: '#800000',  // Darkest color
            950: '#4d0000',
        }
    },
    semantic: {
        primary: {
            50: '{maroon.50}',
            100: '{maroon.100}',
            200: '{maroon.200}',
            300: '{maroon.300}',
            400: '{maroon.400}',
            500: '{maroon.500}',
            600: '{maroon.600}',
            700: '{maroon.700}',
            800: '{maroon.800}',
            900: '{maroon.900}',
            950: '{maroon.950}'
        }
    },
});


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .use(PrimeVue, {
        theme: {
            preset: MyPreset,
            options: {
                darkModeSelector: 'light'
            }
        }
      })
      .mount(el)
  },
})