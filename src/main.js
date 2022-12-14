/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:19:15
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-21 17:52:50
 * @FilePath: \lagou-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import '../node_modules/layui/dist/css/layui.css'
import '../node_modules/layui/dist/layui'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
