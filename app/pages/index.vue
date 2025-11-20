<script lang="ts" setup>
const stats = computed(() => [{
    value: '300+',
    title: 'Completed Projects',
    description: 'Successfully delivered projects across various industries'
}, {
    value: '100+',
    title: 'Satisfied Clients',
    description: 'Businesses that trust us with their brand and digital presence'
}, {
    value: '50+',
    title: 'Eclectic Freelancers',
    description: 'Talented professionals collaborating on projects'
}, {
    value: '8+',
    title: 'Years Experience',
    description: 'Delivering excellence in design and development'
}])

const services = computed(() => [{
    title: 'Web Development',
    description: 'Craft stunning and optimized websites, from simple business pages to complex web applications.',
    icon: 'i-lucide-globe',
    color: 'primary' as Color
}, {
    title: 'Mobile Apps',
    description: 'Elevate your brand with engaging and user-friendly mobile apps for iOS and Android.',
    icon: 'i-lucide-smartphone',
    color: 'secondary' as Color
}, {
    title: 'E-commerce Solution',
    description: 'Build a powerful online store tailored to your products, boost sales and customer satisfaction.',
    icon: 'i-lucide-shopping-cart',
    color: 'error' as Color

}, {
    title: 'ERP Solution',
    description: 'Simplify operations and gain insightful data with a customized ERP system for your business.',
    icon: 'i-lucide-database',
    color: 'info' as Color
}, {
    title: 'UI/UX Design & Development', description: 'Create intuitive and attractive interfaces that captivate users and optimize their experience.',
    icon: 'i-lucide-layout-dashboard',
    color: 'success' as Color

}, {
    title: 'API Integration',
    description: 'Integrate your system with powerful APIs, ensuring smooth data flow and maximum functionality.',
    icon: 'i-lucide-plug',
    color: 'warning' as Color
}])

const { data: projects } = await useAsyncData(() => queryCollection('projects').limit(6).where('featured', '=', true).order('published', 'DESC').all())

const { data: testimonials } = await useAsyncData(() => queryCollection('testimonials').all())

const { data: team } = await useAsyncData(() => queryCollection('team').all())
const { data: articles } = await useAsyncData(() => queryCollection('articles').limit(6).all())

const customize = (content: string) => content.replace(/stroke-width="[^"]*"/g, `stroke-width="1"`)
</script>

