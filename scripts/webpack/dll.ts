import { resolve } from 'path'
import * as webpack from 'webpack'
// import merge from 'webpack-merge'

const cwd = process.cwd()

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    // 输出一个dll文件夹
    path: resolve(cwd, 'scripts/.cache/webpack/dll'),
    library: '[name]_library',
    // 输出文件名称
    filename: '[name].dll.js',
  },
  plugins: [
    // 将上面的第三方库分离出来
    new webpack.DllPlugin({
      // manifest.json是构建的js包的映射关系文件
      path: resolve(cwd, 'scripts/.cache/webpack/dll/manifest.json'),
      // 对应上面的library
      name: '[name]_library',
    }),
  ],
}

export default config
