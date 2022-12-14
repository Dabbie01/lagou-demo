<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-07 11:08:32
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-14 12:23:59
 * @FilePath: \lagou-demo\src\components\body-middle\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="middle-box">
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
            <li class="layui-this">互联网热门公司榜</li>
        </ul>
        <div class="layui-tab-content" style="padding: 0;">
            <div class="layui-tab-item layui-show">
                <div class="panel" v-for="obj in companyList" :key="obj.index">
                    <div class="content-center">
                        <a href="#"><img :src="obj.img"></a>
                        <p class="company"><a href="#">{{obj.name}}</a></p>
                        <p class="company-details wordcut">{{obj.detail}}</p>
                        <p class="introduction wordcut">{{obj.introduction}}</p>
                        <hr class="hr-dotted">
                    </div>
                    <div class="footer">
                        <div class="footer-left">
                            <p class="number"><a href="#">{{obj.jobs}}</a></p>
                            <p><a href="#">在招职位</a></p>
                        </div>
                        <div class="footer-right">
                            <p class="number"><a href="#">{{obj.rate}}</a></p>
                            <p><a href="#">简历处理率</a></p>
                        </div>
                    </div>
                </div>
                <a href="https://www.lagou.com/gongsi/" target="_blank" class="a-link">查看更多</a>    
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            companyList: [
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/9A/FC/CgqKkVihobyAPNbQAAAYVWeM11w136.png',
                name: '最右',
                detail: '社交平台,内容社区 / D轮及以上',
                introduction: '我的快乐源泉',
                jobs: 54,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg',
                name: '北京蜜莱坞网络科技有限公司',
                detail: 'MCN｜直播平台 / 上市公司',
                introduction: '映客－全民直播app 千万日活 技术氛围好',
                jobs: 73,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image6/M00/71/29/CioPOWILcUiARZCZAAAKfE8tIm8511.png',
                name: '北京法意科技有限公司',
                detail: 'IT技术服务｜咨询 / D轮及以上',
                introduction: '携手法意 实践法的精神',
                jobs: 3,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/39/70/CgYXBlWo3nqABJTsAADJ3hn5gmE062.jpg',
                name: '猎豹移动',
                detail: '人工智能服务,工具类产品,智能硬件',
                introduction: '核心价值观：用户至上、从我做起、结果导向、简单',
                jobs: 26,
                rate: '72%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/33/E2/Cgo8PFWU_MOAKIX3AABMnVTpfyA710.jpg',
                name: '链家地产',
                detail: '房产家居 / C轮',
                introduction: '希望通过持之以恒的创新以及新技术的探索和运用，建立和有效管理房地产服务标准，领导和推动行业进步。',
                jobs: 5,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image2/M00/2E/C8/CgotOVo3d52AGRHOAAAhxm59MK0568.png',
                name: 'Kika Tech(新美互通)',
                detail: '工具类产品 / C轮',
                introduction: '让世界沟通更简单 To make world communication easier!',
                jobs: 9,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/01/F7/CgqKkVZ82_mATbzcAAALUKX7hVQ702.png',
                name: '丫咪',
                detail: '消费生活 / A轮',
                introduction: '厨师的米其林',
                jobs: 5,
                rate: '100%'
            },
            {   img: 'https://www.lgstatic.com/thumbnail_160x160/i/image2/M01/A1/42/CgotOVvS-F2ARLCqAAGhhVXKtLw993.jpg',
                name: '亚信',
                detail: '软件服务｜咨询,IT技术服务｜咨询',
                introduction: '亚信科技是领先的软件产品、解决方案和服务提供商，领先的数智化全栈能力提供商。',
                jobs: 142,
                rate: '100%'
            }        
            ],
        }
    }
}
</script>

<style scoped>
.middle-box {
    margin-top: 70px;
}
.layui-tab .layui-tab-title li {
    font-size: 20px;
    margin-right: 80px;
    padding: 0;
    line-height: 20px;
}
.panel {
    display: inline-block;
    width: 340px;
    height: 300px;
    padding: 20px 20px 10px;
    margin: 20px 0 0 20px;
    border: 1px solid rgb(209, 203, 203);
}
.panel:hover {
    box-shadow: 0 0 10px rgb(209, 203, 203);
}
.panel:nth-child(4n-3) {
    margin-left: 0;
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
.layui-tab-content .a-link {
    display: block;
    width: 480px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    margin: 20px auto;
    border: 2px solid #00b38a;
    color: #00b38a;
}
.layui-tab-content .a-link:hover {
    color: #fff;
    background-color: #00b38a;
}
</style>