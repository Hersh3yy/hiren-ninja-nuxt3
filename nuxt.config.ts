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
            title: 'Hiren Devs Nuxt Tailwind Starter',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'description',
                    content: 'Nuxt Tailwind Starter'
                },
                {
                    name: 'keywords',
                    content: 'amsterdam, bro'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/eslint-module'
    ]
})
