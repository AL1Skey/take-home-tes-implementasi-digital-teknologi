// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8000/api'
    }
  },
  app: {
    head: {
      title: 'VictoryStudio',
      meta: [
        { charset: 'utf-8' },
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0' 
        },
        { 
          name: 'description', 
          content: 'Victory Studio - Creative Portfolio HTML Template' 
        },
        { 
          name: 'author', 
          content: 'Adam Nur Ramadan' 
        },
        { 
          name: 'google-site-verification', 
          content: 'OMLCNI8XHhDcMq_jlZ74i_3AeL-xZNVyNww7ZdnfoAM' 
        }
      ],
      link: [
        { rel: 'shortcut icon', href: '/assets/img/logo.png' },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery.pagepiling.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' }
      ],
      script: [
        // Google Optimize
        {
          async: true,
          src: 'https://www.googleoptimize.com/optimize.js?id=OPT-K7LL96R'
        },
        // Global Site Tag
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-3XFCSYCNXT'
        },
        // gtag Configuration
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3XFCSYCNXT');
            gtag('config', 'G-GWJ2RCN017');
            gtag('config', 'UA-176399157-1');
            gtag('config', 'AW-959855125', {'allow_enhanced_conversions': true});
            gtag('config', 'AW-959855125/v1K_CIm10K8YEJX02MkD', { 'phone_conversion_number': '081930456886' });
            gtag('config', 'AW-959855125/GHoICPC0hegDEJX02MkD', { 'phone_conversion_number': '081930456886' });
          `,
          type: 'text/javascript'
        },
        // Conversion Event
        {
          innerHTML: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-959855125/q8xQCNu6hegDEJX02MkD',
                'value': 2000.0,
                'currency': 'IDR',
                'event_callback': callback
              });
              return false;
            }
          `,
          type: 'text/javascript'
        },
        // { src: 'https://code.jquery.com/jquery-1.12.4.min.js', async:true, defer: true },
        // { src: 'assets/js/smoothscroll.js', defer: true },
        // { src: 'assets/js/popper.min.js', defer: true },
        // { src: 'assets/js/bootstrap.min.js', defer: true },
        // { src: 'assets/js/owl.carousel.min.js', defer: true },
        // { src: 'assets/js/jquery.pagepiling.min.js', defer: true },
        // { src: 'assets/js/jquery.viewport.js', defer: true },
        // { src: 'assets/js/jquery.countdown.min.js', defer: true },
        // { src: 'assets/js/typed.min.js', defer: true },
        // { src: 'assets/js/parallax.min.js', defer: true },
        // { src: 'assets/js/jquery.validate.min.js', defer: true },
      ]
    }
  },

  nitro: {
    static: true // Memastikan file static dari public dilayani
  },
  // ssr:false,
  modules: ['@nuxt/image', '@nuxt/scripts']
})