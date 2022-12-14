<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-12 17:08:42
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-13 17:26:26
 * @FilePath: \lagou-demo\src\components\job-recommend\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content-box">
    <!--一、 排序方式选择区域 -->
    <div class="choice-box">
      <span class="head-title">排序方式：</span>
      <!-- 默认&最新选择处 -->
      <a
        href="#"
        class="sort-select"
        v-for="sort in sortData"
        :key="sort.index"
        :class="{ active: sort === isSort }"
        @click="changeSort(sort)"
        >{{ sort }}</a
      >
      <!-- 月薪选择框 -->
      <div class="layui-form-item">
        <label class="layui-form-label">月薪：</label>
        <div class="layui-input-block" style="margin-left: 120px">
          <select lay-verify="required">
            <option value="">不限</option>
            <option value="0">2k以下</option>
            <option value="1">2k-5k</option>
            <option value="2">5k-10k</option>
            <option value="3">10k-15k</option>
            <option value="4">15k-25k</option>
            <option value="4">25k-50k</option>
            <option value="4">50k以上</option>
          </select>
        </div>
      </div>
      <!-- 工作性质选择框 -->
      <div class="layui-form-item">
        <label class="layui-form-label" style="width: 100px; margin-left: 70px"
          >工作性质：</label
        >
        <div class="layui-input-block" style="margin-left: 180px">
          <select lay-verify="required">
            <option value="">不限</option>
            <option value="0">全职</option>
            <option value="1">兼职</option>
            <option value="2">实习</option>
          </select>
        </div>
      </div>
    </div>
    <!-- 二、 职位数据区域 -->
    <div class="data-box" v-for="obj in jobList" :key="obj.index">
      <div class="box-top">
        <div class="top-left">
          <a :href="obj.jobUrl" class="job" target="_blank">{{ obj.job }}</a>
          <span class="time">{{ obj.time }}发布</span>
          <p>
            <span class="salary">{{ obj.salary }}</span>
            <span class="experience">{{ obj.experience }}</span>
          </p>
        </div>
        <div class="top-right">
          <a :href="obj.companyUrl" class="company"
            >{{ obj.company }} <i class="layui-icon layui-icon-vercode"></i
          ></a>
          <p class="wordcut">{{ obj.details }}</p>
        </div>
        <a :href="obj.companyUrl" target="_blank"><img :src="obj.imgUrl" /></a>
      </div>
      <div class="box-bottom">
        <div class="bottom-left">
          <span v-for="skill in obj.skills" :key="skill.index">{{
            skill
          }}</span>
        </div>
        <div class="bottom-right">
          <p style="font-size: 18px">"{{ obj.evaluates }}"</p>
        </div>
      </div>
    </div>
    <!-- 三、 推荐公司区域 -->
    <div class="recommend-commany-box">
      <p>推荐公司:</p>
      <div class="link">
        <a href="javascript:;" v-for="obj in companyList" :key="obj.index">{{obj}}</a>
      </div>
      <span @click="isShow = !isShow">{{isShow ? '收起 ↑' : '展开 ↓'}}</span>
      <div class="more" v-if="isShow">
        <a href="javascript:;" v-for="obj in moreList" :key="obj.index">{{obj}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortData: ["默认", "最新"],
      isSort: "默认",
      jobList: [
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7862281.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "前端开发工程师[亦庄]",
          time: "09:32",
          salary: "15k-25k",
          experience: "经验3-5年 / 大专",
          company: "中企动力",
          details: "营销服务｜咨询,软件服务｜咨询 / 不需要融资 / 2000人以上",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/8aa07b41f020aed7234eec25dc4b9898bab06b8435e17f95.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image/M00/6A/64/CgpEMlmncrqAQtxoAAA21bykABg871.png",
          skills: ["HTML5", "Vue", "JavaScript", "CSS"],
          evaluates: "领导nice，环境舒适",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/8632412.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "web前端开发工程师[海淀区]",
          time: "08:20",
          salary: "15k-30k",
          experience: "经验3-5年 / 本科",
          company: "创软科技",
          details: "IT技术服务｜咨询 / 不需要融资 / 150-500人",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/cd0de907759de25f844bda3eb1d3c944e91bb997ccd0c0921ee11a421dcc6786.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/10/182acefddcd245e68f45d6e07363a663.jpg",
          skills: ["服务业", "物联网", "JavaScript", "Vue"],
          evaluates: "周末双休 带薪年假 五险一金",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/8594814.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "高级前端开发工程师 (MJ007533)[海淀区]",
          time: "2022-11-18",
          salary: "30k-50k",
          experience: "经验5-10年 / 本科",
          company: "搜狐集团",
          details: "内容资讯,游戏,音频｜视频媒体 / 上市公司 / 2000人以上",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/b3ed58a7204e4f6c7565c7be0ab21ccd37af2c2310b5987d.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image3/M00/15/40/Cgq2xlpxrIKAPFRwAAAzLesdOpI884.png",
          skills: ["JavaScript", "Angular", "Web前端开发", "Vue"],
          evaluates: "核心媒体业务，带薪年假15天",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7992258.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "中级前端工程师[五道口]",
          time: "2022-11-2",
          salary: "10k-15k",
          experience: "经验1-3年 / 本科",
          company: "中科软",
          details: "IT技术服务｜咨询 / 上市公司 / 2000人以上",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/41dc7faf4fcd25fbd9e4d918190b9c56d93a353cd1c0954aa9579b6feb1d2bcd.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image3/M01/02/81/CgoCgV6WZjKAOdIiAAA1Fkyw2Iw250.png",
          skills: [
            "IT技术服务｜咨询",
            "软件服务｜咨询",
            "Node.js",
            "JavaScript",
          ],
          evaluates: "扁平管理 带薪休假 团队旅游 职业规划",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7640661.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "前端研发工程师（神策分析）[学院路]",
          time: "2022-11-18",
          salary: "25k-45k",
          experience: "经验5-10年 / 本科",
          company: "中林清风",
          details: "企业服务 / 不需要融资 / 少于15人",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/7c119ee34b9844d11b8c05fa31b2cc121339f5cdd2e944f4.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image/M00/8F/BF/CgpEMlrxAzKAFeRKAAAhk0Nn8UY119.png",
          skills: ["企业服务", "大数据", "Web前端", "jQuery", "React"],
          evaluates: "技术大牛,行业前景好，七险一金",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7985045.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "高校前端开发实训讲师[南口]",
          time: "2022-11-19",
          salary: "18k-25k",
          experience: "经验3-5年 / 大专",
          company: "工商管理专修学院",
          details: "教育｜培训 / 未融资 / 2000人以上",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/308b75f7f525a6b076518af6f52207d539ea0f0fc756f18b.html",
          imgUrl:
            "	https://www.lgstatic.com/thumbnail_120x120/i/image/M00/7A/5C/CgpFT1pMllCAZjm-AABgt03uRIE630.jpg",
          skills: ["教育", "移动端", "Web前端"],
          evaluates: "入职上五险一金 提供住宿",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7862281.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "前端开发工程师[亦庄]",
          time: "09:32",
          salary: "15k-25k",
          experience: "经验3-5年 / 大专",
          company: "中企动力",
          details: "营销服务｜咨询,软件服务｜咨询 / 不需要融资 / 2000人以上",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/8aa07b41f020aed7234eec25dc4b9898bab06b8435e17f95.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image/M00/6A/64/CgpEMlmncrqAQtxoAAA21bykABg871.png",
          skills: ["HTML5", "Vue", "JavaScript", "CSS"],
          evaluates: "领导nice，环境舒适",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/8632412.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "web前端开发工程师[海淀区]",
          time: "08:20",
          salary: "15k-30k",
          experience: "经验3-5年 / 本科",
          company: "创软科技",
          details: "IT技术服务｜咨询 / 不需要融资 / 150-500人",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/cd0de907759de25f844bda3eb1d3c944e91bb997ccd0c0921ee11a421dcc6786.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/10/182acefddcd245e68f45d6e07363a663.jpg",
          skills: ["服务业", "物联网", "JavaScript", "Vue"],
          evaluates: "周末双休 带薪年假 五险一金",
        },
        {
          jobUrl:
            "https://www.lagou.com/wn/jobs/7640661.html?show=49e9bf21fbf34495963bd1ff33f1918b",
          job: "前端研发工程师（神策分析）[学院路]",
          time: "2022-11-18",
          salary: "25k-45k",
          experience: "经验5-10年 / 本科",
          company: "中林清风",
          details: "企业服务 / 不需要融资 / 少于15人",
          companyUrl:
            "https://www.lagou.com/gongsi/v1/7c119ee34b9844d11b8c05fa31b2cc121339f5cdd2e944f4.html",
          imgUrl:
            "https://www.lgstatic.com/thumbnail_120x120/i/image/M00/8F/BF/CgpEMlrxAzKAFeRKAAAhk0Nn8UY119.png",
          skills: ["企业服务", "大数据", "Web前端", "jQuery", "React"],
          evaluates: "技术大牛,行业前景好，七险一金",
        },
      ],
      companyList: ['美柚', '喜马拉雅FM', '微盟', '淘粉吧', '易用到车', '小红唇', '蚂蚁窝' ,'三好网', '唯品会', '爱奇艺', '百度招聘'],
      moreList: ['中科软', '威重化机', '网易招聘', '淘特', '抖音招聘', '小红唇'],
      isShow: false,
    };
  },
  methods: {
    changeSort(sort) {
      this.isSort = sort;
    },
  },
};
</script>

