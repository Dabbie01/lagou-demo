<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-30 11:13:08
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-03 11:38:27
 * @FilePath: \lagou-demo\src\components\serch-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="bg-box">
        <div class="serch-box">
            <input type="text" placeholder="搜索职位、公司或地点" @focus="showList(true)" @blur="showList(false)">
            <button type="button" class="layui-btn layui-btn-lg">搜索</button>
            <div class="recommend-serch" v-if="state">
                <p class="rec-title">猜你要搜</p>
                <ul class="rec-names" v-for="title in recommendList" :key="title.index">
                    <li><a href="#">{{title}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            recommendList: ['java', 'ui', '前端', '运营', '大数据', 'ios', 'andriod', 'php', 'phthon', '测试'],
            state: false,
            isShowList: false,
        }
    },
    
    methods: {
        showList(state) {
            if (state) {
            this.state = state
            } else {
                if(this.isShowList){
                    this.isShowList = false
                    this.$refs.focus()
                }else {
                    this.state = state
                }
            }
        },
   },

}
</script>

<style scoped>
.bg-box {
    position: relative;
    height: 140px;
    background: #F2F5F4;
}
.serch-box {
    position: absolute;
    top: 20%;
    left: 18%;
}
.serch-box input {
    width: 1000px;
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
}
.serch-box input:focus{
    border-style:solid;
    border-color: #00b38a;
}
.serch-box .layui-btn-lg {
    position: absolute;
    top: 0%;
    width: 180px;
    height: 64px;
    line-height: 64px;
    border: 0;
    padding: 0;
    font-size: 22px;
    background-color: #00b38a;
}
.recommend-serch {
    width: 1050px;
    height: 550px;
    background-color: rgb(240, 210, 215);
}
.recommend-serch {
    padding-top: 8px;
}
.recommend-serch .rec-title {
    padding-left: 20px;
    color: #999;
    font-size: 20px;
}
.recommend-serch .rec-names li {
    height: 50px;
    padding-left: 20px;
}
.recommend-serch .rec-names li a {
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
}
.recommend-serch .rec-names li:hover,
.recommend-serch .rec-names li a:hover {
    background-color: #00b38a;
    color: #fff;
}

</style>