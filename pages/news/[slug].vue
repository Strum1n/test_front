<template>
  <div class="page-news">
    <NewsPopup :slug="slug" />
  </div>

</template>

<script setup>

const route = useRoute()
const slug = route.params.slug

</script>


<style scoped></style>