<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:19:15
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-15 15:29:20
 * @FilePath: \lagou-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <SerchBar></SerchBar>
    <SelectCondition></SelectCondition>
    <JobRecommend></JobRecommend>
    <Pagination :total="20" :currentPage.sync="currentPage"></Pagination>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import SerchBar from '@/components/serch-bar'
import SelectCondition from '@/components/select-job-conditions'
import JobRecommend from '@/components/job-recommend'
import Pagination from '@/components/pagination'
import FooterBar from '@/components/footer-bar'

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    SerchBar,
    SelectCondition,
    JobRecommend,
    Pagination,
    FooterBar,
  },
};
</script>

<style scoped>

</style>