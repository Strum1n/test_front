<template>
      <Breadcrumbs :news_title="title"/>
      
    <div class='tags'>
    <Tag v-for="tag in props.tags" :category_tag="tag"/>
    </div>
    <h1 class="news-popup__title">{{ props.title }}</h1>
    <div class="news-popup__date">{{ props.date }}</div>
  
</template>

<script setup lang="ts">

import Breadcrumbs from '~/components/commons/Breadcrumbs.vue'
import Tag from '~/components/commons/Tag.vue'

const props = defineProps<{
  title: string
  tags: string []
  date: string
}>()
</script>

<style scoped>
.news-popup__title{
    font-family: 'Unbounded';
    line-height: 56rem;
}
h1{
    font-size: 48rem;
    margin: 0;
    margin-top: 16rem;
    color:#423f3f;
}
h2{
    font-size: 38rem;
    margin: 0;
    margin-top: 16rem;
    color:#423f3f;
}
.tags{
    margin-top: 24rem;
    display: flex;
    column-gap:8rem;
}

.news-popup__date{
    font-size: 16rem;
    margin-top: 16rem;
    letter-spacing: .64rem;
    border-bottom: 1px solid #cfcfcf;
    display: inline-block;
    font-family: 'Onest';
    color:#cfcfcf;
    font-weight: 500;
}
</style>