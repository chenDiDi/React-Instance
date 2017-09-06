# Simulate the entire process of building a project
// 简单的基于shell脚本的构建和发布流程

### Project directory structure
- css
    - app.css
    - components
- js
    - build
    - source
        - app.js
        - components
- scripts
- index.html
- package.json

******

</* 大部分应用初始加载单一.css和.js文件 当应用规模达到一定程度，可建立一个脚本/资源加载器，按需加载 */>
</* 构建过程：css拼接，JavaScript转译， JavaScript打包 */>
</* 手动构建命令文件：scripts/build.sh ;自动监听文件变化进行构建命令： sh scripts/watch.sh */>
</* 发布过程：deploy.sh */>