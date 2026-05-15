<template>
    <div class="tag-cat" :color="props.category_tag.color">
        <div v-if="props.category_tag.src" class="tag-cat-icon">
            <img class="tag-cat-icon" :src=props.category_tag.src></img>
        </div>
        <span class="tag-cat-text">
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

<style scoped>
.tag-cat {
    column-gap: 3rem;
    display: flex;
    border: 1rem solid;
    border-radius: 16rem;
    padding: 4rem 12rem;
    font-size: 14rem;
    font-family: 'Onest';
}

.tag-cat-icon {
    width: 18rem;
    height: 18rem;

}

.tag-cat[color="blue"] {
    border-color: #5b4481;
    color: #5b4481;
}

.tag-cat[color="red"] {
    border-color: #ca2250;
    color: #ca2250;
}
</style>