<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const category = useRouteQuery<string | undefined>('category', undefined)

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').where('category', 'LIKE', `%${category.value || ''}%`).all(), {
    watch: [category]
})

const categories = computed<ButtonProps[]>(() => Enum.ProjectCategory.map(_category => ({
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
                title="Our Projects"
                description="Explore our portfolio of successful projects across various industries. Each project showcases our commitment to quality, creative problem-solving, and technical innovation."
                :ui="{ links: 'gap-1 flex-wrap' }"
            >
                <template #links>
                    <UButton
                        :variant="category === undefined ? 'solid' : 'outline'"
                        color="neutral"
                        icon="i-lucide-list"
                        label="All Projects"
                        @click="category = undefined"
                    />
                    <UButton
                        v-for="(category, index) in categories"
                        :key="index"
                        v-bind="category"
                    />
                </template>
                <Transition
                    name="fade"
                    mode="out-in"
                >
                    <UPageColumns
                        v-if="projects?.length"
                        class="gap-4 space-y-4"
                    >
                        <TransitionGroup name="fade">
                            <UBlogPost
                                v-for="project in projects"
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
                        </TransitionGroup>
                    </UPageColumns>
                    <UEmpty
                        v-else
                        icon="i-lucide-search"
                        title="No Projects Found"
                        description="No projects found in this category."
                        variant="naked"
                    />
                </Transition>
            </UPageHero>
        </UContainer>
    </UPage>
</template>
