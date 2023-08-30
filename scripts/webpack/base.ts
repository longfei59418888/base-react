const path = require('path');
import * as webpack from 'webpack';



const cwd = process.cwd()

const config: webpack.Configuration = {
  mode: "development",
  entry: {
    app: "./src/app.ts"
  },
  output: {
    path: path.resolve(cwd, "dist"),
    filename: "[name].[contenthash].js", // string (default)
    // publicPath: "/assets/", // string
    compareBeforeEmit: true,
    clean: true,
  },
  module: {
    rules: []
  }

}

export default config;
