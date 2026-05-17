<template>
  <div v-if="news" class="news-popup">
    <NewsPopupHeader :title="news.title" :tags="news.tags" :date="news.date.replaceAll('-', '.')" />
    <div class="news-popup__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra sem quis
      efficitur pulvinar. Pellentesque consectetur ante ligula, suscipit tempor diam consequat sit amet. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. In sed
      lectus ullamcorper, commodo ex nec, ultricies velit. Morbi et neque quis est molestie laoreet ac fringilla purus.
      Donec interdum viverra metus. Aenean aliquet orci aliquet nunc interdum imperdiet. Aliquam erat volutpat. </div>
    <div v-if="nextNews" class="news-popup__next-news">
      <h2>Следующая статья</h2>
      <NewsCard :news="nextNews" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsPopupHeader from '~/components/news/NewsPopupHeader.vue'
import NewsCard from '~/components/news/NewsCard.vue'
import type { News, NewsApiResponse, NextNews } from '~/types/news';
import { useFetch } from 'nuxt/app';
import { computed } from 'vue';


const props = defineProps<{
  slug: string
}>()

const { data, pending, error, refresh } = useFetch<NewsApiResponse>(
  `https://bsk-admin-test.testers-site.ru/api/news/${props.slug}`
)

const news = computed<News | null>(() => {
  if (!data.value || data.value.status !== 'success') {
    return null
  }
  return data.value.data.result
})

const nextNews = computed<NextNews | null>(() => {
  if (!data.value || data.value.status !== 'success') {
    return null
  }
  return data.value.data.result.next
})


if (error.value?.statusCode === 404) {
  throw createError({ statusCode: 404, message: 'Новость не найдена' })
}
</script>

<style lang="scss" scoped>
.news-popup {
  background: #fff;
  height: calc(100% - 77rem);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 145rem;
  width: calc(100% - 550rem);
  will-change: transform;
  z-index: 2;

  &__content {
    font-size: 16rem;
    margin-top: 32px;
    color: #717070;
    font-family: 'Onest';
  }

  &__next-news {
    h2 {
      margin: 32rem 0;
    }
  }
}
</style>
<style>
html {
  font-size: .0625vw;
  margin: 0;
}

h1 {
  font-size: 48rem;
}

h2 {
  font-size: 38rem;
}

a {
  text-decoration: none;
  outline: none;
  color: #423f3f
}

h1,
h2,
h3,
h4 {
  font-family: 'Unbounded';
  font-weight: 700;
  color: #423f3f;
  margin: 0;
}
</style>