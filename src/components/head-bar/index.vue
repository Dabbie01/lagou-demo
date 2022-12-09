<template>
  <div class="main-box">
    <div class="head-left">
            <!-- 技术list -->
            <div class="category-list">
                <span class="list-title">技术</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in technologyList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 产品list -->
            <div class="category-list">
                <span class="list-title">产品</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in productList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 设计list -->
            <div class="category-list">
                <span class="list-title">设计</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in designList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 运营list -->
            <div class="category-list">
                <span class="list-title">运营</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in operationList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 市场list -->
            <div class="category-list">
                <span class="list-title">市场</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in marketList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 销售list -->
            <div class="category-list">
                <span class="list-title">销售</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in saleList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 职能list -->
            <div class="category-list">
                <span class="list-title">职能</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in functionList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
            <!-- 游戏list -->
            <div class="category-list">
                <span class="list-title">游戏</span>
                <span class="cut-off">|</span>
                <ul class="list-body">
                    <li v-for="name in gameList" :key="name.index"><a href="name.url">{{name.name}}</a></li>
                </ul>
                <i class="layui-icon layui-icon-right"></i>
            </div>
    </div>
    <div class="head-right">
            <div class="news-home-main-banner">
                <ul>
                    <li v-for="(item,index) in BannerList" :key="index" v-show="listIndex===index" @mouseover="changeMouse(true)" @mouseleave="changeMouse(false)">
                        <a href="">
                            <img :src="item.BannerUrl" alt="">
                        </a>
                    </li>
                </ul>
                <ol>
                    <li>
                        <span @click="changePage(prev)"></span>
                    </li>       
                </ol>
                <ol>
                    <li>
                        <span @click="changePage(next)"></span>
                    </li>
                </ol>
                <ul>
                    <li v-for="(item,index) in BannerList" :key="index" @click="changeBtn(index)" :class="listIndex===index? 'active':''">
                        <span>{{item.id}}</span>
                    </li>
                </ul>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            technologyList: [   
                {name: 'Java', url: '/job/java'},
                {name: 'PHP', url: '/job/php'},
                {name: 'C++', url: '/job/c++'},
                {name: '区块链', url: '/job/qu'},
                {name: 'Android', url: '/job/android'},
                {name: 'iOS', url: '/job/ios'}
            ],
            productList: [
                {name: '产品经理', url: '/job/pm'},
                {name: '产品总监', url: '/job/pd'},
                {name: '数据产品经理', url: '/job/data-pm'},
                {name: '游戏策划', url: '/job/gd'}
            ],
            designList: [
                {name: 'UI设计师', url: '/job/ui-design'},
                {name: '交互设计', url: '/job/change-design'},
                {name: '网页设计师', url: '/job/page-design'},
                {name: '平面设计师', url: '/job/flat-design'}
            ],
            operationList: [
                {name: '新媒体运营', url: '/job/media-operation'},
                {name: '编辑', url: '/job/editor-operation'},
                {name: '数据运营', url: '/job/data-operation'},
                {name: '运营总监', url: '/job/operation-pd'},
                {name: 'COO', url: '/job/coo'}
            ],
            marketList: [
                {name: '市场营销', url: '/job/market-sale'},
                {name: '市场推广', url: '/job/market-pop'},
                {name: '市场策划', url: '/job/market-plan'},
                {name: '政府关系', url: '/job/market-goven'}
            ],
            saleList: [
                {name: '销售专员', url: '/job/salesman'},
                {name: '销售经理', url: '/job/sales-pm'},
                {name: '销售总监', url: '/job/sales-pd'},
                {name: '大客户代表', url: '/job/customer'}
            ],
            functionList: [
                {name: 'HR', url: '/job/hr'},
                {name: '行政', url: '/job/admin'},
                {name: '财务', url: '/job/finance'},
                {name: '审计', url: '/job/auditor'}
            ],
            gameList: [
                {name: '小游戏开发', url: '/job/small-game'},
                {name: 'U3D', url: '/job/u3d'},
                {name: '游戏策划', url: '/job/game-plan'},
                {name: '游戏运营', url: '/job/game-operation'}
            ],
            BannerList:[
            {BannerUrl: 'https://www.lgstatic.com/10/37f246736c4a459cab7d9c467b86b2fa.png',id:1},
            {BannerUrl: 'https://www.lgstatic.com/10/59037c083e9b43afb04a519330b6f42c.jpg', id:2}
            ],
            listIndex:0,
            timer:null,
        }
    },
    created(){
        this.setTimer();
    },
    computed:{
        prev(){
            if(this.listIndex==0){
                return this.BannerList.length-1;
            }else{
                return this.listIndex-1
            }
        },
        next(){
            if(this.listIndex==this.BannerList.length-1){
                return 0
            }else{
                return this.listIndex+1
            }
        }
   },
   methods: {
        changePage(index){
            this.listIndex=index
        },
        out(){
            this.setTimer()
        },
        over(){
            clearInterval(this.timer)
        },
        setTimer(){
            clearInterval(this.timer);
            this.timer=setInterval(()=>{
                this.listIndex++;
                if(this.listIndex==this.BannerList.length){
                    this.listIndex=0
                }
            },8000)
        },
        changeBtn(index){
            this.listIndex=index
        },
        changeMouse(mouser){
            if(mouser){
                clearInterval(this.timer)
            }else{
                this.setTimer()
            }
        }
   },
   mounted(){
    this.setTimer()
   },
}
</script>

