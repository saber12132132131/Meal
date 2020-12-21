module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem-exclude')({
                        rootValue: 75,      // 新版本的是这个值
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 0,//设置要替换的最小像素值(3px会被转rem)。 默认 0
                        exclude: /node_modules/i
                    }),
                ]
            },
            sass: {
                prependData: `
                             @import "./src/assets/css/variable.scss";
                             @import "./src/assets/css/mixin.scss";
                            `
                 }
        }
    }
}