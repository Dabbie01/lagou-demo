<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-07 17:39:56
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-09 11:29:07
 * @FilePath: \lagou-demo\src\components\footer-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer-box">
    <div class="part-one">
        <div class="left">
            <a class="download" :href="aUrl"><i class="layui-icon layui-icon-cellphone"></i> 下载拉勾APP
            <img :src="appUrl" class="qr-code-app"></a>
            <br>
            <a class="wechat"><i class="layui-icon layui-icon-link"></i> &nbsp;微信小程序
            <img :src="wechatUrl" class="qr-code-wechat"></a>
            <br>
            <a href="#" class="official"><i class="layui-icon layui-icon-login-wechat"></i> 拉勾公众号
            <img :src="officialUrl" class="qr-code-official"></a>
            <a :href="weiboUrl" target="_blank" class="weibo"><i class="layui-icon layui-icon-login-weibo"></i> 拉勾微博</a>
        </div>
        <div class="right">
            <dl v-for="obj in List" :key="obj.index">
                <dt>{{obj.title}}</dt>
                <dd v-for="data in obj.links" :key="data.index">
                    <a :href="data.url" target="_blank">{{data.name}}</a>
                </dd>
            </dl>
        </div>
    </div>

    <div class="part-two">
        <p><span class="big-title">拉勾招聘</span><span class="small-title"> | 专 注 互 联 网 人 才 招 聘</span></p>
        <ul class="link">
            <li><a :href="ipUrl" target="_blank">©2021 拉勾网 京ICP备14023790号-2</a></li>
            <li><a :href="policeUrl" target="_blank"><i class="layui-icon layui-icon-transfer"></i> 京公网安备 11010802024043号</a></li>
            <li><a :href="licenseUrl" target="_blank"><i class="layui-icon layui-icon-auz"></i> 电子营业执照</a></li>
            <li><a :href="hrUrl" target="_blank">人力资源服务许可证</a></li>
            <li><a :href="telecomUrl" target="_blank">增值电信业务经营许可证</a></li>
        </ul>
        <p class="footer-text">
            <span>客服（投诉）电话: 4006 282 835 (9:00 - 18:00);</span>
            <span>违法/不良信息/推荐算法/未成年人举报渠道同客服电话; </span>
            <span>北京人社局电话: 12333</span>
            <a :href="reportUrl">拉勾招聘投诉举报制度</a>
            <a :href="reUrl">网上有害信息举报专区</a>
        </p>
        <div class="rocket">
            <div class="toTop" v-show="isShow" @click="toTop"><i class="layui-icon layui-icon-top"></i></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            aUrl: 'https://help.lagou.com/staticpage/app_download/pc/index.html',
            appUrl: 'https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210729/app_download_3.png',
            wechatUrl: 'https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210625/1624592519467.jpg',
            officialUrl: 'https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210729/main_foot.png',
            weiboUrl: 'https://weibo.com/lagou720',
            List: [
                {
                    title: '企业服务',
                    links: [
                        {
                            url: 'https://activity.lagou.com/activities/business-2018/index.html#/', name: '招聘抢人宝典'
                        },
                        {
                            url: 'https://www.lagou.com/gongsi/', name: '公司搜索'
                        },
                        {
                            url: 'https://help.lagou.com/staticpage/app_download/pc/index.html', name: '拉勾APP'
                        }
                ]
                },
                {
                    title: '用户帮助',
                    links: [
                        {
                            url: 'https://www.lagou.com/privacy.html', name: '用户协议'
                        },
                        {
                            url: 'https://www.lagou.com/policy.html', name: '隐私政策'
                        }
                    ]
                },
                {
                    title: '联系方式',
                    links: [
                        {
                            url: '#', name: '服务热线：4006 2828 35 (9:00 -18:00)'
                        },
                        {
                            url: '#', name: '企业服务邮箱：cc@lagou.com'
                        },
                        {
                            url: 'https://www.lagou.com/about.html', name: '联系我们'
                        }
                    ]
                }
            ],
            ipUrl: 'https://beian.miit.gov.cn/#/Integrated/index',
            policeUrl: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024043',
            licenseUrl: 'https://www.lagou.com/wn/license?id=1',
            hrUrl: 'https://www.lagou.com/wn/license?id=2',
            telecomUrl: 'https://www.lagou.com/wn/license?id=3',
            reportUrl: 'https://www.lagou.com/wn/statement/complaintReport',
            reUrl: 'https://www.12377.cn/',
            isShow: false,
        }

    },
    mounted() {
         // 此处true需要加上，不加滚动事件可能绑定不成功
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 30 ? (this.isShow = true) : (this.isShow = false);
        },
        toTop() { 
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
            if (top <= 0) {
                clearInterval(timeTop);
            }
         }, 10);
        }
     }
}
</script>

<style scoped>
/* 底部链接处 */
.part-one {
    height: 200px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 60px 0;
}
/* 左边部分 */
.part-one .left {
    float: left;
    width: 30%;
    height: 200px;
    box-sizing: border-box;
    padding: 8px 0 0 140px;
    border-right: 2px solid rgb(99, 93, 93);
}
.left .download,
.left .wechat {
    display: block;
    background-color: #fff;
    border: 1px solid rgb(99, 93, 93);
    width: 220px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
    font-size: 18px;
    color: rgb(99, 93, 93);
}
.left .download:hover,
.left .wechat:hover {
    cursor: pointer;
    color: #fff;
    background-color: #00b38a;
}
/* 实现二维码显示与隐藏 */
.left .download,
.left .wechat,
.left .official {
    position: relative;
}
.left .qr-code-app {
    position: absolute;
    left: 230px;
    top: 0;
    width: 160px;
    height: 160px;
    display: none;
}
.left .qr-code-wechat {
    position: absolute;
    left: 230px;
    top: 0;
    width: 160px;
    height: 160px;
    display: none;
}
.left .qr-code-official {
    position: absolute;
    left: 0;
    top: -170px;
    width: 160px;
    height: 160px;
    display: none;
}
.left .download:hover .qr-code-app,
.left .wechat:hover .qr-code-wechat,
.left .official:hover .qr-code-official

 {
    display: block;
}
/*公众号&微博 */
.left .official,
.left .weibo {
    font-size: 18px;
    margin-right: 10px;
}
/* 右边部分 */
.part-one .right {
    float: left;
    width: 70%;
    height: 200px;
    box-sizing: border-box;
    padding: 8px 0 0 200px;
}
.right dl {
    float: left;
    margin-right: 200px;
}
.right dl:nth-child(3n){
    margin: 0;
}
.right dl dt {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
}
.right dl dd {
    font-size: 18px;
    color: rgb(99, 93, 93);
    margin-top: 20px;
}

/* 底部详情 */
.part-two {
    height: 220px;
    background-color: #F2F5F4;
    padding-top: 50px;
    box-sizing: border-box;
}
.part-two .big-title {
    font-size: 28px;
    font-weight: 600;
    margin-left: 750px;
}
.part-two .small-title {
    font-size: 20px;
}
.part-two .link {
    overflow: hidden;
    margin: 20px 0 30px 300px;
}
.part-two .link li {
    float: left;
    margin-right: 40px;
}
.part-two .link li a,
.part-two .footer-text span,
.part-two .footer-text a{
    font-size: 18px;
}
.part-two .footer-text {
    margin-left: 150px;
}
.footer-text span,
.footer-text a {
    margin-right: 40px;
}
/* 火箭回到顶部 */
.rocket .toTop {
    position: fixed;
    right: 50px;
    bottom: 150px;
    cursor: pointer;
}
.rocket .toTop i {
    font-size: 80px;
}
</style>