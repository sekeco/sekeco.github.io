// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/ui',
        '@nuxt/eslint',
        '@vueuse/nuxt',
        '@nuxt/content',
        'nuxt-gtag',
        '@nuxtjs/seo',
    ],
    devtools: { enabled: true },

    app: {
        layoutTransition: { name: 'fade', mode: 'out-in' },
        pageTransition: { name: 'fade', mode: 'out-in' }
    },

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            appName: process.env.NUXT_SITE_NAME || 'Sekeco',
            appDescription: process.env.NUXT_SITE_DESCRIPTION,
        }
    },

    site: {
        url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
        name: process.env.NUXT_SITE_NAME || 'Sekeco',
        description: process.env.NUXT_SITE_DESCRIPTION || 'Making a well furnished branding solely for what you\'re hoping'
    },

    ogImage: {
        strictNuxtContentPaths: true
    },

    gtag: {
        enabled: process.env.NODE_ENV === 'production',
        id: process.env.NUXT_PUBLIC_GTAG_ID || ''
    },

    compatibilityDate: '2024-11-27',

    seo: {
        meta: {
            themeColor: [
                { content: '#18181b', media: '(prefers-color-scheme: dark)' },
                { content: 'white', media: '(prefers-color-scheme: light)' }
            ],
            author: 'Rasyidly',
            colorScheme: 'dark light',
            applicationName: 'Sekeco',
            ogSiteName: 'Sekeco',
            ogLocale: 'en_US',
            ogImage: '/og-image.png',
            ogType: 'website',
            ogUrl: 'https://sekeco.com',
            ogTitle: 'Sekeco',
            twitterImage: '/og-image.png',
            twitterCard: 'summary_large_image',
            twitterTitle: process.env.NUXT_SITE_NAME || 'Sekeco',
            twitterDescription: process.env.NUXT_SITE_DESCRIPTION || 'Making a well furnished branding solely for what you\'re hoping',
            robots: 'index, follow'
        }
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    },

    fonts: {
        families: [{
            name: 'Geist',
            provider: 'google'
        }]
    },

    icon: {
        customCollections: [{
            prefix: 'custom',
            dir: './app/assets/icons'
        }]
    }
})