// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'Hiren | Developer | DJ | Amsterdam',
            link: [{rel: 'icon', type: 'image/svg+xml', href: '/hirshi2.svg'}],
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'description',
                    content: 'Personal website of Hiren Budhrani'
                },
                {
                    name: 'keywords',
                    content: 'amsterdam, developer, techno, dj, vue'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/eslint-module'
    ]
})
