import merge from 'webpack-merge'
import * as webpack from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');

import base from "./base";


const config: webpack.Configuration & Pick<webpack.WebpackOptionsNormalized, 'devServer'> = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      chunks: ['app']
    }),
  ],
}

export default merge(base, config)
