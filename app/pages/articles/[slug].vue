<script lang="ts" setup>
const route = useRoute()
const slug = computed(() => `/articles/${route.params.slug}`)

const { data: article } = await useAsyncData(`article-${route.params.slug}`, () =>
    queryCollection('articles').path(slug.value).first()
)

const { data: relatedArticles } = await useAsyncData(`related-articles-${route.params.slug}`, async () => {
    if (!article.value?.category) return []

    return await queryCollection('articles')
        .where('path', '<>', slug.value)
        .where('category', '=', article.value.category)
        .order('published', 'DESC')
        .limit(3)
        .all()
})

useSeoMeta({
    title: article.value?.title,
    description: article.value?.description,
    ogTitle: article.value?.title,
    ogDescription: article.value?.description,
    ogImage: article.value?.image,
    twitterCard: 'summary_large_image'
})
</script>

<template>
    <UPage>
        <GridBackground class="absolute inset-0 -z-1" />
        <template v-if="article">
            <UContainer class="max-w-4xl">
                <UPageHeader
                    :title="article.title"
                    :description="article.description"
                >
                    <template #headline>
                        <UBadge
                            :label="article.category"
                            color="neutral"
                            variant="subtle"
                            class="rounded-full px-3"
                        />
                    </template>
                </UPageHeader>
                <UPageBody>
                    <img
                        :src="article.image"
                        :alt="article.title"
                        class="w-full h-auto object-cover"
                    >
                    <ContentRenderer
                        :value="article"
                        class="prose prose-primary dark:prose-invert max-w-none"
                    />
                </UPageBody>
            </UContainer>
            <UContainer v-if="relatedArticles?.length">
                <UPageSection
                    title="Related Articles"
                    description="Check out other articles in similar categories."
                >
                    <template #links>
                        <UButton
                            to="/articles"
                            label="Back to All Articles"
                            variant="ghost"
                            color="neutral"
                            icon="i-lucide-arrow-left"
                            class="rounded-full px-4"
                        />
                    </template>
                    <UPageColumns class="gap-4 space-y-4">
                        <UBlogPost
                            v-for="article in relatedArticles"
                            :key="article.path"
                            :title="article.title"
                            :description="article.description"
                            :to="article.path"
                            variant="soft"
                            :image="article.image"
                            :ui="{ header: 'aspect-auto', description: 'text-sm text-muted' }"
                        >
                            <template #badge>
                                <UBadge
                                    :label="article.category"
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
