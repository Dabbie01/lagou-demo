<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-09 11:51:54
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-15 15:29:07
 * @FilePath: \lagou-demo\src\components\select-job-conditions\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content-box">
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">工作地点: </span>
        <ul class="show-choice">
            <li v-for="place in jobPlace" :key="place.index">
                <a href="#" :class="{active:place===isPlace}" @click="changePlace(place)">{{place}}</a>
            </li>
        </ul>
    </div>
    <span class="more">更多 <i class="layui-icon layui-icon-triangle-d" style="color:#00B38A"></i>
            <div class="more-job-place">
                <span class="head-title" style="font-weight: 600; width: 100px;">工作地点: </span>
                <ul class="show-choice">
                    <li v-for="place in jobPlace" :key="place.index">
                        <a href="#" :class="{active:place===isPlace}" @click="changePlace(place)">{{place}}</a>
                    </li>
                </ul>
                <ul class="more-place">
                    <li v-for="more in morePlace" :key="more.index">
                        <a href="#" :class="{active:more===isPlace}" @click="changePlace(more)">{{more}}</a>
                    </li>
                </ul>
                <span><a href="#" style="color: #00B38A; width: 100px">全部城市 <i class="layui-icon layui-icon-right"></i></a></span>
            </div>
        </span>
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">工作经验: </span>
        <ul class="show-choice">
            <li v-for="experience in jobExperience" :key="experience.index">
                <a href="#" :class="{active:experience===isExperience}" @click="changeExperience(experience)">{{experience}}</a>
            </li>
        </ul>
    </div>
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">学历要求: </span>
        <ul class="show-choice">
            <li v-for="education in educationBcakground" :key="education.index">
                <a href="#" :class="{active:education===isEducation}" @click="changeEducation(education)">{{education}}</a>
            </li>
        </ul>
    </div>
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">融资阶段: </span>
        <ul class="show-choice">
            <li v-for="finance in financeStage" :key="finance.index">
                <a href="#" :class="{active:finance===isFinance}" @click="changeFinance(finance)">{{finance}}</a>
            </li>
        </ul>
    </div>
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">公司规模: </span>
        <ul class="show-choice">
            <li v-for="scale in companyScale" :key="scale.index">
                <a href="#" :class="{active:scale===isScale}" @click="changeScale(scale)">{{scale}}</a>
            </li>
        </ul>
    </div>
    <div class="select-area">
        <span class="head-title" style="font-weight: 600; width: 100px;">行业领域: </span>
        <ul class="show-choice">
            <li v-for="field in industryField" :key="field.index">
                <a href="#" :class="{active:field===isField}" @click="changeField(field)">{{field}}</a>
            </li>
        </ul>
    </div>
    <span class="more-fields">更多 <i class="layui-icon layui-icon-triangle-d" style="color:#00B38A"></i>
            <div class="more-industry-field">
                <span class="head-title" style="font-weight: 600; width: 100px;">行业领域: </span>
                <ul class="show-choice">
                    <li v-for="field in industryField" :key="field.index">
                        <a href="#" :class="{active:field===isField}" @click="changeField(field)">{{field}}</a>
                    </li>
                </ul>
                <ul class="more-field">
                    <li v-for="more in moreField" :key="more.index">
                        <a href="#" :class="{active:more===isField}" @click="changeField(more)">{{more}}</a>
                    </li>
                </ul>
            </div>
        </span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobPlace: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津'],
            morePlace: ['重庆', '郑州', '青岛', '合肥', '福州', '济南', '大连', '珠海', '无锡', '佛山', '东莞', '宁波', '常州', '沈阳', '石家庄', '昆明', '南昌', '南宁', '哈尔滨', '海口', '中山', '惠州', '贵阳', '长春', '太原', '嘉兴', '泰安', '昆山', '烟台', '兰州', '泉州'],
            jobExperience: ['不限', '在校/应届', '3年及以下', '3-5年', '5-10年', '10年以上', '不要求'], 
            educationBcakground: ['不限', '大专', '本科', '硕士' , '博士', '不要求'],
            financeStage: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资'],
            companyScale: ['不限', '少于15人', '15-50人', '50-100人', '100-150人', '150-500人', '500-2000人', '2000人以上'],
            industryField: ['不限', '电商平台', '汽车交易平台', '游戏', '互联网', '软件服务 | 咨询', '数据服务 | 咨询'],
            moreField: ['物联网', '分类信息', '消费生活', '社交平台', '内容资讯', '内容社区', '社交媒体', '音频 | 视频媒体', '短视频', 'MCN | 直播平台', '区块链', '信息安全', '信息检索', '新零售', '在线教育', '物流平台', '生活服务', '影视 | 动漫', '新媒体', '科技金融', '居住服务', '新能源汽车制造', '智能硬件', '网络通信', '在线医疗', '旅行 | 出行', '贸易 | 进出口', '教育 | 培训', '休闲 | 娱乐', '服务业', '制造业'],
            isPlace: '全国',
            isExperience: '不限',
            isEducation: '不限',
            isFinance: '不限',
            isScale: '不限',
            isField: '不限',
        }
    },
    methods: {
        changePlace(place){
            this.isPlace = place
        },
        changeExperience(experience){
            this.isExperience = experience
        },
        changeEducation(education){
            this.isEducation = education
        },
        changeFinance(finance){
            this.isFinance = finance
        },
        changeScale(scale){
            this.isScale = scale
        },
        changeField(field){
            this.isField = field
        }
    }
}
</script>

<style scoped>
.content-box {
    width: 1300px;
    margin: 30px 0 0 150px;
    padding: 20px 10px 0 20px;
    background-color: rgb(244, 243, 243);
    border: 1.5px solid #ededed;
    box-sizing: border-box;
    position: relative;
}
.head-title,
.show-choice li,
.more .more-job-place .more-place li,
.more .more-job-place span a,
.more-fields .more-industry-field .more-field li,
.more-fields .more-industry-field span a {
    float: left;
    font-size: 18px;
    height: 35px;
    line-height: 35px;
    text-align: center;
}
.more .more-job-place span a {
    padding: 0 15px;
}
.show-choice li a,
.more .more-job-place .more-place li a,
.more-fields .more-industry-field .more-field li a {
    display: block;
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
}
.show-choice li a:hover,
.more .more-job-place .more-place li a:hover,
.more-fields .more-industry-field .more-field li a:hover,
.active {
    background-color: #00B38A;
    color: #fff;
}
.show-choice li:first-child {
    margin-right: 10px;
}
.more {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 18px;
}
.more:hover,
.more:hover .more-job-place,
.more-fields:hover,
.more-fields:hover .more-industry-field {
    cursor: pointer;
    display: block;
}
.more .more-job-place,
.more-fields .more-industry-field {
    position: absolute;
    top: -20px;
    right: 10px;
    width: 1250px;
    height: 150px;
    background-color: #fff;
    border: 1.5px solid #ededed;
    border-top: 1.5px dashed #ededed;
    padding: 10px 0 0 20px;
    box-sizing: border-box;
    display: none;
}
.select-area {
    overflow: auto;
    margin-bottom: 20px;
}
.more-fields {
    position: absolute;
    top: 300px;
    right: 20px;
    font-size: 18px;
}
</style>