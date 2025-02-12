export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      titleTemplate: '%s | Global Website Development Services - Professional Web Development',
      title: 'Victory Studio',
      meta: [
        { charset: 'utf-8' },
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' 
        },
        { 
          name: 'description', 
          content: 'Professional website development agency offering custom web solutions for local and international businesses. Full-stack development, e-commerce, and SEO optimization services.' 
        },
        { 
          name: 'keywords', 
          content: 'web development, international website, e-commerce solutions, responsive design, SEO optimization, full-stack development, professional web agency,Jasa Pembuatan Website, Jasa Pembuatan Website Terbaik, Jasa Pembuatan Website Murah, Jasa Pembuatan Website Profesional, Jasa Pembuatan Website Indonesia, Jasa Pembuatan Website Terpercaya, Jasa Pembuatan Website Terbaik, Jasa pembuatan website, Jasa pembuatan website terbaik, Jasa pembuatan website murah, Jasa pembuatan website profesional, Jasa pembuatan website ASEAN, Jasa pembuatan website terpercaya, jasa pembuatan website terbaik' 
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'id_ID' },
        { property: 'og:site_name', content: 'Victory Studio' },
        { property: 'og:title', content: 'Victory Studio | Global Website Development Services' },
        { property: 'og:description', content: 'Professional website development for international and local businesses. Custom web solutions with SEO optimization.' },
        { property: 'og:image', content: '/assets/img/logo.png' },
        { property: 'og:url', content: 'https://victorystudio.co.id' },
        
        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@VictoryStudio' },
        { name: 'twitter:creator', content: '@VictoryStudio' },
        { name: 'twitter:title', content: 'Global Website Development Services' },
        { name: 'twitter:description', content: 'Professional web development for international markets' },
        { name: 'twitter:image', content: '/assets/img/twitter-card.jpg' },
        
      ],
      
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/logo.png' },
        
        // Preload critical resources
        { rel: 'preload', href: '/assets/css/bootstrap.min.css', as: 'style' },
        { rel: 'preload', href: '/assets/css/style.css', as: 'style' },
        
        // CSS files
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/jquery.pagepiling.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
        
        // hreflang for international targeting
        { rel: 'alternate', hreflang: 'x-default', href: 'https://victorystudio.co.id/' },
        { rel: 'alternate', hreflang: 'en', href: 'https://victorystudio.co.id/en/' },
        { rel: 'alternate', hreflang: 'id', href: 'https://victorystudio.co.id/id/' },
      ],
      
      script: [
        // Schema Markup
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Victory Studio",
            "image": "https://victorystudio.co.id/assets/img/logo.png",
            "@id": "",
            "url": "https://victorystudio.co.id",
            "telephone": "+6281930456886",
            "priceRange": "$500-$1500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Panghulu Djaja Cimahpar",
              "addressLocality": "Bogor Utara",
              "postalCode": "16151",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-6.175392",
              "longitude": "106.827153"
            },
            "sameAs": [
              "https://jasawebsite.victorystudio.co.id/",
              "https://www.linkedin.com/company/victorystudio"
            ]
          })
        },

        // Google Tags (tetap dipertahankan)
        ...(process.env.NODE_ENV === 'production' ? [
          { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-3XFCSYCNXT' },
          {
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3XFCSYCNXT');
              gtag('config', 'AW-959855125');
            `,
            type: 'text/javascript'
          }
        ] : [])
      ]
    }
  },

  


  // Modul tambahan
  modules: ['@nuxt/image', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/scripts'],

  // Robots.txt configuration
  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/']
      }
    ],
    sitemap: 'https://victorystudio.co.id/sitemap.xml'
  },
  // Optimasi performa
  experimental: {
    payloadExtraction: true,
    componentIslands: true
  },
    // Image optimization
    image: {
      quality: 80,
      formats: ['webp'],
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
  nitro: {
    compressPublicAssets: true,
    static: true
  }
})