<template>
    <transition-group name="list">
        <template v-if="goods.length > 0">
            <good-item
                v-for="good in goods"
                :key="good.id"
                :good="good"
            ></good-item>
        </template>
        <div v-else>Loading...</div>
    </transition-group>
</template>

<script>
import GoodItem from "@/components/goodItem";

export default {
    components: { GoodItem },
    props: {
        goods: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.list-move {
    transition: transform 0.4s ease;
}
</style>
