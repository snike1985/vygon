const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pulugin_jQuery = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});
const plugin_Optimaze = new webpack.optimize.UglifyJsPlugin();
const plugin_ExtractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index_page: './index_page',
        ui_page: './ui_page'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        name: '[name].[ext]',
                        minimize: true
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: plugin_ExtractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.(woff|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    // outputPath: 'fonts/'
                },
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                },
            }
        ]
    },
    plugins: [
        plugin_ExtractSass,
        pulugin_jQuery,
        plugin_Optimaze,
        new CopyWebpackPlugin([
            { from: 'pic/', to: 'pic/' },
            { from: 'img/', to: 'img/' }
        ])
    ],
    node: {
        fs: 'empty'
    },
    devtool: 'eval',
    resolve: {
        moduleExtensions: ['node modules'],
        extensions: ['.js' ]
    },
    watch: true,
    watchOptions: {
        aggregationTimeout: 100
    }
};