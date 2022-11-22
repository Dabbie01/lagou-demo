<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 17:09:38
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-22 11:16:36
 * @FilePath: \lagou-demo\src\components\nav-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <ul class="layui-nav" lay-filter="">
        <li class="layui-nav-item"><a href="https://www.lagou.com/" class="logo"><img src="https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210624/1624523613071.png" alt=""></a></li>
        <li class="layui-nav-item"><a href="" class="city">深圳站 <i class="layui-icon layui-icon-triangle-d"></i></a></li>
        <li class="layui-nav-item layui-this"><a href="">首页</a></li>
        <li class="layui-nav-item"><a href="">大数据</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">解决方案</a>
            <dl class="layui-nav-child"> <!-- 二级菜单 -->
                <dd><a href="">移动模块</a></dd>
                <dd><a href="">后台模版</a></dd>
                <dd><a href="">电商平台</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item"><a href="">社区</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.layui-nav,
li {
  background: #32373e;
  height: 40px;
}
li a {
  line-height: 40px;
  font-size: 14px;
}
.logo img {
    height: 20px;
  }
  .layui-nav .layui-nav-item .city {
  color: #0dca9f;
}
</style>