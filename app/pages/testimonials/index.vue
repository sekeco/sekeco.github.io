<script lang="ts" setup>
const { data: testimonials } = await useAsyncData(() => queryCollection('testimonials').limit(50).all())
</script>

<template>
    <UPage>
        <GridBackground />
        <UContainer>
            <UPageHero title="Client Testimonials" description="Hear from our satisfied clients about their experiences working with us and the real business impact we've delivered.">
                <UPageColumns v-if="testimonials && testimonials.length > 0" class="gap-4 space-y-4">
                    <UPageCard v-for="(testimonial, index) in testimonials || []" :key="index" variant="soft">
                        <template #leading>
                            <UBadge icon="i-lucide-star" :label="String(testimonial.rating?.toFixed(1))" color="warning" variant="soft" />
                        </template>
                        <template #description>
                            <ContentRenderer :value="testimonial.body" />
                        </template>
                        <template #footer>
                            <UUser :name="testimonial.name" :description="testimonial.position" size="lg" :avatar="{ icon: 'i-lucide-user' }" :ui="{ description: 'line-clamp-1' }" />
                        </template>
                    </UPageCard>
                </UPageColumns>
                <UEmpty v-else title="No testimonials yet" description="Check back soon for client feedback and success stories." icon="i-lucide-inbox" />
            </UPageHero>
        </UContainer>
    </UPage>
</template>
