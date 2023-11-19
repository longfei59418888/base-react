- 配置cli
    - 安装 tailwindcss
    - 添加配置文件 tailwind.config.js
  ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {},
    },
    plugins: [],
    }
  ```
    - CSS 文件中通过 @tailwind 添加每一个 Tailwind 功能模块
  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
    - 监听编译
        - npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

- postCss 配置
  - 安装 tailwindcss
  - PostCSS 配置中添加 tailwindcss
  - 添加配置文件 tailwind.config.js
    - 添加配置文件 tailwind.config.js
  ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {},
    },
    plugins: [],
    }
  ```
  - CSS 文件中通过 @tailwind 添加每一个 Tailwind 功能模块
  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
