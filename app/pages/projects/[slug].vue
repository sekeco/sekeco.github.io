<script lang="ts" setup>
const route = useRoute()
const slug = computed(() => `/projects/${route.params.slug}`)

const { data: project } = await useAsyncData(() =>
    queryCollection('projects').path(slug.value).first()
)

const { data: relatedProjects } = await useAsyncData(`related-projects-${route.params.slug}`, async () => {
    if (!project.value?.category) return []

    return await queryCollection('projects')
        .where('path', '<>', slug.value)
        .where('category', 'LIKE', `%${project.value?.category[0]}%`)
        .limit(9)
        .all()
})

useSeoMeta({
    title: project.value?.title,
    description: project.value?.description,
    ogTitle: project.value?.title,
    ogDescription: project.value?.description,
    ogImage: project.value?.images?.[0],
    twitterCard: 'summary_large_image'
})
</script>

<template>
    <UPage>
        <GridBackground class="absolute inset-0 -z-1" />
        <template v-if="project">
            <UContainer class="max-w-4xl">
                <UPageHeader
                    :title="project.title"
                    :description="project.description"
                >
                    <template #headline>
                        <UBadge
                            v-for="category in project.category"
                            :key="category"
                            :label="category"
                            color="neutral"
                            variant="subtle"
                            class="rounded-full px-3"
                        />
                    </template>
                </UPageHeader>
                <UPageBody>
                    <UCarousel
                        v-if="project.images?.length"
                        v-slot="{ item }"
                        :items="project.images"
                        class="rounded-xl overflow-hidden mb-8"
                        arrows
                        dots
                    >
                        <img
                            :src="item"
                            :alt="project.title"
                            class="w-full h-auto object-cover"
                        >
                    </UCarousel>

                    <ContentRenderer
                        :value="project"
                        class="prose prose-primary dark:prose-invert max-w-none"
                    />

                    <div
                        v-if="project.project_url"
                        class="mt-8 flex gap-4"
                    >
                        <UButton
                            :to="project.project_url"
                            target="_blank"
                            label="Visit Project"
                            trailing-icon="i-lucide-external-link"
                            size="lg"
                        />
                    </div>
                </UPageBody>
            </UContainer>
            <UContainer v-if="relatedProjects?.length">
                <UPageSection
                    title="Related Projects"
                    description="Check out other projects in similar categories."
                >
                    <template #links>
                        <UButton
                            to="/projects"
                            label="Back to All Projects"
                            variant="ghost"
                            color="neutral"
                            icon="i-lucide-arrow-left"
                            class="rounded-full px-4"
                        />
                    </template>
                    <UPageColumns class="gap-4 space-y-4">
                        <UBlogPost
                            v-for="project in relatedProjects"
                            :key="project.path"
                            :title="project.title"
                            :description="project.description"
                            :to="project.path"
                            variant="soft"
                            :image="project.images?.[0]"
                            :ui="{ header: 'aspect-auto', description: 'text-sm text-muted' }"
                        >
                            <template #badge>
                                <UBadge
                                    v-for="cat in project.category"
                                    :key="cat"
                                    :label="cat"
                                    color="neutral"
                                    variant="subtle"
                                    class="rounded-full px-3"
                                />
                            </template>
                        </UBlogPost>
                    </UPageColumns>
                </UPageSection>
            </UContainer>
        </template>
        <UEmpty
            v-else
            icon="i-lucide-folder-open"
            title="Project Not Found"
            description="The project you're looking for doesn't exist."
            variant="naked"
            class="h-[70vh]"
        >
            <template #actions>
                <UButton
                    to="/projects"
                    label="Back to Projects"
                />
            </template>
        </UEmpty>
    </UPage>
</template>
