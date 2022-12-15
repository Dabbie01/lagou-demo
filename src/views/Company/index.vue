<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:19:15
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-15 16:10:07
 * @FilePath: \lagou-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <SlideShow></SlideShow>
    <CompanyCondition></CompanyCondition>
    <CompanyList></CompanyList>
    <div class="center">
      <Pagination :total="20" :currentPage.sync="currentPage"></Pagination>
      <BodyFooter></BodyFooter>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import SlideShow from '@/components/slideshow-bar'
import CompanyCondition from '@/components/select-company-conditions'
import CompanyList from '@/components/company-list'
import Pagination from '@/components/pagination'
import BodyFooter from '@/components/body-footer'
import FooterBar from '@/components/footer-bar'


export default {
  components: {
    SlideShow,
    CompanyCondition,
    CompanyList,
    Pagination,
    BodyFooter,
    FooterBar
  },
};
</script>

<style scoped>
.center {
  width: 1600px;
  margin: 0 auto;
}
</style>