<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-13 17:24:18
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-14 11:56:40
 * @FilePath: \lagou-demo\src\components\pagination\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="pagination">
    <span
      class="item"
      :class="{ 'page-disable': 1 === mCurrentPage }"
      @click.stop="prev"
      >上一页</span
    >
    <span
      class="item"
      :class="{ 'page-is-current': 1 === mCurrentPage }"
      @click.stop="toPage({ index: 1 })"
      >1</span
    >
    <span v-show="mCurrentPage > 4">···</span>
    <span
      class="item"
      v-show="n.visible"
      v-for="n in pageArr"
      :key="n.index"
      :class="{ 'page-is-current': n.index === mCurrentPage }"
      @click.stop="toPage(n)"
      >{{ n.index }}</span
    >
    <span v-show="mCurrentPage < total - 3">···</span>
    <span
      class="item"
      :class="{ 'page-is-current': total === mCurrentPage }"
      @click.stop="toPage({ index: total })"
      >{{ total }}</span
    >
    <span
      class="item"
      :class="{ 'page-disable': total === mCurrentPage }"
      @click.stop="next"
      >下一页</span
    >
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      mCurrentPage: this.currentPage,
      pageArr: [],
    };
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  created() {
    for (let i = 0; i < this.total - 2; i++) {
      let page = {
        index: i + 2,
        visible: false,
      };
      if (i < 2) {
        page.visible = true;
      }
      this.pageArr.push(page);
    }
  },
  watch: {
    mCurrentPage: function (n) {
      this.pageArr.forEach(function (p) {
        p.visible = true;
      });
      if (n < this.total - 3) {
        for (let i = n + 3; i < this.total; i++) {
          this.pageArr[i - 2].visible = false;
        }
      }
      if (n > 4) {
        for (let i = 2; i < n - 2; i++) {
          this.pageArr[i - 2].visible = false;
        }
      }
    },
  },
  methods: {
    toPage(n) {
      this.mCurrentPage = n.index;
      this.$emit("update:currentPage", this.mCurrentPage);
    },
    prev() {
      this.mCurrentPage -= 1;
    },
    next() {
      this.mCurrentPage += 1;
    },
  },
};
</script>

<style scoped>
#pagination {
  margin: 50px 0 100px 600px;
}
#pagination .item {
  cursor: pointer;
  color: #555;
  display: inline-block;
  border: 1px solid #ededed;
  height: 30px;
  line-height: 30px;
  padding: 5px 15px;
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
}
.item:first-child {
  margin: 0 5px 0 0;
}
.item .page-disable {
  color: silver !important;
  cursor: default !important;
}
.page-is-current {
  background-color: #00b38a;
  color: #fff !important;
  font-weight: 600;
  border-color: #00b38a;
}
</style>