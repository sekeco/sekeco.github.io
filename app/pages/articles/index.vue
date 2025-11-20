<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const category = useRouteQuery<string | undefined>('category', undefined)

const { data: articles } = await useAsyncData('articles', () =>
    queryCollection('articles')
        .where('category', 'LIKE', `%${category.value || ''}%`)
        .order('published', 'DESC')
        .all(), {
    watch: [category]
})

const categories = computed<ButtonProps[]>(() => Enum.ArticleCategory.map(_category => ({
    label: _category.title,
    variant: category.value === _category.title ? 'solid' : 'outline',
    icon: _category.icon,
    ui: {
        leadingIcon: `text-${_category.color}`
    },
    onclick: () => category.value = _category.title
})))
</script>

<template>
    <UPage>
        <GridBackground class="absolute inset-0 -z-1" />
        <UContainer>
            <UPageHero
                title="Articles & Insights"
                description="Stay updated with our latest articles, insights, and in-depth content. We share case studies, product updates, design practices, and industry trends."
                :ui="{ links: 'gap-1 flex-wrap' }"
            >
                <template #links>
                    <UButton
                        :variant="category === undefined ? 'solid' : 'outline'"
                        color="neutral"
                        icon="i-lucide-list"
                        label="All Articles"
                        @click="category = undefined"
                    />
                    <UButton
                        v-for="_category in categories"
                        :key="_category.label"
                        v-bind="_category"
                    />
                </template>
            </UPageHero>
            <Transition
                name="fade"
                mode="out-in"
            >
                <UPageGrid v-if="articles && articles.length > 0">
                    <TransitionGroup name="fade">
                        <UBlogPost
                            v-for="(article, index) in articles"
                            :key="index"
                            :to="article.path"
                            :title="article.title"
                            :description="article.description"
                            :date="article.published"
                            :image="article.image"
                            :badge="{ label: article.category }"
                            :authors="[{ name: article.author }]"
                        />
                    </TransitionGroup>
                </UPageGrid>
                <UEmpty
                    v-else
                    title="No articles found"
                    description="Try selecting a different category or check back later for new content."
                    icon="i-lucide-inbox"
                    variant="naked"
                />
            </Transition>
        </UContainer>
    </UPage>
</template>
