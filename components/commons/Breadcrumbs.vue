<template>
    <div class="breadcrumbs">
        <NuxtLink class="breadcrumbs__item" to="/">ГЛАВНАЯ</NuxtLink>
        <NuxtLink class="breadcrumbs__item" to="/news">НОВОСТИ</NuxtLink>
        <span class="breadcrumbs__item breadcrumbs__item_inactive">{{ props.title }}</span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string
}>()

</script>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    font-family: 'Onest';
    color: black;

    &__item {
        font-size: 15.5rem;
        color: inherit;
        letter-spacing: .64rem;
        font-weight: 500;
        text-transform: uppercase;

        &:not(:last-child)::after {
            content: "•";
            padding: 0 8rem;
        }

        &_inactive {
            opacity: .4;
        }
    }
}
</style>