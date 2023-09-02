## NPM 项目配置文件 package.json

> package.json 是前端每个项目都有的 json 文件，位于项目的根目录  
> 用于配置项目信息

### 配置内容

- 描述配置
- 文件配置
- 脚本配置
- 依赖配置
- 发布配置
- 系统配置
- 第三方配置

### 描述配置

- name(名称)：项目的名字
- version(版本)：项目版本 **【vMajor.Minor.Patch】**
    - Major 主版本号
    - Minor 次版本号
    - Patch 修订版本号
- description(描述)：项目简介
- author(作者)：作者
- contributors(贡献者)：贡献者
- repository(仓库)：仓库地址

### 文件配置

- files：指定发布 npm 包的时候需要发布的内容
- type：包模块类型
    - module：ES 模块
    - commonjs
- main：项目入口文件
- browser：指定 web 环境下，项目入口文件
- module：ES 模块的黄静下，项目入口
- exports：导出文件，在使用 require、import 的时候会更具使用的不同导入方法，导出不同的文件

### 脚本配置

- scripts
  - https://npm.nodejs.cn/cli/v9/using-npm/scripts#npm-install
  - bin
  - config：设置 scripts 里的脚本在运行时的参数
      - process.env.npm_package_config_port 可以访问 config.port 属性
  - 内置脚本功能
    - 前后脚本：在某个脚本前面加上[pre]或者[post],会在执行脚本的前后执行
    - 生命周期脚本：
      - prepare：本地 npm install 上运行、在 npm publish 和 npm pack 期间、
      - dependencies：修改依赖
  - 生命周期
    - prepare
    - preinstall
    - install
    - postinstall
    - prepublish
    - preprepare
    - prepare
    - postprepare
  

### 依赖配置

- dependencies
- devDependencies
- peerDependencies：同伴依赖

```
"peerDependencies": {
  "react": ">=16.9.0",
  "react-dom": ">=16.9.0"
}
```

- optionalDependencies
- overrides：重写依赖项目的依赖版本等

### 发布配置

### 系统配置

- engines：对node、npm、yarn 包管理器要求
- os：指定项目对哪些操作系统支持

### 第三方设置

- types或typings：指定 ts 的入口文件
- browserslist：浏览器兼容设置
- sideEffects：这只某些文件有作用
- lint-staged：