<style scoped>
.content-box {
  width: 1300px;
  margin: 50px 0 0 150px;
  box-sizing: border-box;
}
.content-box .choice-box {
  width: 1300px;
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  background-color: rgb(244, 243, 243);
  border: 1.5px solid #ededed;
  padding-left: 30px;
}
.choice-box .head-title {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
/* 排序方式中a的css */
.choice-box .sort-select {
  display: inline-block;
  width: 66px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  text-align: center;
  margin-right: 5px;
}
/* 设置激活状态下的css */
.active,
.choice-box .sort-select:hover {
  color: #fff;
  background-color: #00b38a;
}
/* 设置选择框 */
.choice-box .layui-form-item {
  display: inline-block;
  height: 36px;
  line-height: 36px;
}
.layui-form-item .layui-form-label {
  font-size: 18px;
  font-weight: 600;
  width: 70px;
  height: 36px;
  line-height: 36px;
  padding: 0%;
  margin-left: 40px;
}
.layui-form-item .layui-input-block select {
  width: 120px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
select option {
  font-size: 18px;
}
/* 二、 职位数据区域 */
.content-box .data-box {
  width: 1300px;
  height: 150px;
  box-sizing: border-box;
  background-color: rgb(244, 243, 243);
  border: 1.5px solid #ededed;
  margin-top: 30px;
}
/* 区域上层部分 */
.data-box .box-top {
  height: 100px;
  background-color: #fff;
  padding: 16px 20px 0 20px;
  box-sizing: border-box;
}
/* 区域上层左边部分 */
.box-top .top-left {
  float: left;
  width: 750px;
  box-sizing: border-box;
  margin-top: 10px;
}
.box-top .top-left .job,
.box-top .top-right .company {
  font-size: 20px;
  color: #00b38a;
}
.box-top .top-left .time {
  font-size: 18px;
  color: #999;
  margin-left: 10px;
}
.box-top .top-left p {
  margin: 10px 0;
}
.box-top .top-left p .salary {
  font-size: 22px;
  color: #fd5f39;
  margin-right: 30px;
}
.box-top .top-left p .experience {
  font-size: 18px;
  color: #555;
}
/* 多出盒子长度部分以省略号形式出现 */
.wordcut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 区域上层右边部分 */
.box-top .top-right {
  float: left;
  margin: 10px 30px 0 0;
}
.box-top .top-right .company i {
  font-size: 24px;
  font-weight: 600;
}
.box-top .top-right p {
  width: 400px;
  margin: 10px 0;
  font-size: 18px;
}
.box-top img {
  width: 70px;
  height: 70px;
  border: 1px solid #f5f5f5;
}
/* 区域下层部分 */
.data-box .box-bottom {
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
}
.box-bottom .bottom-left {
  float: left;
  width: 750px;
}
.box-bottom .bottom-right {
  float: left;
}
.box-bottom .bottom-left span {
  border: 1px solid #dcdcdc;
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 5px;
}
/* 三、推荐公司区域 */
.recommend-commany-box {
  margin-top: 60px;
  width: 1300px;
  position: relative;
}
.recommend-commany-box p {
  font-size: 20px;
  margin: 10px 0;
}
.recommend-commany-box .link a,
.recommend-commany-box .more a {
  font-size: 18px;
  color: #00b38a;
  text-decoration: underline;
  margin-right: 50px;
}
.recommend-commany-box span {
  position: absolute;
  top: 35px;
  right: 10px;
  font-size: 18px;
  color: #999;
  cursor: pointer;
}
.recommend-commany-box .more {
  margin-top: 10px;
}
</style>