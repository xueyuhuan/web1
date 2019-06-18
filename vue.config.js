module.exports = {
    lintOnSave: false,
    css:{
        loaderOptions:{
            sass:{
                data:`@import "@/assets/scss/_mixin.scss";`
            }
        }
    },
    devServer:{
        port:9000,
    }
}
