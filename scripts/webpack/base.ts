import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    app: "./src/app.ts"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@": '/src/'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 关闭检查
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /\.module\.scss$/
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf])/,
        // file-loader
        type: "asset/resource"
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)/,
      //   type: 'asset',
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 4 * 1024
      //     }
      //   },
      //   resourceQuery: /raw/,
      // }
    ]
  },
  plugins: []

}

export default config;
