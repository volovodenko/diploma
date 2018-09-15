'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV !== 'production';
const publicPath = '/';

module.exports = {

    context: __dirname,

    devtool: devMode ? 'cheap-module-eval-source-map' : false,

    mode: devMode ? 'development' : 'production',

    performance: {
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
        hints: false
    },


    entry: [
        './react/index'
    ],

    output: {
        filename: 'static/js/[name].js',
        publicPath: publicPath,
        path: path.resolve(__dirname, 'public'),
    },

    stats: {
        children: false,
        entrypoints: false,
        modules: false,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'react'),
                // exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-0'],
                            plugins: ['transform-runtime', 'transform-decorators-legacy']
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true
                        }
                    }
                ]
            },


            {
                test: /\.s?[ac]ss$/,
                include: [
                    path.resolve(__dirname, 'react'),
                    path.resolve(__dirname, 'node_modules/font-awesome'),
                ],
                use: [

                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: !devMode,
                            modules: true,
                            localIdentName: '[folder]-[local]__[hash:base64:5]'
                        },

                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [

                                autoprefixer({
                                    browsers: [
                                        '>5%',
                                        'last 2 versions',
                                        'not ie < 9',
                                    ],


                                }),


                            ]
                        }

                    },

                    'sass-loader'
                ]
            },
            {
                test: /\.eot|ttf|woff2?(\?v=\d+\.\d+\.\d+)?|\w*font\w*\.svg$/,
                include: [
                    path.resolve(__dirname, 'react'),
                    path.resolve(__dirname, 'node_modules/font-awesome'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.jpe?g|png|svg$/,
                include: [
                    path.resolve(__dirname, 'react')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/images/[name].[ext]',
                    }
                }
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
        }),

        new CleanWebpackPlugin(['public/static'], {dry: devMode, verbose: !devMode})

    ]

};