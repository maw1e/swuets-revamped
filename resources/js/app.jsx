import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import GuestLayout from './Layouts/GuestLayout';
import { ThemeProvider, CssBaseline } from '@mui/material'; 
import theme from './theme'
// import {ZiggyReact} from '../../vendor/tightenco/ziggy'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <GuestLayout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App {...props} />
      </ThemeProvider>
    );
  },
})
