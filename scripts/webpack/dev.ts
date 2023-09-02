import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import * as webpack from 'webpack'
import merge from 'webpack-merge'

import base from './base'

const cwd = process.cwd()

const config: webpack.Configuration &
  Pick<webpack.WebpackOptionsNormalized, 'devServer'> = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(cwd, 'dist'),
    filename: '[name].js', // string (default)
    pathinfo: false,
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(cwd, 'scripts/.cache/webpack/local'),
  },
  devServer: {
    static: path.resolve(cwd, 'dist'),
    compress: true,
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf])/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(cwd, 'src/index.html'),
      chunks: ['app'],
      cache: true,
    }),
    // cache 代替
    // new webpack.DllReferencePlugin({
    //   manifest: resolve(cwd, 'scripts/.cache/webpack/dll/manifest.json')
    // }),
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: resolve(cwd, 'scripts/.cache/webpack/dll/vendor.dll.js')
    // })
  ],
}

export default merge(base, config)
