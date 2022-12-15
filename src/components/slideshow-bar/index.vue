<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-14 17:30:22
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-15 16:20:27
 * @FilePath: \lagou-demo\src\components\slideshow-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <h1 class="title">什么值得投</h1>
    <div class="layui-carousel" id="slideshow">
      <div carousel-item>
        <div class="detail" v-for="obj in companyList" :key="obj.index">
          <ul>
            <li v-for="n in obj.data" :key="n.index">
              <div class="company">
                <img :src="n.imgUrl" />
                <p class="company-name">{{ n.name }}</p>
                <div class="hover-panel">
                  <p class="introduction" style="font-size: 18px">
                    {{ n.introduction }}
                  </p>
                  <a :href="n.panelUrl" target="_blank">进入公司主页</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
layui.use("carousel", function () {
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: "#slideshow",
    width: "90%",
    height: "350px",
    arrow: "always",
    autoplay: true,
    indicator: "none",
  });
});
export default {
  data() {
    return {
      companyList: [
        {
          data: [
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
              name: "北京蜜莱坞网络科技有限公司",
              introduction: "映客－全民直播app 千万日活 技术氛围好",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/c136b1b4b037c1f586865e6502e6550091cec5cb81cb08a9.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/image1/M00/0B/4F/CgYXBlTyiPeASTPlAAB_1PcCjrI255.jpg",
              name: "广东智源",
              introduction:
                "专注于公共卫生、公安、环保、农业等领域的整体解决方案。自主研发云计算、大数据、…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/de98d4ba21789767cc73952d0a5f4222a8c7430ebd130ad1.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/2B/C0/Cgp9HWBkPKmAA1QNAABU_ksmUug406.png",
              name: "腾展科技",
              introduction:
                "移动互联网出海领跑者，为全球用户提供移动通信、安全通信和通讯工具产品和服务。",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/1377314f4b1c8c54fa4115035847fa9b20fb51f47cabbcff.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M01/54/8F/Cgp9HWEfSYKARwNKAAAxiB8pGM4493.png",
              name: "广通优云",
              introduction: "自主可控的国产运维创新力量",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/127376d16a63a8435ba1a1299cd78089cfd6075c9ea9bba3.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/66/1B/CioPOWGvH8-AI60sAAHU8rly4ik488.png",
              name: "泰康建投",
              introduction:
                "世界500强泰康保险集团全资子公司，为人们提供高品质的养老 康复护理与医疗健康…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/dbe76d042ae07e236279f3fe165f54ca2364f6272167f8aa.html",
            },
          ],
        },
        {
          data: [
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M01/54/8F/Cgp9HWEfSYKARwNKAAAxiB8pGM4493.png",
              name: "广通优云",
              introduction: "自主可控的国产运维创新力量",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/127376d16a63a8435ba1a1299cd78089cfd6075c9ea9bba3.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
              name: "北京蜜莱坞网络科技有限公司",
              introduction: "映客－全民直播app 千万日活 技术氛围好",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/c136b1b4b037c1f586865e6502e6550091cec5cb81cb08a9.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/image1/M00/0B/4F/CgYXBlTyiPeASTPlAAB_1PcCjrI255.jpg",
              name: "广东智源",
              introduction:
                "专注于公共卫生、公安、环保、农业等领域的整体解决方案。自主研发云计算、大数据、…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/de98d4ba21789767cc73952d0a5f4222a8c7430ebd130ad1.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/66/1B/CioPOWGvH8-AI60sAAHU8rly4ik488.png",
              name: "泰康建投",
              introduction:
                "世界500强泰康保险集团全资子公司，为人们提供高品质的养老 康复护理与医疗健康…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/dbe76d042ae07e236279f3fe165f54ca2364f6272167f8aa.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/2B/C0/Cgp9HWBkPKmAA1QNAABU_ksmUug406.png",
              name: "腾展科技",
              introduction:
                "移动互联网出海领跑者，为全球用户提供移动通信、安全通信和通讯工具产品和服务。",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/1377314f4b1c8c54fa4115035847fa9b20fb51f47cabbcff.html",
            },
          ],
        },
        {
          data: [
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
              name: "北京蜜莱坞网络科技有限公司",
              introduction: "映客－全民直播app 千万日活 技术氛围好",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/c136b1b4b037c1f586865e6502e6550091cec5cb81cb08a9.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M01/54/8F/Cgp9HWEfSYKARwNKAAAxiB8pGM4493.png",
              name: "广通优云",
              introduction: "自主可控的国产运维创新力量",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/127376d16a63a8435ba1a1299cd78089cfd6075c9ea9bba3.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/2B/C0/Cgp9HWBkPKmAA1QNAABU_ksmUug406.png",
              name: "腾展科技",
              introduction:
                "移动互联网出海领跑者，为全球用户提供移动通信、安全通信和通讯工具产品和服务。",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/1377314f4b1c8c54fa4115035847fa9b20fb51f47cabbcff.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/image1/M00/0B/4F/CgYXBlTyiPeASTPlAAB_1PcCjrI255.jpg",
              name: "广东智源",
              introduction:
                "专注于公共卫生、公安、环保、农业等领域的整体解决方案。自主研发云计算、大数据、…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/de98d4ba21789767cc73952d0a5f4222a8c7430ebd130ad1.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/66/1B/CioPOWGvH8-AI60sAAHU8rly4ik488.png",
              name: "泰康建投",
              introduction:
                "世界500强泰康保险集团全资子公司，为人们提供高品质的养老 康复护理与医疗健康…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/dbe76d042ae07e236279f3fe165f54ca2364f6272167f8aa.html",
            },
          ],
        },
        {
          data: [
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/66/1B/CioPOWGvH8-AI60sAAHU8rly4ik488.png",
              name: "泰康建投",
              introduction:
                "世界500强泰康保险集团全资子公司，为人们提供高品质的养老 康复护理与医疗健康…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/dbe76d042ae07e236279f3fe165f54ca2364f6272167f8aa.html",
            },
            {
              imgUrl:
                "	https://www.lgstatic.com/thumbnail_240x240/i/image6/M01/54/8F/Cgp9HWEfSYKARwNKAAAxiB8pGM4493.png",
              name: "广通优云",
              introduction: "自主可控的国产运维创新力量",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/127376d16a63a8435ba1a1299cd78089cfd6075c9ea9bba3.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg",
              name: "北京蜜莱坞网络科技有限公司",
              introduction: "映客－全民直播app 千万日活 技术氛围好",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/c136b1b4b037c1f586865e6502e6550091cec5cb81cb08a9.html",
            },

            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/i/image6/M00/2B/C0/Cgp9HWBkPKmAA1QNAABU_ksmUug406.png",
              name: "腾展科技",
              introduction:
                "移动互联网出海领跑者，为全球用户提供移动通信、安全通信和通讯工具产品和服务。",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/1377314f4b1c8c54fa4115035847fa9b20fb51f47cabbcff.html",
            },
            {
              imgUrl:
                "https://www.lgstatic.com/thumbnail_240x240/image1/M00/0B/4F/CgYXBlTyiPeASTPlAAB_1PcCjrI255.jpg",
              name: "广东智源",
              introduction:
                "专注于公共卫生、公安、环保、农业等领域的整体解决方案。自主研发云计算、大数据、…",
              panelUrl:
                "https://www.lagou.com/gongsi/v1/de98d4ba21789767cc73952d0a5f4222a8c7430ebd130ad1.html",
            },
          ],
        },
      ],
    };
  },
};
</script>
  