<style scoped>
.main-box {
    position: relative;
    padding-top: 40px;
}
.main-box .head-left {
    width: 540px;
    height: 400px;
}
.head-left .category-list {
    height: 50px;
    line-height: 50px;
}
.head-left .category-list:hover {
    border-top: 2px solid #00b38a;
    border-bottom: 2px solid #00b38a;
}
.head-left .category-list .list-title {
    float: left;
    padding-right: 15px;
    font-size: 20px;
    font-weight: 600;
}
.head-left .category-list .cut-off {
    float: left;
    font-size: 20px;
    font-weight: 600;
    color: #00b38a;
}
.head-left .category-list .list-body {
    float: left;
    font-size: 18px;
}
.head-left .category-list .list-body li {
    float: left;
    margin-left: 25px;
}
.head-left .category-list .list-body li a:hover {
    text-decoration: underline;
}
.head-left .category-list .layui-icon-right {
    float: right;
}

.main-box .head-right {
    position: absolute;
    left: 620px;
    top: 60px;
    width: 980px;
    height: 380px;
    background-color: rgb(109, 109, 157);
}
.news-home-main-banner{
    position: relative;
}
.news-home-main-banner ul:nth-child(1) {
    display: flex;
    justify-content: flex-start;
}
.news-home-main-banner ul:nth-child(1) li a img{
    width: 980px;
    height: 380px;
}
.news-home-main-banner ol{
    position: absolute;
    top: 50%;
}
.news-home-main-banner ol:nth-child(2){
    left: 10px;
    margin-left: 20px;
}
.news-home-main-banner ol:nth-child(3){
    right: 10px;
    margin-right: 20px;
}
.news-home-main-banner ol li span{
    display: block;
    height: 20px;
    width: 20px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    opacity: 0.8;
}
.news-home-main-banner ol:nth-child(2) li span{
    transform: rotate(-135deg);
}
.news-home-main-banner ol:nth-child(3) li span{
    transform: rotate(45deg);
}
.news-home-main-banner ul:nth-child(4) {
    position: absolute;
    right: 450px;
    bottom: 10px;
    display: flex;
    justify-content: center;
}
.news-home-main-banner ul:nth-child(4) li{
    height: 20px;
    width: 20px;
    border-radius: 12px;
    margin: 0 5px;
    opacity: 0.8;
    cursor: pointer;
}
.news-home-main-banner ul:nth-child(4) li span{
    display: block;
    height: 16px;
    width: 16px;
    margin: 2px;
    border-radius: 11px;
    background: #ffffff;
    opacity: 0.8;
    color: #ffffff;
    font-weight: bold;
}
.active{
    background: #f35f57;
}
</style>