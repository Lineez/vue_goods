export default {
    namespaced: true,
    state: () => ({
        goods: [
            {
                id: 1,
                img: "https://via.placeholder.com/332x200",
                url: "javascript:void(0);",
                name: "Наименование товара",
                content:
                    "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price: 100000,
            },
            {
                id: 2,
                img: "https://via.placeholder.com/332x200",
                url: "javascript:void(0);",
                name: "товара товара",
                content:
                    "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price: 1000,
            },
            {
                id: 3,
                img: "https://via.placeholder.com/332x200",
                url: "javascript:void(0);",
                name: "Наименование Наименование",
                content:
                    "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price: 10000,
            },
            {
                id: 4,
                img: "https://via.placeholder.com/332x200",
                url: "javascript:void(0);",
                name: "Наименование товара",
                content:
                    "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price: 10000,
            },
        ],
        selectedFilter: "min",
        filters: [
            {
                name: "По цене min",
                value: "min",
            },
            {
                name: "По цене max",
                value: "max",
            },
            {
                name: "По наименованию",
                value: "name",
            },
        ],
    }),
    getters: {
        sortedGoods(state) {
            return state.goods.sort((a, b) => {
                if (state.selectedFilter === "min") {
                    return a.price - b.price;
                } else if (state.selectedFilter === "max") {
                    return b.price - a.price;
                } else {
                    return a[state.selectedFilter]?.localeCompare(
                        b[state.selectedFilter]
                    );
                }
            });
        },
    },
    mutations: {
        setGood(state, good) {
            state.goods.push(good);
        },
        removeGood(state, good) {
            state.goods = state.goods.filter((item) => item.id !== good.id);
        },
        setSelectedFilter(state, value) {
            state.selectedFilter = value;
        },
    },
};
