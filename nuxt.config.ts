import { Configuration } from '@nuxt/types'
const nuxtConfig: Configuration = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-axios-request-pattern',
        htmlAttrs: {
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'description' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/api',
        '@/plugins/mock'
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
        'nuxt-typed-vuex'
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios' // https://go.nuxtjs.dev/axios
    ],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            /typed-vuex/
        ]
    }
}

module.exports = nuxtConfig
