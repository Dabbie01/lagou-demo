<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-28 10:55:14
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-13 17:50:06
 * @FilePath: \lagou-demo\src\components\city-select\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="pannelVisible">
    <div class="bg"></div>
    <div class="content-box">
      <div class="head">
        <span class="title">切换城市</span>
        <i class="layui-icon layui-icon-close" @click.stop="closeBtn"></i>
      </div>
      <div class="footer">
        <p class="strong-title">亲爱的用户您好：</p>
        <br />
        <p class="msg">切换城市分站，让我们为您提供更准确的信息</p>
        <hr class="hr-dotted" />
        <p class="strong-title">当前定位</p>
        <button
          type="button"
          class="layui-btn layui-btn layui-btn-primary"
          style="color: black"
        >
          <i class="layui-icon layui-icon-location"></i>{{ cityChoosed }}
        </button>
        <p class="strong-title">切换城市</p>
        <div class="layui-btn-container">
          <button
            type="button"
            class="layui-btn layui-btn-primary"
            v-for="(i, index) in cityData"
            :key="index"
            @click="cityChoose(i)"
          >
            {{ i }}
          </button>
        </div>
        <hr class="hr-dotted" />
        <p class="msg" style="color: #999">其他城市正在开通中，敬请期待～</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityData: [
        "全国",
        "北京",
        "上海",
        "杭州",
        "广州",
        "长沙",
        "深圳",
        "南京",
        "苏州",
        "石家庄",
        "武汉",
        "更多",
      ],
      pannelVisible: true,
      cityChoosed: "北京",
    };
  },
  methods: {
    closeBtn() {
      this.pannelVisible = !this.pannelVisible;
    },
    cityChoose(city) {
      this.cityChoosed = city;
      // this.pannelVisible = false
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: rgb(10, 10, 10);
  opacity: 0.1;
  position: fixed;
  width: 100%;
  height: 100%;
  cursor: pointer;
  visibility: visible;
}
.content-box {
  position: absolute;
  z-index: 1;
  left: 30%;
  top: 15%;
  width: 650px;
  height: 700px;
  background-color: rgb(252, 247, 247);
}
.head {
  background-color: #00b38a;
  height: 60px;
  line-height: 60px;
}
.title {
  float: left;
  font-size: 26px;
  color: #fff;
  margin-left: 60px;
}
.head .layui-icon-close {
  float: right;
  margin-right: 15px;
  font-size: 30px;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
}
.footer {
  margin: 40px 60px 0;
}
.hr-dotted {
  text-align: center;
  border-bottom: 1.5px dotted #999 !important;
  margin-top: 30px;
}
.strong-title {
  font-size: 20px;
  font-weight: 600;
}
.strong-title:nth-child(n + 2) {
  margin: 20px 0;
}
.msg {
  font-size: 18px;
}
.layui-btn {
  width: 100px;
  height: 50px;
  font-size: 20px;
  color: #999;
}
.layui-btn-container .layui-btn {
  margin-right: 40px;
}
.layui-btn-container .layui-btn:nth-child(4n) {
  margin-right: 5px;
}
.layui-btn-container .layui-btn:hover {
  width: 105px;
  color: #000;
}
</style>