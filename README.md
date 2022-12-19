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
├── node_modules               # 相关依赖
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── assets                 # 空
│   ├── components             # 全局公用组件
│   │   ├── body-footer        # 首页主体区域底部部分
│   │   ├── body-middle        # 首页主题区域中间部分
│   │   ├── body-top           # 首页主题区域顶部部分
│   │   ├── city-select        # 顶部导航区域选择城市
│   │   ├── company-list       # 公司页面中的公司列表
│   │   ├── footer-bar         # 首页底部
│   │   ├── head-bar           # 首页头部区域
│   │   ├── job-recommend      # 职位页面中的职位推荐
│   │   ├── nav-bar            # 页面头部导航区域
│   │   ├── pagination         # 分页
│   │   ├── select-company-conditions  # 公司页面中的条件选择区域
│   │   ├── select-job-conditions      # 职位页面中的条件选择区域
│   │   ├── serch-bar          # 搜索区域(serch写错了，大家记得改为search)
│   │   └── slideshow-bar      # 公司页面中的轮播图
│   ├── router                 # 路由
│   ├── views                  # views 所有页面
│   │   ├── Company            # 公司页面
│   │   ├── Cource             # 课程页面
│   │   ├── Index              # 首页
│   │   └── Job                # 职位页面
│   ├── App.vue                # 入口页面
│   └── main.js                # 入口文件 加载组件 初始化等
├── .gitignore                 # 被忽略的文件/文件夹
├── babel.config.js            # babel-loader 配置
├── jsconfig.json              # JavaScirpt项目根目录
├── package-lock.json          # package-lock.json
├── package.json               # package.json
├── README.md                  # 文档
└── vue.config.js              # vue-cli 配置
