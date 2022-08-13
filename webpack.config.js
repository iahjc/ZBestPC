const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9001,
        hot: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            }),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            // 文件多大会分割文件 大于300kb
            minSize: 300*1024,
            chunks: 'all',
            name: 'common',
            // 对库单独进行打包
            cacheGroups: {
                jquery: {
                    name: 'jquery',
                    test: /jquery/,
                    chunks: 'all'
                }
            }

        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$i/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.ejs/,
                loader: 'ejs-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['login']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/img'),
                to: path.resolve(__dirname, './dist/img')
            }]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].chunk.css'
        }),
        new CleanWebpackPlugin()
    ]
}