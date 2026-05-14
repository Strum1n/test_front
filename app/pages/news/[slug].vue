<template>
  <div class="page-news">
    <NewsPopupLast :slug="slug"/>
  </div>

</template>

<script setup>

const route = useRoute()
const slug = route.params.slug 
const { 
  data: news, 
  pending, 
  error 
} = useFetch(`https://bsk-admin-test.testers-site.ru/api/news/${slug}`)

</script>


<style  scoped>
.page-news {
  padding-top: 114rem;
}
</style>