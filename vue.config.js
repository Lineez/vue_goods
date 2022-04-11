module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/default/_mixin.scss";`,
            },
        },
    },
    publicPath: process.env.NODE_ENV === "production" ? "/vue_goods/" : "/",
};
