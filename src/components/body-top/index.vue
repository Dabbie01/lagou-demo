<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-03 12:12:16
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-14 16:33:09
 * @FilePath: \lagou-demo\src\components\body-top\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="middle-box">
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
            <li class="layui-this">为你匹配</li>
            <li>24Hour热门</li>
            <li>最新职位</li>
        </ul>
        <div class="layui-tab-content" style="padding: 0;">
            <div class="layui-tab-item layui-show">
                    <div class="panel" v-for="data in panelList" :key="data.index">
                        <p class="panel-head">
                            <span class="job-title"><a href="#" class="wordcut">{{data.title}}</a></span>
                            <span class="release-time">{{data.time}}</span>
                            <span class="salary">{{data.salary}}</span>
                        </p>
                        <p class="experience">{{data.experience}}</p>
                        <span class="call-words wordcut" v-for="word in data.words" :key="word.index">{{word}}</span>
                        <hr class="hr-dotted">
                        <div class="panel-footer">
                            <a href="#"><img :src="data.url"></a>
                            <div class="footer">
                                <p class="company"><a href="#" style="color:#00b38a">{{data.company}}</a></p>
                                <p>{{data.detail}}</p>
                            </div>
                        </div>
                    </div>   
                    <a href="https://www.lagou.com/wn/zhaopin" target="_blank" class="a-link">查看更多</a>    
            </div>
            <div class="layui-tab-item">
                <div class="panel" v-for="data in hotList" :key="data.index">
                        <p class="panel-head">
                            <span class="job-title"><a href="#" class="wordcut">{{data.title}}</a></span>
                            <span class="release-time">{{data.time}}</span>
                            <span class="salary">{{data.salary}}</span>
                        </p>
                        <p class="experience">{{data.experience}}</p>
                        <span class="call-words wordcut" v-for="word in data.words" :key="word.index">{{word}}</span>
                        <hr class="hr-dotted">
                        <div class="panel-footer">
                            <a href="#"><img :src="data.url"></a>
                            <div class="footer">
                                <p class="company"><a href="#" style="color:#00b38a">{{data.company}}</a></p>
                                <p>{{data.detail}}</p>
                            </div>
                        </div>
                    </div>   
                    <a href="https://www.lagou.com/wn/zhaopin" target="_blank" class="a-link">查看更多</a>
            </div>
            <div class="layui-tab-item">
                <div class="panel" v-for="data in newList" :key="data.index">
                        <p class="panel-head">
                            <span class="job-title"><a href="#" class="wordcut">{{data.title}}</a></span>
                            <span class="release-time">{{data.time}}</span>
                            <span class="salary">{{data.salary}}</span>
                        </p>
                        <p class="experience">{{data.experience}}</p>
                        <span class="call-words wordcut" v-for="word in data.words" :key="word.index">{{word}}</span>
                        <hr class="hr-dotted">
                        <div class="panel-footer">
                            <a href="#"><img :src="data.url"></a>
                            <div class="footer">
                                <p class="company"><a href="#" style="color:#00b38a">{{data.company}}</a></p>
                                <p>{{data.detail}}</p>
                            </div>
                        </div>
                    </div>   
                    <a href="https://www.lagou.com/wn/zhaopin" target="_blank" class="a-link">查看更多</a>
            </div>
        </div>
    </div>     
  </div>
</template>

