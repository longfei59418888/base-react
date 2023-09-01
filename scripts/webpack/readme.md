### 1. 配置模式(mode)

- 设置 process.env.NODE_ENV 值
- 选项
  - development
  - production

### 2. 配置入口/输出

- 入口
  - 单页面入口

```
entry:{
  [chunkName]:[entryPath]
}
```

- 输出
  - 清除输出
  - 缓存设置
    - 提取公共 runtime 文件
    - 设置模块标志符，不然每次都会变，或者提取 manifest 文件

### 配置 loader

- css 加载/ less 加载/ scss 加载
  - style-loader
  - css-loader
  - post-loader
  - scss-loader
- 静态文件加载(webpack5 内置资源模块) [output.assetModuleFilename:设置资源输出名称]
  - raw-loader 文件导入为字符串 (webpack5:asset/source)
  - url-loader 将文件作为 data URI (webpack5:asset/inline or asset)
  - file-loader 将文件发送到输出目录 (webpack5:asset/resource[png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf])
- 其他数据
  - csv-loader [csv|tsv]
  - xml-loader [xml]
  - json 解析
- 优化
  - thread-loader 耗时的 loader 单独使用一个线程

### 配置 plugin

- HtmlWebpackPlugin Html生成
  - 自动将生成的 bundle(css/js) 加入到 Html，多个会添加多个
  - options
    - title：标题
    - filename：生成的 html 名称
    - template：html 模版
    - chunks：需要添加的 chunk
    - excludeChunks：排除 chunk
- SplitChunksPlugin 代码分割
  - chunk 的分类
  - 共享的模块
  - node_modules 中的模块
  - 体积大于 20KB 模块
  - 按需加载模块
  - 初始化加载的模块
- HotModuleReplacementPlugin 热替换配置
- 优化工具
  - DllPlugin
    - 优化构建编译的速度，将改变不频繁的模块单独编译，预编译
  - html-webpack-externals-plugin
    - 工具包以 CDN 方式引用（直接嵌入到 html）
  - speed-measure-webpack-plugin
    - 分析构建时间
  - parallel
    - terser-webpack-plugin
    - css-minimizer-webpack-plugin
    - html-minimizer-webpack-plugin

### 优化
- Devtool：开发环境 eval-cheap-module-source-map
- 分析工具 speed-measure-webpack-plugin
- 体积分析工具 webpack-bundle-analyzer
- 工具包以 CDN 方式引用（直接嵌入到 html）
  - react
  - react-dom
- 并行压缩
  - parallel
- image-minimizer-webpack-plugin 图片压缩
- purgecss-webpack-plugin 删除无用css
- 设置缓存
  - 开发阶段使用 MemoryCachePlugin
  - build 阶段使用 IdleFileCachePlugin/hard-source-webpack-plugin
-  tree shaking 开启无用代码移除
- 压缩代码

### 其他
- ts 配置

### 配置热更新

### 检查生产信息
