<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : 'white')
const config = useRuntimeConfig()

const year = new Date().getFullYear()

const menu = computed<NavigationMenuItem[]>(() => [{
    label: 'Home',
    children: [{
        icon: 'i-lucide-building',
        label: 'We are Sekeco',
        description: 'Empowering Businesses with Innovative Digital Solutions',
        to: '/',
        active: false
    }, {
        icon: 'i-lucide-briefcase',
        label: 'Our Services',
        description: 'Discover Our Comprehensive Digital Solutions Tailored for Your Business Growth',
        to: '/#services',
        active: false
    }, {
        icon: 'i-lucide-rocket',
        label: 'Our Projects',
        description: 'Explore Our Portfolio of Successful Digital Solutions and Innovations',
        to: '/#projects',
        active: false
    }, {
        icon: 'i-lucide-users',
        label: 'Our Team',
        description: 'Meet the Experts Behind Our Innovative Digital Solutions',
        to: '/#team',
        active: false
    }, {
        icon: 'i-lucide-star',
        label: 'Client Testimonials',
        description: 'Hear What Our Satisfied Clients Say About Our Digital Solutions',
        to: '/#testimonials',
        active: false
    }, {
        icon: 'i-lucide-newspaper',
        label: 'Latest News',
        description: 'Stay Updated with the Latest Trends and Insights in Digital Solutions',
        to: '/#news',
        active: false
    }],
    active: false
}, {
    label: 'Products',
    children: [{
        icon: 'i-lucide-box',
        label: 'Reken.id',
        description: 'Revolutionize Vehicle Rentals with AI-Powered Management Solution',
        to: 'https://reken.id',
        target: '_blank',
        external: true,
    }, {
        icon: 'i-lucide-box',
        label: 'Invoice',
        description: 'Create professional invoices and estimates in minutes. ',
        to: 'https://invoice.sekeco.com',
        target: '_blank',
        external: true
    }, {
        icon: 'i-lucide-timer',
        label: 'Adacara.id',
        description: 'Streamline Event Management with AI-Powered Solutions',
        disabled: true,
    }, {
        icon: 'i-lucide-box',
        label: 'Mustaka',
        description: 'A modular, real-time education management platform',
        to: 'https://mustaka.id',
        target: '_blank',
        external: true,

    }]
}, {
    label: 'Projects',
    to: '/projects'
}, {
    label: 'Articles',
    to: '/articles'
}, {
    label: 'Contact',
    to: '/#contact',
    active: false
}])

useHead({
    titleTemplate: (title) => title ? `%s - ${config.public.appName}` : config.public.appName,
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color', content: color }
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// defineOgImageComponent('NuxtSeo', {
//     title: config.public.appName,
//     description: config.public.appDescription,
// });

useSeoMeta({
    title: config.public.appName,
    description: config.public.appDescription,
    ogImage: '/og-image.png',
    twitterImage: '/og-image.png',
    twitterTitle: config.public.appName,
    twitterDescription: config.public.appDescription,
})
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator />
        <UContainer class="pt-4 sticky top-0 z-1">
            <UHeader class="bg-default/50 border-b-0 rounded-full light:ring light:ring-default" :ui="{ left: 'ps-2', center: 'grow', container: 'sm:px-4!' }">
                <template #left>
                    <UButton variant="link" to="/" square icon="i-custom-brand" label="sekeco" :ui="{ label: 'text-lg -mt-0.5 text-default font-medium', leadingIcon: 'size-6' }" />
                </template>
                <UNavigationMenu arrow :items="menu" class="w-full justify-center" />
                <template #right>
                    <UColorModeButton />
                    <UButton color="neutral" variant="soft" label="Let's Collaborate" class="rounded-full px-4 bg-default" size="lg" />
                </template>
                <template #body>
                    <UNavigationMenu :items="menu" orientation="vertical" class="-mx-2.5" />
                </template>
            </UHeader>
        </UContainer>
        <UMain>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>
        <UFooter class="border-t border-default">
            <template #left>
                <UButton variant="ghost" to="/" square icon="i-custom-brand" label="sekeco" :ui="{ label: 'text-base font-medium' }" />
                <ULink href="https://sekeco.com" external target="_blank" rel="noopener" class="text-sm text-dimmed">PT Sarwa Kalyana Cara</ULink>
            </template>
            <template #right>
                <UButton label="Terms of Service" variant="ghost" disabled />
                <UButton label="Privacy Policy" variant="ghost" disabled />
                <UButton label="Career" variant="ghost" disabled />
                <span class="text-sm text-dimmed">© {{ year }}</span>
            </template>
        </UFooter>
    </UApp>
</template>
