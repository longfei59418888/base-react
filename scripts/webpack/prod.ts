import merge from 'webpack-merge'
import * as webpack from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');

import base from "./base";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";


const config: webpack.Configuration & Pick<webpack.WebpackOptionsNormalized, 'devServer'> = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 9000,
  },
  plugins: [
    // build 时候会进行 ts 检查，加入插件后 ts-loader transpileOnly 默认为true
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ]
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: '管理输出',
  //     chunks: ['app']
  //   }),
  // ],
}

export default merge(base, config)
