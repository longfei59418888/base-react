## 基础搭建

> 从零开始搭建项目

### 环境配置

- node 版本锁定 (基于 nvm 设置)
  - 添加 .nvmrc
    ```
    18.15.0
    ```
    > bashrc：每次启动 bash 时候会执行该文件下的命令  
    bash_profile：登陆后执行该文件下的命令
  - package.json 添加 engines
    ```
    engines:{
      node:">18.5"
    }
    ```
- 版本控制器配置
  - 添加 .yarnrc 配置额外的 yarn 属性
    - 设置镜像源
    ```
    registry "https://registry.npm.taobao.org"
    sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
    phantomjs_cdnurl "http://cnpmjs.org/downloads"
    electron_mirror "https://npm.taobao.org/mirrors/electron/"
    sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
    profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
    chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
    ```
- git 忽略文件
  - 添加 .gitignore 文件
- 编辑器配置
  - 添加 .editorconfig 文件
    - indent_style：设置缩进为 tab 或 space
    - tab_width：设置 tab 所占列数。默认是indent_size
    - end_of_line：设置换行符，值为lf、cr和crlf
    - charset：设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，
    - trim_trailing_whitespace：设为 true 表示会去除行尾的空白字符
    - insert_final_newline：设为 true 表示使文件以一个空白行结尾
- README.md 文件

### 基础技术栈

1. 框架 React 全家桶

  ```
  yarn add React React-dom @types/react @types/react-dom @babel/preset-react
  yarn add zustand
  yarn add react-router
  ```

- 添加 @babel/preset-react 到 .babelrc 中

2. 开发环境搭建

  ```
   yarn add tyepscript @babel/preset-typescript
   yarn add webpack
   yarn add babel-loader @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime-corejs3
   yarn add cross-env
  ```

- 配置 typescript
  - 添加 tsconfig.json
    - include
    - exclude
    - compilerOptions
      - 类型检查
      - 引用模块配置【路径、解析方式等】
  - 添加 ts-loader 到 webpack 模块中
  - 添加 ForkTsCheckerWebpackPlugin 到 webpack 插件中
- 配置 babel
  - 添加配置 .babelrc
  - 添加预设 @babel/preset-env
  - 添加 babel-loader 到 webpack 模块中
- webpack
  - base
    - 配置入口
    - resolve
      - extensions
    - 配置模块
      - ts、tsx、jsx、js [ts-loader、babel-loader]
      - scss、module.scss、css [style-loader、css-loader、post-loader、sass-loader]
        - postcss 配置 (autoprefixer、postcss-px2rem、tailwindcss)
      - 图片资源（png|svg|jpg|jpeg|gif）[file-loader、url-loader]
        - asset
        - asset/source
        - asset/inline
  - dev
    - mode: development
    - devtool: inline-source-map
    - devServer
      - host:port
      - hot: v4 之后开启热替换
        - module.hot 代码中使用 api 开启热替换
      - proxy 设置代理
    - 模块配置
      - 静态资源配置
    - 插件配置
      - HtmlWebpackPlugin
      - DefinePlugin
      - copy-webpack-plugin
      - CssMinimizerWebpackPlugin
      - ImageMinimizerWebpackPlugin
      - MiniCssExtractPlugin
      - TerserWebpackPlugin
    - 优化
      - Cache
      - DLL
      - 最小化输出 chunk
      - 避免其他优化removeAvailableModules、removeEmptyChunks、splitChunks
      - 禁止输出信息 output.pathinfo


3. 代码质量控制

  ```
  yarn add stylelint prettier eslint
  yarn add husky
  yarn add jest
  ```
- eslint

4. 其他工具

  ```
  yarn add storybook 建立文档
  yarn add tailwindcss 
  ```

### 搭建步骤

1. 环境准备

- 配置 webpack
  - 入口位置
  - output 配置
  - 开发工具 webpack-dev-server
  - 