<script>
export default {
    data(){
        return {
            panelList: [
            {   title: '前端工程师',
                time: '[3天前发布]',
                salary: '3k-6k',
                experience: '经验1-3年 / 不限',
                words: ['人工智能', '电商平台'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/18/E6/CgqKkVb0_Z6Ad1IrAAA30eRM9rk131.jpg',
                company: 'MRS',
                detail: '人工智能服务 / A轮 / 北京'
            },
            {   title: 'Java开发工程师',
                time: '[09:12发布]',
                salary: '10k-13k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务', '软件服务|咨询', 'JAVAS'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/4F/A5/CioPOWD6YxGAD-CWAAAsgCdp12U635.jpg',
                company: '中电金信',
                detail: 'IT技术服务 | 咨询,软件服务｜咨询 / B轮 / 北京'
            }, 
            {
                title: '资深运维开发工程师',
                time: '[10:20发布]',
                salary: '8k-10k',
                experience: '经验1-3年 / 专科',
                words: ['区块链', 'Linux'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/10/c12126598b7243deae1e1c8b6a5c2e27.png',
                company: '航赞信息',
                detail: '专业服务｜咨询 / 不需要融资 / 北京'
            },
            {
                title: '需求分析师（人员外包类）',
                time: '[09:12发布]',
                salary: '10k-20k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务|咨询', '科技金融', 'JAVA'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image3/M01/02/81/CgoCgV6WZjKAOdIiAAA1Fkyw2Iw250.png',
                company: '中科软',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {
                title: '销售工程师',
                time: '[09:09发布]',
                salary: '5k-7k',
                experience: '经验不限',
                words: ['信息安全', '销售'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/00/30/Cgp3O1YxptSAE28wAAClIV6BArc504.jpg',
                company: '格尔软件',
                detail: '信息安全 / 上市公司 / 北京'
            },
            {
                title: '高级产品经理',
                time: '[09:11发布]',
                salary: '20k-30k',
                experience: '经验5-10年 / 本科',
                words: ['金融业', '数据产品'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/01/10/Cgp3O1ZeznKAbzIrAAAkAYcCvPQ764.png',
                company: '泰康在线',
                detail: '金融业 / 不需要融资 / 北京'
            },
            {
                title: 'WEB前端',
                time: '[10:16发布]',
                salary: '8k-16k',
                experience: '经验1-3年 / 本科',
                words: ['人工智能服务', '电商平台','JavaScript'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/image1/M00/00/41/Cgo8PFTUXMmAFPC0AAA3c-6bfPQ092.gif',
                company: '优捷信达',
                detail: '数据服务 | 咨询,IT技术服务 | 咨询 / B轮 / 北京'
            },
            {
                title: 'java开发工程师',
                time: '[10:46发布]',
                salary: '16k-22k',
                experience: '经验3-5年 / 本科',
                words: ['金融业', 'JAVA', 'Spring'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/65/46/CioPOWGprYKAJMvZAAPBLPU6rns024.png',
                company: '京东方',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {
                title: '市场营销',
                time: '[10:34发布]',
                salary: '8k-12k',
                experience: '经验应届毕业生 / 本科',
                words: ['软件服务咨询', '房地产 | 建筑'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/76/DA/Ciqc1F_ItcyAeb_bAAAGvYsVcXc215.png',
                company: '北京麦田',
                detail: '居住服务 / 不需要融资 / 北京'
            },
            ],
            hotList: [
            {
                title: '高级产品经理',
                time: '[09:11发布]',
                salary: '20k-30k',
                experience: '经验5-10年 / 本科',
                words: ['金融业', '数据产品'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/01/10/Cgp3O1ZeznKAbzIrAAAkAYcCvPQ764.png',
                company: '泰康在线',
                detail: '金融业 / 不需要融资 / 北京'
            },
            {
                title: 'java开发工程师',
                time: '[10:46发布]',
                salary: '16k-22k',
                experience: '经验3-5年 / 本科',
                words: ['金融业', 'JAVA', 'Spring'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/65/46/CioPOWGprYKAJMvZAAPBLPU6rns024.png',
                company: '京东方',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {   title: '前端工程师',
                time: '[3天前发布]',
                salary: '3k-6k',
                experience: '经验1-3年 / 不限',
                words: ['人工智能', '电商平台'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/18/E6/CgqKkVb0_Z6Ad1IrAAA30eRM9rk131.jpg',
                company: 'MRS',
                detail: '人工智能服务 / A轮 / 北京'
            }, 
            {
                title: '资深运维开发工程师',
                time: '[10:20发布]',
                salary: '8k-10k',
                experience: '经验1-3年 / 专科',
                words: ['区块链', 'Linux'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/10/c12126598b7243deae1e1c8b6a5c2e27.png',
                company: '航赞信息',
                detail: '专业服务｜咨询 / 不需要融资 / 北京'
            },
            {
                title: '需求分析师（人员外包类）',
                time: '[09:12发布]',
                salary: '10k-20k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务|咨询', '科技金融', 'JAVA'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image3/M01/02/81/CgoCgV6WZjKAOdIiAAA1Fkyw2Iw250.png',
                company: '中科软',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {
                title: '市场营销',
                time: '[10:34发布]',
                salary: '8k-12k',
                experience: '经验应届毕业生 / 本科',
                words: ['软件服务咨询', '房地产 | 建筑'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/76/DA/Ciqc1F_ItcyAeb_bAAAGvYsVcXc215.png',
                company: '北京麦田',
                detail: '居住服务 / 不需要融资 / 北京'
            },
            {
                title: '销售工程师',
                time: '[09:09发布]',
                salary: '5k-7k',
                experience: '经验不限',
                words: ['信息安全', '销售'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/00/30/Cgp3O1YxptSAE28wAAClIV6BArc504.jpg',
                company: '格尔软件',
                detail: '信息安全 / 上市公司 / 北京'
            },
            {
                title: 'WEB前端',
                time: '[10:16发布]',
                salary: '8k-16k',
                experience: '经验1-3年 / 本科',
                words: ['人工智能服务', '电商平台','JavaScript'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/image1/M00/00/41/Cgo8PFTUXMmAFPC0AAA3c-6bfPQ092.gif',
                company: '优捷信达',
                detail: '数据服务 | 咨询,IT技术服务 | 咨询 / B轮 / 北京'
            },
            {   title: 'Java开发工程师',
                time: '[09:12发布]',
                salary: '10k-13k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务', '软件服务|咨询', 'JAVAS'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/4F/A5/CioPOWD6YxGAD-CWAAAsgCdp12U635.jpg',
                company: '中电金信',
                detail: 'IT技术服务 | 咨询,软件服务｜咨询 / B轮 / 北京'
            }
            ],
            newList: [
            {
                title: 'java开发工程师',
                time: '[10:46发布]',
                salary: '16k-22k',
                experience: '经验3-5年 / 本科',
                words: ['金融业', 'JAVA', 'Spring'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/65/46/CioPOWGprYKAJMvZAAPBLPU6rns024.png',
                company: '京东方',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {
                title: '高级产品经理',
                time: '[09:11发布]',
                salary: '20k-30k',
                experience: '经验5-10年 / 本科',
                words: ['金融业', '数据产品'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/01/10/Cgp3O1ZeznKAbzIrAAAkAYcCvPQ764.png',
                company: '泰康在线',
                detail: '金融业 / 不需要融资 / 北京'
            },
            {   title: '前端工程师',
                time: '[3天前发布]',
                salary: '3k-6k',
                experience: '经验1-3年 / 不限',
                words: ['人工智能', '电商平台'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/18/E6/CgqKkVb0_Z6Ad1IrAAA30eRM9rk131.jpg',
                company: 'MRS',
                detail: '人工智能服务 / A轮 / 北京'
            }, 
            {
                title: '市场营销',
                time: '[10:34发布]',
                salary: '8k-12k',
                experience: '经验应届毕业生 / 本科',
                words: ['软件服务咨询', '房地产 | 建筑'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/76/DA/Ciqc1F_ItcyAeb_bAAAGvYsVcXc215.png',
                company: '北京麦田',
                detail: '居住服务 / 不需要融资 / 北京'
            },
            {
                title: '资深运维开发工程师',
                time: '[10:20发布]',
                salary: '8k-10k',
                experience: '经验1-3年 / 专科',
                words: ['区块链', 'Linux'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/10/c12126598b7243deae1e1c8b6a5c2e27.png',
                company: '航赞信息',
                detail: '专业服务｜咨询 / 不需要融资 / 北京'
            },
            {
                title: '需求分析师（人员外包类）',
                time: '[09:12发布]',
                salary: '10k-20k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务|咨询', '科技金融', 'JAVA'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image3/M01/02/81/CgoCgV6WZjKAOdIiAAA1Fkyw2Iw250.png',
                company: '中科软',
                detail: 'IT技术服务 | 咨询 / 上市公司 / 北京'
            },
            {
                title: '销售工程师',
                time: '[09:09发布]',
                salary: '5k-7k',
                experience: '经验不限',
                words: ['信息安全', '销售'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image/M00/00/30/Cgp3O1YxptSAE28wAAClIV6BArc504.jpg',
                company: '格尔软件',
                detail: '信息安全 / 上市公司 / 北京'
            },
            {   title: 'Java开发工程师',
                time: '[09:12发布]',
                salary: '10k-13k',
                experience: '经验3-5年 / 本科',
                words: ['IT技术服务', '软件服务|咨询', 'JAVAS'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/i/image6/M00/4F/A5/CioPOWD6YxGAD-CWAAAsgCdp12U635.jpg',
                company: '中电金信',
                detail: 'IT技术服务 | 咨询,软件服务｜咨询 / B轮 / 北京'
            },
            {
                title: 'WEB前端',
                time: '[10:16发布]',
                salary: '8k-16k',
                experience: '经验1-3年 / 本科',
                words: ['人工智能服务', '电商平台','JavaScript'],
                url: 'https://www.lgstatic.com/thumbnail_100x100/image1/M00/00/41/Cgo8PFTUXMmAFPC0AAA3c-6bfPQ092.gif',
                company: '优捷信达',
                detail: '数据服务 | 咨询,IT技术服务 | 咨询 / B轮 / 北京'
            },
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
    width: 470px;
    height: 220px;
    padding: 20px 20px 10px;
    margin: 20px 0 0 20px;
    border: 1px solid rgb(209, 203, 203);
}
.panel:hover {
    box-shadow: 0 0 10px rgb(209, 203, 203);
}
.panel:nth-child(3n-2) {
    margin-left: 0;
}
.panel p {
    margin-bottom: 10px;
}
.panel .panel-head .job-title {
    display: block;
    float: left;
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
    width: 100px;
    height: 30px;
    line-height: 30px;
}
.panel .panel-head .job-title a {
    display: inline-block;
    width: 100px;
}
.panel .panel-head .salary {
    font-size: 20px;
    float: right;
}
.panel .panel-head .release-time,
.panel .experience {
    font-size: 18px;
}
.panel .call-words {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 10px 20px 0 0; 
    font-size: 16px;
    border: 1px solid rgb(209, 203, 203);
    border-radius: 4px;
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
    margin: 24px 0;
}
.panel-footer a {
    float: left;
}
.panel-footer a img {
    width: 50px;
    height: 50px;
}
.footer {
    float: left;
    margin-left: 20px;
    font-size: 18px;
}
.footer p {
    overflow: hidden;
    margin: 0;
    padding: 0;
    color: #999;
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