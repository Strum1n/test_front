<template>
    <Breadcrumbs :title="title" />

    <div class='tags'>
        <Tag v-for="tag in props.tags" :category_tag="tag.values[0]!" />
    </div>
    <h1 class="news-popup__title">{{ props.title }}</h1>
    <div class="news-popup__date">{{ props.date }}</div>

</template>

<script setup lang="ts">

import Breadcrumbs from '~/components/commons/Breadcrumbs.vue'
import Tag from '~/components/commons/Tag.vue'
import type { NewsTagGroup } from '~/types/news';

const props = defineProps<{
    title: string
    tags: NewsTagGroup[]
    date: string
}>()
</script>

<style scoped>
.tags {
    margin-top: 24rem;
    display: flex;
    column-gap: 8rem;
}

.news-popup__title {
    margin-top: 14rem;
}

.news-popup__date {
    font-size: 16rem;
    margin-top: 16rem;
    letter-spacing: .64rem;
    border-bottom: 1px solid #cfcfcf;
    display: inline-block;
    font-family: 'Onest';
    color: #cfcfcf;
    font-weight: 500;
}
</style>