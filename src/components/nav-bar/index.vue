<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 17:09:38
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-30 16:05:02
 * @FilePath: \lagou-demo\src\components\nav-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="box">
      <ul class="layui-nav" lay-filter="">
        <li class="layui-nav-item left"><a href="https://www.lagou.com/" class="logo"><img src="https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210624/1624523613071.png" alt=""></a></li>
        <li class="layui-nav-item left"><span class="city" @click.stop="citySelect">{{thisCity}}<i class="layui-icon layui-icon-triangle-d"></i></span></li>
        <li class="layui-nav-item left" v-for="(i, index) in navItems" :key="index">
          <router-link :to="i.url" active-class="current">{{i.name}}</router-link>
        </li>
        <li class="layui-nav-item left">
          <a :href="appUrl" class="app-color"><i class="layui-icon layui-icon-cellphone"></i> 拉勾APP</a>
        </li>
        <li class="layui-nav-item right">
          <a :href="osUrl">进入企业版</a>
        </li>
        <li class="layui-nav-item right">
          <a href="">我</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">账号设置</a></dd>
            <dd><a href="javascript:;">退出</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item right">
          <a :href="resumeUrl">我的简历</a>
        </li>
        <li class="layui-nav-item right pannel-msg">
          <i class="layui-icon layui-icon-notice" @click="msgOn"></i>
          <div class="layui-card" v-show="divVisible">
            <div class="layui-card-header">消息通知</div>
            <div class="layui-card-body">暂时没有新的消息~</div>
            <div class="card-footer"><a href="" class="msg-all">查看全部消息</a></div>
          </div>
        </li>
      </ul>
    </div>
    <citySelect v-if="cityVisible"></citySelect>
  </div>
</template>

<script>
import citySelect from '@/components/city-select'
export default {
  data(){
    return {
      appUrl: 'https://help.lagou.com/staticpage/app_download/pc/index.html',
      osUrl: 'https://easy.lagou.com/dashboard/index.htm?from=c_index',
      resumeUrl: 'https://www.lagou.com/resume/myresume.html',
      navItems: [
          {name: '首页', url: '/'},
          {name: '职位', url: '/job'},
          {name: '公司', url: '/company'},
          {name: '校园', url: '/university'},
          {name: '课程', url: '/cource'}
        ],
        divVisible: false,
        cityVisible: false,
        thisCity: '长沙站',
    }
  },
  methods: {
    msgOn(){
      this.divVisible = !this.divVisible
    },
    citySelect(){
      this.cityVisible = !this.cityVisible
    },
  },
  components: {
    citySelect,
  }
}
</script>

<style scoped>
* {
  padding: 0%;
  margin: 0%;
}
  .layui-nav {
    padding: 0 100px;
  }
  .layui-nav,
  li {
    background: #32373e;
    height: 60px;
  }
  li a,
  li span,
  i {
    line-height: 60px;
    font-size: 20px;
  }
  .logo img {
      height: 20px;
    }
  .layui-nav .layui-nav-item .city,
  .layui-nav .layui-nav-item .app-color {
  color: #0dca9f;
}
.layui-nav .layui-nav-item .city:hover,
.pannel-msg .layui-icon-notice:hover {
  cursor: pointer;
}

.left {
  float: left;
}
.right {
  float: right;
}
.pannel-msg {
  position: relative;
  padding-right: 20px;
}
.layui-card {
  position: absolute;
  left: -280px;
  top: 60px;
  width: 600px;
  height: 200px;
  border: 2px solid #1f1818;
}
.layui-card-header {
  padding: 0%;
  margin-left: 20px;
  height: 58px;
  font-size: 19px;
  line-height: 58px;
}
.layui-card-body {
  padding: 0%;
  height: 82px;
  border-top: 1px solid #1f1818;
  border-bottom: 1px solid #1f1818;
  color: #54544f;
  font-size: 18px;
  text-align: center;
  line-height: 82px;
}
.card-footer {
  height: 58px;
  text-align: center;
  line-height: 58px;
}
.card-footer .msg-all {
  color: #000;
  font-size: 18px;
}
.card-footer .msg-all:hover {
  color: #000;
}
</style>