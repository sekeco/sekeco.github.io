<script lang="ts" setup>

</script>

<template>
    <UModal title="Let's Collaborate" :ui="{ body: 'p-0!' }">
        <slot />
        <template #body>
            <iframe src="https://auto.sekeco.work/form/bf5eb21b-dd43-4a72-ba50-c5531dc10674" width="100%" height="680" frameborder="0"></iframe>
        </template>
    </UModal>
</template>