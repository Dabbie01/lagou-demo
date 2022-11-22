<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:19:15
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-21 17:39:22
 * @FilePath: \lagou-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <NavBar></NavBar>
    <!-- 一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar'

export default {
  components : {
    NavBar,
  }
}
</script>

<style scoped>

</style>
