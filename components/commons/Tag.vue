<template>
    <div class="tag-cat" :color="props.category_tag.color">
        <div v-if="props.category_tag.src" class="tag-cat__icon">
            <img :src=props.category_tag.src></img>
        </div>
        <span>
            {{ props.category_tag.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
import type { NewsTag } from '~/types/news';


const props = defineProps<{
    category_tag: NewsTag
}>()

</script>

<style lang="scss" scoped>
.tag-cat {
    column-gap: 3rem;
    display: flex;
    border: 1rem solid;
    border-radius: 16rem;
    padding: 4rem 12rem;
    font-size: 14rem;
    font-family: 'Onest';

    &[color="blue"] {
        border-color: #5b4481;
        color: #5b4481;
    }

    &[color="red"] {
        border-color: #ca2250;
        color: #ca2250;
    }

    &__icon {
        width: 18rem;
        height: 18rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>