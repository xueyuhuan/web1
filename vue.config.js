module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/web1/' :'/',
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
