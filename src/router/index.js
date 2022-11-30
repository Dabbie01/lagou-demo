/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:55:25
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-27 16:35:58
 * @FilePath: \lagou-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/views/Company'
import Cource from '@/views/Cource'
import Index from '@/views/Index'
import Job from '@/views/Job'
import University from '@/views/University'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/company',
        name: 'Company',
        component: Company
      },
      {
        path: '/cource',
        name: 'Cource',
        component: Cource
      },
      {
        path: '/job',
        name: 'Job',
        component: Job
      },
      {
        path: '/university',
        name: 'University',
        component: University
      }
]

const router = new Router({
    routes
})

export default router
