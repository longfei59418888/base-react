import merge from 'webpack-merge'
import path from 'path'
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

import base from "./base";

const cwd = process.cwd()



const config: webpack.Configuration & Pick<webpack.WebpackOptionsNormalized, 'devServer'> = {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(cwd, 'dist'),
    filename: "[name].js", // string (default)
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
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(cwd, 'src/index.html'),
      chunks: ['app'],
      cache: true
    }),
  ],
}

export default merge(base, config)
