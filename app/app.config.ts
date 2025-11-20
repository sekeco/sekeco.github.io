export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            secondary: 'purple',
            info: 'sky',
            neutral: 'zinc'
        },
        button: {
            defaultVariants: {
                color: 'neutral'
            }
        },
        pageHero: {
            slots: {
                title: 'bg-linear-to-b from-inverted via-inverted/80 to-muted bg-clip-text text-transparent font-medium',
                container: 'py-12 sm:py-20 lg:py-32'
            }
        },
        pageSection: {
            slots: {
                container: 'py-12 sm:py-18 lg:py-24',
                title: 'bg-linear-to-br from-inverted via-inverted/80 to-muted bg-clip-text text-transparent font-medium'
            },
            variants: {
                title: {
                    true: {
                        description: 'mt-3.5'
                    }
                }
            }
        },
        pageCTA: {
            slots: {
                title: 'font-medium',
                container: 'py-6 sm:py-8 lg:py-12'
            }
        }
    }
})