<style scoped>
/* 大盒子整体设计 */
.box {
  background-color: #00b38a;
  padding-top: 40px;
}
/* 标题--什么值得投 */
.box .title {
  color: #fff;
  font-size: 40px;
  padding-left: 800px;
  margin-bottom: 30px;
}
/* 轮播图区域整体设置--居中 */
.box .layui-carousel {
  margin: 0 auto;
}
/* 轮播图单页设计 */
.layui-carousel .detail {
  background-color: #00b38a;
  padding: 30px 170px;
  box-sizing: border-box;
}
/* 一行排列 */
.detail ul li {
  float: left;
  margin-right: 78px;
}
.detail ul li:last-child {
  margin: 0;
}
/* 单个公司内容盒子设计 */
.detail ul li .company {
  position: relative;
  width: 210px;
  height: 280px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}
.detail ul li .company img {
  width: 180px;
}

.detail ul li .company .company-name {
  font-size: 18px;
  color: #666;
  margin: 20px 8px 0 8px;
}
/* 鼠标移入公司内容盒子时出现的盒子设计--默认隐藏 */
.company .hover-panel {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 240px;
  height: 310px;
  background-color: #fff;
  opacity: 0.9;
  padding: 35px;
  box-sizing: border-box;
  text-align: left;
  display: none;
}
/* 鼠标悬停时才出现盒子 */
.detail ul li .company:hover .hover-panel {
  display: block;
}
.company .hover-panel p {
  height: 200px;
}
/* 进入公司主页处 */
.company .hover-panel a {
  display: block;
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #00b38a;
  margin-left: 5px;
}
</style>