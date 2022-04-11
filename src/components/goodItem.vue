<template>
    <a :href="good.url" class="view-goods__item">
        <div class="view-goods__img">
            <img :src="good.img" :alt="good.name" />
        </div>
        <div class="view-goods__info info-goods">
            <div class="info-goods__name">{{ good.name }}</div>
            <div class="info-goods__desc">{{ good.content }}</div>
            <div class="info-goods__price">
                {{ good.price.toLocaleString("fr") }} руб.
            </div>
        </div>
        <button
            @click="removeGood(good)"
            type="button"
            class="view-goods__remove"
        >
            <remove-svg></remove-svg>
        </button>
    </a>
</template>

<script>
import RemoveSvg from "@/components/svg/removeSvg.vue";
import { mapMutations } from "vuex";

export default {
    components: { RemoveSvg },
    props: {
        good: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removeGood(good) {
            this.remove(good);
        },
        ...mapMutations({
            remove: "goods/removeGood",
        }),
    },
};
</script>

<style lang="scss">
.info-goods {
    display: flex;
    flex-direction: column;
    height: calc(100% - 200px);
    padding: 16px 16px 24px;
    color: var(--color-gray-dark);
    // .info-goods__name
    &__name {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
    }
    // .info-goods__desc
    &__desc {
        flex: 1 1 auto;
        margin-bottom: 2rem;
        font-size: 1rem;
    }
    // .info-goods__price
    &__price {
        font-size: 1.5rem;
        font-weight: 600;
    }
}
</style>
