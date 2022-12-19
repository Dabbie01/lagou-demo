# lagou-demo仿拉勾网站

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 项目目录结构
├── node_modules &nbsp; &nbsp; &nbsp; &nbsp;# 相关依赖
<br>
├── public &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;# 静态资源
<br>
│   │── favicon.ico &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;# favicon图标
<br>
│   └── index.html &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# html模板
<br>
├── src &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 源代码
<br>
│   ├── assets &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 空
<br>
│   ├── components&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; # 全局公用组件
<br>
│   │   ├── body-footer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# 首页主体区域底部部分
<br>
│   │   ├── body-middle &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# 首页主题区域中间部分
<br>
│   │   ├── body-top &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 首页主题区域顶部部分
<br>
│   │   ├── city-select &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# 顶部导航区域选择城市
<br>
│   │   ├── company-list &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# 公司页面中的公司列表
<br>
│   │   ├── footer-bar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # 首页底部
<br>
│   │   ├── head-bar &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 首页头部区域
<br>
│   │   ├── job-recommend &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;# 职位页面中的职位推荐
<br>
│   │   ├── nav-bar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 页面头部导航区域
<br>
│   │   ├── pagination &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # 分页
<br>
│   │   ├── select-company-conditions &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; # 公司页面中的条件选择区域
<br>
│   │   ├── select-job-conditions &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 职位页面中的条件选择区域
<br>
│   │   ├── serch-bar &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 搜索区域(serch写错了，大家记得改为search)
<br>
│   │   └── slideshow-bar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;# 公司页面中的轮播图
<br>
│   ├── router &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 路由
<br>
│   ├── views &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# views 所有页面
<br>
│   │   ├── Company &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 公司页面
<br>
│   │   ├── Cource &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;# 课程页面
<br>
│   │   ├── Index &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;# 首页
<br>
│   │   └── Job &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;# 职位页面
<br>
│   ├── App.vue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# 入口页面
<br>
│   └── main.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # &nbsp;入口文件 加载组件 初始化等
<br>
├── .gitignore &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # &nbsp;被忽略的文件/文件夹
<br>
├── babel.config.js &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# babel-loader 配置
<br>
├── jsconfig.json &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;# JavaScirpt项目根目录
<br>
├── package-lock.json &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp # package-lock.json
<br>
├── package.json &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;# package.json
<br>
├── README.md &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 文档
<br>
└── vue.config.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;# vue-cli 配置
