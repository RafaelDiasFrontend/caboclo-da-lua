const URL = "http://localhost:3006"
import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 9006, // default: 3000
    host: '127.0.0.1' // default: localhost
  },
  
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Casa Luz e Esperança Caboclo da Lua',   
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [  
    '~/assets/css/style.css',
    '~/assets/css/fonts.css' ,
   '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/localStorage.js', mode: 'client'},  
    { src: '~/plugins/vue-splide', mode: 'client'}
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [  
    '@nuxtjs/axios',  
    '@nuxtjs/pwa',
    '@nuxtjs/auth',       
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#8dd2d9',
        cancelButtonColor: '#ff7674'
      }
    ] 
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {      
    proxy: true,
    baseURL: URL
  },
  proxy: {
    "/api": URL
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  auth: {
    redirect: {
      login: '/admin', 
      logout: '/',
      callback: '/login',
      home: false
    },    
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/auth/login',
            method: 'post',
            propertyName: "token"
          },     
          logout: true,
           
          user: { method: 'get', propertyName: false }

        }
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      lang: 'pt-br'
    },   
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#28302E',
          accent: colors.grey.darken3,
          secondary: '#2e2e2d',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#D15252',
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
