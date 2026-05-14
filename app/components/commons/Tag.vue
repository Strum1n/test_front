<template>
    <div class="tag-cat" :color="props.category_tag.values[0].color">
        {{ props.category_tag.values[0].name }}
    </div>
</template>

<script setup lang="ts">

const props=defineProps<{
    category_tag:string[]
}>()

</script>

<style scoped>

.tag-cat{
    border: 1rem solid;
    border-radius: 16rem;
    padding: 4rem 12rem;
    font-size: 15rem;
    font-family: 'Onest';
}
.tag-cat[color="blue"]{
    border-color:#5b4481;
    color:#5b4481;
}
.tag-cat[color="red"]{
    border-color:#ca2250;
    color:#ca2250;
}
</style>