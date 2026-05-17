<template>
    <div class="news-popup-header">
        <Breadcrumbs :title="title" />
        <div class='news-popup-header__tags'>
            <Tag v-for="tag in props.tags" :category_tag="tag.values[0]!" />
        </div>
        <h1 class="news-popup-header__title">{{ props.title }}</h1>
        <div class="news-popup-header__date">{{ props.date }}</div>
    </div>
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

<style lang="scss" scoped>
.news-popup-header {
    &__tags {
        margin-top: 24rem;
        display: flex;
        column-gap: 8rem;
    }

    &__title {
        margin-top: 14rem;
    }

    &__date {
        font-size: 16rem;
        margin-top: 16rem;
        letter-spacing: .64rem;
        border-bottom: 1px solid #cfcfcf;
        display: inline-block;
        font-family: 'Onest';
        color: #cfcfcf;
        font-weight: 500;
    }
}
</style>