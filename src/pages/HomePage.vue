<template>
    <section class="goods">
        <div class="goods__head">
            <h1 class="goods__title">Добавление товара</h1>
            <div class="goods__select">
                <select v-model="selectFilter">
                    <option
                        v-for="filter in filters"
                        :key="filter.value"
                        :value="filter.value"
                    >
                        {{ filter.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="goods__body">
            <goods-form></goods-form>
            <div class="goods__view view-goods">
                <goods-list :goods="sortedGoods"></goods-list>
            </div>
        </div>
    </section>
</template>

<script>
import GoodsForm from '@/components/goodsForm.vue';
import { mapMutations, mapState, mapGetters } from 'vuex';
import GoodsList from '@/components/goodsList';

export default {
    name: 'Home-page',
    components: { GoodsList, GoodsForm },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            goods: (state) => state.goods.goods,
            filters: (state) => state.goods.filters,
            selectedFilter: (state) => state.goods.selectedFilter,
        }),
        ...mapGetters({
            sortedGoods: 'goods/sortedGoods',
        }),
        selectFilter: {
            get() {
                return this.selectedFilter;
            },
            set(value) {
                this.setFilter(value);
            },
        },
    },
    methods: {
        ...mapMutations({
            setFilter: 'goods/setSelectedFilter',
        }),
    },
    beforeUnmount() {
        localStorage.setItem('goods', JSON.stringify(this.$store.state));
    },
    created() {
        if (localStorage.getItem('goods')) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(localStorage.getItem('goods'))
                )
            );
        }
        window.addEventListener(
            'beforeunload',
            () => {
                localStorage.setItem(
                    'goods',
                    JSON.stringify(this.$store.state)
                );
            },
            { once: true }
        );
    },
};
</script>
<style lang="scss">
.goods {
    @include x-container();
    margin: 50px auto;
    // .goods__head
    &__head {
        display: flex;
        margin-bottom: 1rem;
        @media (max-width: 48em) {
            flex-direction: column;
            row-gap: 10px;
        }
        @media (min-width: 48em) {
            justify-content: space-between;
        }
    }
    // .goods__title
    &__title {
        font-size: 1.75rem;
        font-weight: 600;
    }
    // .goods__select
    &__select {
        position: relative;
        display: flex;
        align-items: center;
        height: 36px;
        min-width: 150px;
        background: var(--color-gray-light);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        color: var(--color-gray-semi-dark);
        select {
            width: 100%;
            height: 100%;
            padding: 0 26px 0 16px;
            appearance: none;
        }
        &::after {
            content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjQ4NSAxLjI0M0w0LjI0MyA0LjQ4NSAxIDEuMjQzIiBzdHJva2U9IiNCNEI0QjQiLz48L3N2Zz4=');
            position: absolute;
            right: 13px;
        }
    }
    // .goods__body
    &__body {
        display: flex;
        column-gap: 0.9375rem;
        @media (max-width: 48em) {
            flex-direction: column;
            row-gap: 30px;
        }
        @media (min-width: 48em) {
            align-items: flex-start;
        }
    }
    // .goods__form
    &__form {
        @media (max-width: 48em) {
            width: 100%;
        }
        @media (min-width: 48em) {
            flex: 0 0 332px;
        }
    }
    // .goods__view
    &__view {
        @media (min-width: 48em) {
            flex: 1 1 auto;
        }
    }
}
.form-goods {
    padding: 24px;
    background: var(--color-gray-light);
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    // .form-goods__field
    &__field {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        label {
            margin-bottom: 0.25rem;
            font-size: 0.625rem;
            color: var(--color-black-light);
            letter-spacing: -0.02em;
        }
        input,
        textarea {
            font-size: 0.75rem;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            color: var(--color-black-light);
            background: var(--color-gray-light);
            &::placeholder {
                color: var(--color-gray-semi-dark);
            }
        }
        input {
            height: 36px;
            padding: 0 16px;
        }
        textarea {
            min-height: 6.25rem;
            padding: 10px 16px;
            resize: vertical;
        }
        &._required {
            label {
                &::after {
                    content: '';
                    display: inline-block;
                    vertical-align: top;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: var(--color-orange);
                }
            }
        }
        &._error {
            input,
            textarea {
                border: 1px solid var(--color-orange);
            }
        }
    }
    // .form-goods__errors
    &__errors {
        position: absolute;
        top: 100%;
        margin-top: 4px;
        font-size: 0.5rem;
        color: var(--color-orange);
        letter-spacing: -0.02em;
    }
    // .form-goods__submit
    &__submit {
        width: 100%;
        height: 36px;
        margin-top: 0.5rem;
        border-radius: 10px;
        color: var(--color-gray-semi-dark);
        background: #eeeeee;
        cursor: not-allowed;

        &._success {
            color: var(--color-white);
            background: var(--color-green-light);
            cursor: pointer;
        }
    }
}
.view-goods {
    display: grid;
    gap: 16px;
    @media (max-width: 68.75em) {
        justify-content: center;
    }
    grid-template-columns: repeat(auto-fill, 332px);
    @media (min-width: 48em) {
    }
    // .view-goods__item
    &__item {
        position: relative;
        background: var(--color-gray-light);
        z-index: 1;
        &:hover {
            .view-goods__remove {
                opacity: 1;
            }
        }
    }
    // .view-goods__img
    &__img {
        height: 200px;
    }
    // .view-goods__info
    &__info {
    }
    // .view-goods__remove
    &__remove {
        position: absolute;
        top: -8px;
        right: -8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        color: var(--color-white);
        background: var(--color-orange);
        opacity: 0;
        z-index: 2;
        transition: all 0.3s ease-in;
        &:focus {
            opacity: 1;
        }
    }
}
</style>
