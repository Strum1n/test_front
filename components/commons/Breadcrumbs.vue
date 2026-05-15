<template>
    <div class="breadcrumbs">
        <a class="breadcrumbs__item" href="/">ГЛАВНАЯ</a>
        <a class="breadcrumbs__item" href="/news">НОВОСТИ</a>
        <span class="breadcrumbs__item inactive">{{ props.title }}</span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string
}>()

</script>
<style scoped>
.breadcrumbs {
    display: flex;
    font-family: 'Onest';
    color: black;
}

.breadcrumbs__item {
    font-size: 15.5rem;
    color: inherit;
    letter-spacing: .64rem;
    font-weight: 500;
    text-transform: uppercase;

}

.breadcrumbs__item:not(:last-child)::after {
    content: "•";
    padding: 0 8rem;
}

.breadcrumbs__item:last-child {
    opacity: 0.4;
}
</style>