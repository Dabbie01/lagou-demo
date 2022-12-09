<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-07 15:56:51
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-07 17:45:10
 * @FilePath: \lagou-demo\src\components\body-footer\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer-box">
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
            <li class="layui-this">热门城市</li>
            <li>热门公司</li>
        </ul>
        <div class="layui-tab-content" style="padding: 0;">
            <div class="layui-tab-item layui-show">
                <div class="origin"  style="overflow: hidden">
                    <ul class="origin-link">
                        <li v-for="obj in originList" :key="obj.index">
                            <a :href="obj.url" target="_blank">{{obj.name}}</a>
                        </li>
                    </ul>
                    <span @click="isShow = !isShow">{{isShow ? '收起 ↑' : '展开 ↓'}}</span>
                </div>
                <div class="more" v-show="isShow">
                    <ul>
                        <li v-for="thing in moreList" :key="thing.index"><a :href="thing.url">{{thing.name}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="layui-tab-item">
                <div class="origin"  style="overflow: hidden">
                    <ul class="origin-link">
                        <li v-for="obj in companyList" :key="obj.index">
                            <a :href="obj.url" target="_blank">{{obj.name}}</a>
                        </li>
                    </ul>
                    <span @click="isShow = !isShow">{{isShow ? '收起 ↑' : '展开 ↓'}}</span>
                </div>
                <div class="more" v-show="isShow">
                    <ul>
                        <li v-for="thing in addList" :key="thing.index"><a :href="thing.url">{{thing.name}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false,
            originList:[
                {url: 'https://www.lagou.com/shenzhen-zhaopin/',name: '深圳人才网'},
                {url: 'https://www.lagou.com/shanghai-zhaopin/',name: '上海人才网'},
                {url: 'https://www.lagou.com/guangzhou-zhaopin/',name: '广州人才网'},
                {url: 'https://www.lagou.com/chengdu-zhaopin/',name: '成都人才网'},
                {url: 'https://www.lagou.com/nanjing-zhaopin/',name: '南京人才网'},
                {url: 'https://www.lagou.com/hangzhou-zhaopin/',name: '杭州人才网'},
                {url: 'https://www.lagou.com/wuhan-zhaopin/',name: '武汉人才网'},
                {url: 'https://www.lagou.com/xian-zhaopin/',name: '西安人才网'},
                {url: 'https://www.lagou.com/changsha-zhaopin/',name: '长沙人才网'},
                {url: 'https://www.lagou.com/suzhou-zhaopin/',name: '苏州人才网'},
                {url: 'https://www.lagou.com/tianjin-zhaopin/',name: '天津人才网'},
                {url: 'https://www.lagou.com/chongqing-zhaopin/',name: '重庆人才网'}
            ],
            moreList: [
                {url: 'https://www.lagou.com/zhengzhou-zhaopin/',name: '郑州人才网'},
                {url: 'https://www.lagou.com/qingdao-zhaopin/',name: '青岛人才网'},
                {url: 'https://www.lagou.com/hefei-zhaopin/',name: '合肥人才网'},
                {url: 'https://www.lagou.com/fuzhou-zhaopin/',name: '福州人才网'},
                {url: 'https://www.lagou.com/jinan-zhaopin/',name: '济南人才网'},
                {url: 'https://www.lagou.com/dalian-zhaopin/',name: '大连人才网'},
                {url: 'https://www.lagou.com/zhuhai-zhaopin/',name: '珠海人才网'},
                {url: 'https://www.lagou.com/wuxi-zhaopin/',name: '无锡人才网'},
                {url: 'https://www.lagou.com/foshan-zhaopin/',name: '佛山人才网'},
                {url: 'https://www.lagou.com/changzhou-zhaopin/',name: '常州人才网'},
                {url: 'https://www.lagou.com/ningbo-zhaopin/',name: '宁波人才网'},
                {url: 'https://www.lagou.com/haikou-zhaopin/',name: '海口人才网'},
                {url: 'https://www.lagou.com/beijing/',name: '北京找工作'},
                {url: 'https://www.lagou.com/shanghai/',name: '上海找工作'},
                {url: 'https://www.lagou.com/guangzhou/',name: '广州找工作'},
                {url: 'https://www.lagou.com/chengdu/',name: '成都找工作'}
            ],
            companyList: [
                {url: 'https://www.lagou.com/gongsi/30830.html',name: '哔哩哔哩招聘'},
                {url: 'https://www.lagou.com/gongsi/62.html',name: '字节跳动招聘'},
                {url: 'https://www.lagou.com/gongsi/16799.html',name: '猿辅导招聘'},
                {url: 'https://www.lagou.com/gongsi/6542.html',name: '小红书招聘'},
                {url: 'https://www.lagou.com/gongsi/218335.html',name: '喜茶招聘'},
                {url: 'https://www.lagou.com/gongsi/107784.html',name: '拼多多招聘'},
                {url: 'https://www.lagou.com/zhaopin/webqianduan/',name: '前端招聘'},
                {url: 'https://www.lagou.com/gongsi/35361.html',name: '跟谁学招聘'},
                {url: 'https://www.lagou.com/gongsi/4128.html',name: '知乎招聘'},
                {url: 'https://www.lagou.com/gongsi/30830.html',name: '火币招聘'},
                {url: 'https://www.lagou.com/gongsi/131846.html',name: 'shopee招聘'},
                {url: 'https://www.lagou.com/gongsi/173038.html',name: 'airbnb招聘'}
            ],
            addList: [
                {url: 'https://www.lagou.com/gongsi/443844.html',name: '嘉尚传媒招聘'},
                {url: 'https://www.lagou.com/zhaopin/rengongzhineng/',name: '人工智能招聘'},
                {url: 'https://www.lagou.com/gongsi/2166.html',name: '粉笔招聘'},
                {url: 'https://www.lagou.com/zhaopin/PHP/',name: 'PHP招聘'},
                {url: 'https://www.lagou.com/gongsi/127875.html',name: '点亮工场招聘'},
                {url: 'https://www.lagou.com/gongsi/113856.html',name: '作业帮招聘'}
            ]
        }
    }
}
</script>

<style scoped>
.footer-box {
    margin-top: 70px;
}
.layui-tab .layui-tab-title li {
    font-size: 20px;
    margin-right: 80px;
    padding: 0;
    line-height: 20px;
}
.layui-tab-content .layui-tab-item {
    margin: 20px 0 50px;
}
.origin .origin-link li,
.more ul li {
    float: left;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    margin-right: 25px;
}
.origin .origin-link li a,
.more ul li a {
    color: rgb(99, 93, 93);
}
.origin .origin-link li a:hover,
.more ul li a:hover {
    text-decoration: underline;
    color: rgb(160, 151, 151);
}
.origin span {
    float: right;
    font-size: 18px;
    color: rgb(160, 151, 151);
    cursor: pointer;
}
.more {
    width: 1450px;
    height: 60px;
}
</style>