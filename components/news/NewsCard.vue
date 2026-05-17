<template>
    <div :id="`${news.id}`" class="news-card">
        <NuxtLink class="news-card__link" :to=props.news.code></NuxtLink>
        <div class=" news-card__arrow-logo">
            <img src="https://www.bsk-32.ru/img/icons/pink-arrow-r.svg"></img>
        </div>
        <div class="news-card__mask">
            <div class="news-card__poster">
                <div class="news-card__date">
                    <span>{{ props.news.date }}</span>
                </div>
                <div class="news-card__img">
                    <img :src=props.news.picture></img>
                </div>
            </div>
            <div class="news-card__content">
                <div class="news-card__title">
                    {{ props.news.title }}

                </div>
                <div class="news-card__tags">
                    <Tag v-for="tag in props.news.tags" :category_tag="tag.values[0]!" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import Tag from '~/components/commons/Tag.vue'
import type { NextNews } from '~/types/news';

const props = defineProps<{
    news: NextNews
}>()
</script>

<style lang="scss" scoped>
.news-card {
    height: 228rem;
    transition: 0.3s ease;
    cursor: pointer;
    position: relative;

    &__link {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    &__arrow-logo {
        position: absolute;
        right: 0;
        display: flex;
        width: 80rem;
        height: 80rem;
        justify-content: center;
        align-items: center;
        border-radius: 24rem;
        box-shadow: 0 4rem 12rem #1e1a230d, 0 2rem 6rem #5912731a, 0 1rem 2rem #3e4a5905;
        transition: 0.3s ease;

        img {
            width: 40%;
            height: min-content;
        }
    }

    &__mask {
        display: flex;
        background: #f3f3f3;
        width: 100%;
        height: 100%;
        mask-image: url(data:image/png;base64,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);
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
    }

    &__poster {
        padding: 4rem;
        position: relative;
    }

    &__date {
        position: absolute;
        top: 16rem;
        left: 16rem;
        font-size: 14rem;
        font-family: 'Onest';
        font-weight: 500;
        color: white;
        background-color: #5b4481cc;
        padding: 6rem 14rem;
        border-radius: 14rem;
        z-index: 10;
    }

    &__img {
        height: 100%;
        max-width: 320rem;
        overflow: hidden;
        border-radius: 24rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s ease;
        }
    }

    &__content {
        position: relative;
        padding: 16rem 24rem;
    }

    &__title {
        font-size: 24rem;
        width: 600rem;
        font-family: 'Unbounded';
        font-weight: 700;
        color: #423f3f;
        transition: 0.3s ease;
    }

    &__tags {
        column-gap: 8rem;
        display: flex;
        position: absolute;
        bottom: 20rem;
    }

    &:hover {
        filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15));

        .news-card__title {
            color: #ca2250;
        }

        .news-card__arrow-logo {
            box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
        }

        .news-card__img img {
            transform: scale(1.1);
        }
    }

}
</style>
