const webpack = require('webpack')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    pages: {
        index: {
            entry: 'src/main.js',
            template: '/public/index.html',
            filename: 'index.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // ajaxTest: 'src/modules/ajax-test/ajax.js'
    },
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: false,
    configureWebpack: (config) => {
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery"
                })
            ]
        }
    },
    chainWebpack: (config) => {
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization.splitChunks({
            cacheGroups: {}
        });
        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        config.module
            .rule('eslint')
            .exclude
            .add('/node_modules/@vue/cli-service/lib')
            // .add('C:\\wy\\OldPrj\\gitprj\\Introduction\\general-blog\\node_modules\\@vue\\cli-service\\lib')
            .end()
    },
    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
        // 是否开启支持 foo.module.css 样式
        modules: true,
        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: true,
        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 9092,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {},
        overlay: {
            warnings: true,
            errors: true
        }
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions: {}
};