<template>
    <UPage>
        <UPageBody>
            <AuroraBackground class="absolute inset-0 -z-1 opacity-50" />
            <GridBackground class="absolute inset-0 -z-1" />
            <UPageHero title="Making a well furnished branding solely for what you're hoping" description="Engaged in identity design, business development, and IT consultant. Thrive your essential needs by building your foundation with swiftness and ease.">
                <template #headline>
                    <UBadge variant="outline" icon="i-lucide-hand" color="neutral" label="Sugeng Rawuh" size="lg" class="rounded-full py-1.5" :ui="{ label: 'pe-1.5', leadingIcon: 'animate-pulse text-muted' }" />
                </template>
                <template #links>
                    <div class="relative inline-block">
                        <NeonBorder :color="['#615fff', '#00a6f4', '#ff2056']" :border-radius="50" />
                        <UButton color="neutral" variant="ghost" label="Let's Collaborate" trailing-icon="i-lucide-arrow-right" size="xl" class="rounded-full px-4 bg-default" />
                    </div>
                    <UButton variant="ghost" color="neutral" label="See Our Products" trailing-icon="i-lucide-arrow-right" size="xl" class="rounded-full px-4" />
                </template>
                <template #bottom>
                    <UContainer class="py-8">
                        <UPageGrid class="grid-cols-2 lg:grid-cols-4 items-start">
                            <UPageFeature v-for="(stat, index) in stats" :key="index" v-bind="stat" class="flex-col text-center justify-center" :ui="{ leading: 'mx-auto', wrapper: 'mx-auto', root: [1, 2].includes(index) ? 'lg:translate-y-6' : 'lg:-translate-y-6' }">
                                <template #leading>
                                    <span class="text-4xl">{{ stat.value }}</span>
                                </template>
                            </UPageFeature>
                        </UPageGrid>
                    </UContainer>
                </template>
            </UPageHero>

            <div class="relative">
                <GridBackground class="absolute inset-0 -z-1" />
                <UPageSection id="services" title="Our Services" description="Discover the full range of tailored services we provide — from strategy and branding to technical implementation and ongoing support. Each service is designed to help your business grow, streamline operations, and create memorable customer experiences that drive measurable results.">
                    <UPageGrid class="gap-4">
                        <UPageCard v-for="(service, index) in services" :key="index" :title="service.title" :description="service.description" spotlight class="group" :ui="{ container: 'group-hover:translate-x-1.5 transition-transform' }">
                            <template #leading>
                                <UBadge :icon="service.icon" variant="soft" size="lg" :color="service.color" class="p-2.5 rounded-xl" />
                            </template>
                        </UPageCard>
                    </UPageGrid>
                </UPageSection>

                <UPageSection id="projects" title="Featured Projects" description="Explore our latest projects and offerings that showcase our commitment to quality, creative problem-solving, and technical innovation. For each project we present the challenge, the solution we implemented, and the measurable impact — giving you insight into how we approach similar problems for your business." :ui="{ links: 'gap-1' }">
                    <template #links>
                        <UButton variant="outline" color="neutral" label="Web Development" icon="i-lucide-code" :ui="{ leadingIcon: 'text-primary' }" class="rounded-full px-3" to="/projects?category=Web+Development" />
                        <UButton variant="outline" color="neutral" label="Identity Design" icon="i-lucide-pen-tool" :ui="{ leadingIcon: 'text-warning' }" class="rounded-full px-3" to="/projects?category=Identity+Design" />
                        <UButton variant="outline" color="neutral" label="E-commerce" icon="i-lucide-shopping-bag" :ui="{ leadingIcon: 'text-secondary' }" class="rounded-full px-3" to="/projects?category=E-commerce" />
                        <UButton variant="outline" color="neutral" label="Mobile Apps" icon="i-lucide-smartphone" :ui="{ leadingIcon: 'text-info' }" class="rounded-full px-3" to="/projects?category=Mobile+Apps" />
                        <UButton variant="ghost" color="neutral" label="View All Projects" trailing-icon="i-lucide-arrow-right" size="lg" class="rounded-full px-3" to="/projects" />
                    </template>
                    <UPageGrid class="gap-4">
                        <UPageCard v-for="(project, index) in projects" :key="index" :title="project.title" :description="project.description" :to="`/projects/${project.slug}`" :ui="{ leading: 'gap-1', container: project.images ? 'lg:grid-cols-3 p-4! lg:items-start' : undefined, wrapper: project.images ? 'lg:col-span-2 p-2' : undefined, title: 'text-2xl font-medium my-2', description: 'text-muted' }" :class="project.class" :orientation="project.images ? 'horizontal' : 'vertical'" variant="soft">
                            <template #leading>
                                <UBadge v-for="category in project.category" :key="category" :label="category" color="neutral" variant="subtle" class="rounded-full px-3" />
                            </template>
                            <UCarousel v-if="project.images && project.images.length" v-slot="{ item }" :items="project.images || []" class="w-full sm:hidden lg:flex rounded-lg overflow-clip" :autoplay="{ delay: 2000 }" loop>
                                <img :src="item" class="object-cover rounded-lg">
                            </UCarousel>
                        </UPageCard>
                    </UPageGrid>
                </UPageSection>

                <UPageSection id="testimonials" title="What Our Clients Say" description="Hear from our satisfied clients about their experiences working with us — the challenges we solved, how collaboration unfolded, and the real business impact achieved. These testimonials highlight trust, reliability, and the measurable outcomes clients experienced after partnering with us." :ui="{ container: 'max-w-full', wrapper: 'lg:max-w-7xl lg:mx-auto lg:flex lg:flex-row lg:items-center lg:gap-6 lg:**:text-start', links: 'lg:flex-nowrap lg:grow' }">
                    <template #links>
                        <UButton variant="solid" color="neutral" label="Write a Testimonial" icon="i-lucide-pencil" size="lg" class="rounded-full px-3" to="/testimonials#write" />
                        <UButton variant="ghost" color="neutral" label="View All Testimonials" trailing-icon="i-lucide-arrow-right" size="lg" class="rounded-full px-3" to="/testimonials" />
                    </template>
                    <UMarquee class="[--duration:120s] [--gap:--spacing(4)] items-stretch py-px before:w-1/6 dark:before:from-neutral-950 after:w-1/6 dark:after:from-neutral-950 max-sm:-mx-4" :repeat="4">
                        <UPageCard v-for="(testimonial, index) in testimonials || []" :key="index" class="max-w-xs h-full" variant="soft">
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
                    </UMarquee>
                </UPageSection>
            </div>

            <div class="relative">
                <GridBackground class="absolute inset-0 -z-1" />
                <UPageSection id="team" title="Meet Our Team." description="Get to know the talented individuals behind our success — their backgrounds, specialties, and the unique perspectives they bring to every project. Learn who will be involved in your work, how we collaborate cross-functionally, and why our team consistently delivers high-quality results." class="bg-muted/50">
                    <UPageGrid class="gap-4">
                        <UPageCard v-for="member in team" :key="member.path" :description="member.bio" orientation="vertical" spotlight>
                            <template #leading>
                                <UUser :name="member.name" :description="member.position" :avatar="{ src: member.avatar, alt: member.name, size: '2xl' }" orientation="vertical" size="xl" />
                            </template>
                            <template #footer>
                                <div v-if="member.linkedin || member.twitter || member.instagram || member.github">
                                    <UButton v-if="member.linkedin" icon="i-lucide-linkedin" variant="ghost" :to="member.linkedin" target="_blank" />
                                    <UButton v-if="member.twitter" icon="i-lucide-twitter" variant="ghost" :to="member.twitter" target="_blank" />
                                    <UButton v-if="member.instagram" icon="i-lucide-instagram" variant="ghost" :to="member.instagram" target="_blank" />
                                    <UButton v-if="member.github" icon="i-lucide-github" variant="ghost" :to="member.github" target="_blank" />
                                </div>
                            </template>
                        </UPageCard>
                    </UPageGrid>
                </UPageSection>

                <UPageSection id="articles" title="Latest Articles & Insights" description="Stay updated with our latest articles, insights, and in-depth content. We share case studies, product updates, design practices, and industry trends to help you make informed decisions and apply practical ideas to grow your business or product." :ui="{ links: 'gap-1' }">
                    <template #links>
                        <UButton variant="outline" color="neutral" label="Branding" icon="i-lucide-pen-tool" :ui="{ leadingIcon: 'text-warning' }" class="rounded-full px-3" to="/articles?category=Branding" />
                        <UButton variant="outline" color="neutral" label="Technology" icon="i-lucide-code" :ui="{ leadingIcon: 'text-primary' }" class="rounded-full px-3" to="/articles?category=Technology" />
                        <UButton variant="outline" color="neutral" label="Design" icon="i-lucide-layout" :ui="{ leadingIcon: 'text-secondary' }" class="rounded-full px-3" to="/articles?category=Design" />
                        <UButton variant="outline" color="neutral" label="Case Study" icon="i-lucide-book-open" :ui="{ leadingIcon: 'text-info' }" class="rounded-full px-3" to="/articles?category=Case+Study" />
                        <UButton variant="ghost" color="neutral" label="View All Articles" trailing-icon="i-lucide-arrow-right" size="lg" class="rounded-full px-3" to="/articles" />
                    </template>
                    <UBlogPosts v-if="articles" :posts="articles.map(article => ({
                        title: article.title,
                        description: article.description,
                        date: article.published,
                        badge: { label: article.category },
                        authors: [{ name: article.author, avatar: { icon: 'i-lucide-user' } }],
                        image: { src: article.image },
                        to: `/articles/${article.slug}`
                    }))" />
                </UPageSection>

                <UPageSection id="contact" title="Contact Us" description="Reach out to us for inquiries, collaborations, project briefs, or to get a personalized consultation. We can discuss your requirements, timelines, and budget to recommend the best approach — and help you take the next step toward launching or improving your product or brand." class="bg-muted/50">
                    <UPageGrid class="sm:grid-cols-3">
                        <UPageCard title="+62 898-660-6000" description="Phone" to="https://wa.me/6289866006000" target="_blank" variant="naked" :ui="{ leading: 'mx-auto mb-6', container: 'justify-center text-center', title: 'text-xl font-medium', body: 'mx-auto' }">
                            <template #leading>
                                <UIcon name="i-lucide-phone-call" class="size-8 text-muted" :customize="customize" />
                            </template>
                        </UPageCard>
                        <UPageCard title="info@sekeco.id" description="Email" to="mailto:info@sekeco.id" target="_blank" variant="naked" :ui="{ leading: 'mx-auto mb-6', container: 'justify-center text-center', title: 'text-xl font-medium', body: 'mx-auto' }">
                            <template #leading>
                                <UIcon name="i-lucide-mail" class="size-8 text-muted" :customize="customize" />
                            </template>
                        </UPageCard>
                        <UPageCard title="Yogyakarta, ID" description="Address" variant="naked" :ui="{ leading: 'mx-auto mb-6', container: 'justify-center text-center', title: 'text-xl font-medium', body: 'mx-auto' }">
                            <template #leading>
                                <UIcon name="i-lucide-map-pin" class="size-8 text-muted" :customize="customize" />
                            </template>
                        </UPageCard>
                    </UPageGrid>
                </UPageSection>
            </div>

            <UPageSection>
                <UPageCTA title="Start Your Journey with Sekeco" description="Partner with us to unlock innovative solutions that drive growth and transform your business." variant="soft" orientation="horizontal">
                    <template #links>
                        <UButton label="Get a Quote" size="xl" trailing-icon="i-lucide-arrow-right" to="https://wa.me/628986606000" target="_blank" />
                        <UButton variant="outline" label="View Our Work" size="xl" trailing-icon="i-lucide-arrow-right" to="/projects" />
                    </template>
                    <UPageCard class="max-lg:hidden w-min ms-auto rounded-full" variant="soft" :ui="{ container: 'p-12!' }">
                        <UPageCard class="rounded-full" variant="subtle" :ui="{ container: 'p-12!' }">
                            <UBadge icon="i-lucide-rocket" variant="subtle" color="neutral" size="lg" class="rounded-full p-4" :ui="{ leadingIcon: 'animate-pulse text-muted size-12' }" />
                        </UPageCard>
                    </UPageCard>
                </UPageCTA>
            </UPageSection>
        </UPageBody>
    </UPage>
</template>
