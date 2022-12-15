<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-07 11:08:32
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-15 15:59:08
 * @FilePath: \lagou-demo\src\components\company-list\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="middle-box">
    <!-- 一、 排序方式选择区域 -->
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
    </div>

    <!-- 公司列表 -->
    <div class="panel" v-for="obj in companyList" :key="obj.index">
      <div class="content-center">
        <a href="#"><img :src="obj.img" /></a>
        <p class="company">
          <a href="#">{{ obj.name }}</a>
        </p>
        <p class="company-details wordcut">{{ obj.detail }}</p>
        <p class="introduction wordcut">{{ obj.introduction }}</p>
        <hr class="hr-dotted" />
      </div>
      <div class="footer">
        <div class="footer-left">
          <p class="number">
            <a href="#">{{ obj.jobs }}</a>
          </p>
          <p><a href="#">在招职位</a></p>
        </div>
        <div class="footer-right">
          <p class="number">
            <a href="#">{{ obj.rate }}</a>
          </p>
          <p><a href="#">简历处理率</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sortData: ["默认排序", "职位数量 ↓", "面试评价数 ↓", "简历处理率 ↓"],
        isSort: "默认排序",
        companyList: [
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image/M00/9A/FC/CgqKkVihobyAPNbQAAAYVWeM11w136.png",
          name: "最右",
          detail: "社交平台,内容社区 / D轮及以上",
          introduction: "我的快乐源泉",
          jobs: 54,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
          name: "北京蜜莱坞网络科技有限公司",
          detail: "MCN｜直播平台 / 上市公司",
          introduction: "映客－全民直播app 千万日活 技术氛围好",
          jobs: 73,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image6/M00/71/29/CioPOWILcUiARZCZAAAKfE8tIm8511.png",
          name: "北京法意科技有限公司",
          detail: "IT技术服务｜咨询 / D轮及以上",
          introduction: "携手法意 实践法的精神",
          jobs: 3,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/image1/M00/39/70/CgYXBlWo3nqABJTsAADJ3hn5gmE062.jpg",
          name: "猎豹移动",
          detail: "人工智能服务,工具类产品,智能硬件",
          introduction: "核心价值观：用户至上、从我做起、结果导向、简单",
          jobs: 26,
          rate: "72%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/image1/M00/33/E2/Cgo8PFWU_MOAKIX3AABMnVTpfyA710.jpg",
          name: "链家地产",
          detail: "房产家居 / C轮",
          introduction:
            "希望通过持之以恒的创新以及新技术的探索和运用，建立和有效管理房地产服务标准，领导和推动行业进步。",
          jobs: 5,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image2/M00/2E/C8/CgotOVo3d52AGRHOAAAhxm59MK0568.png",
          name: "Kika Tech(新美互通)",
          detail: "工具类产品 / C轮",
          introduction: "让世界沟通更简单 To make world communication easier!",
          jobs: 9,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image/M00/01/F7/CgqKkVZ82_mATbzcAAALUKX7hVQ702.png",
          name: "丫咪",
          detail: "消费生活 / A轮",
          introduction: "厨师的米其林",
          jobs: 5,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image2/M01/A1/42/CgotOVvS-F2ARLCqAAGhhVXKtLw993.jpg",
          name: "亚信",
          detail: "软件服务｜咨询,IT技术服务｜咨询",
          introduction:
            "亚信科技是领先的软件产品、解决方案和服务提供商，领先的数智化全栈能力提供商。",
          jobs: 142,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
          name: "北京蜜莱坞网络科技有限公司",
          detail: "MCN｜直播平台 / 上市公司",
          introduction: "映客－全民直播app 千万日活 技术氛围好",
          jobs: 73,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image/M00/01/F7/CgqKkVZ82_mATbzcAAALUKX7hVQ702.png",
          name: "丫咪",
          detail: "消费生活 / A轮",
          introduction: "厨师的米其林",
          jobs: 5,
          rate: "100%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/image1/M00/39/70/CgYXBlWo3nqABJTsAADJ3hn5gmE062.jpg",
          name: "猎豹移动",
          detail: "人工智能服务,工具类产品,智能硬件",
          introduction: "核心价值观：用户至上、从我做起、结果导向、简单",
          jobs: 26,
          rate: "72%",
        },
        {
          img: "https://www.lgstatic.com/thumbnail_160x160/i/image6/M00/71/29/CioPOWILcUiARZCZAAAKfE8tIm8511.png",
          name: "北京法意科技有限公司",
          detail: "IT技术服务｜咨询 / D轮及以上",
          introduction: "携手法意 实践法的精神",
          jobs: 3,
          rate: "100%",
        },
      ],
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
.middle-box {
  margin: 20px 0 0 160px;
}
.middle-box .choice-box {
  width: 1600px;
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
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
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
.panel {
  display: inline-block;
  width: 342px;
  height: 300px;
  padding: 20px 20px 10px;
  margin: 20px 20px 0 0;
  border: 1px solid rgb(209, 203, 203);
}
.panel:hover {
  box-shadow: 0 0 10px rgb(209, 203, 203);
}
.panel:nth-child(4n-3) {
  margin-right: 0;
}
.panel .content-center {
  text-align: center;
}

.panel .content-center img {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}
.panel .content-center .company {
  font-size: 20px;
  font-weight: 600;
}
.panel .content-center .company-details,
.panel .content-center .introduction,
.footer .number {
  font-size: 18px;
}
.panel .content-center .company-details {
  color: #999;
  margin: 5px 0 10px;
}
.panel .footer .footer-left,
.panel .footer .footer-right {
  float: left;
  width: 100px;
  height: 44px;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
}
.panel .footer .footer-left {
  border-right: 1.5px solid #999;
}
.footer .number a {
  color: #00b38a;
}
.footer p a {
  color: #999;
}
.wordcut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hr-dotted {
  text-align: center;
  border-bottom: 2px dashed #999 !important;
  margin: 22px 0;
}
</style>