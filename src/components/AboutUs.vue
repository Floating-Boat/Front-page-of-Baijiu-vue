<template>
  <div class="grid-container">
    <div class="grid-item companyName">
      <h1><span class="showBorder">湖北</span>人自醉商贸有限公司</h1>
    </div>
    <div class="grid-item content">
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;湖北人自醉商贸有限公司是具有独立法人资格、自主经营的有限责任公司。本公司除依法需经批准的项目外，凭营业执照依法自主开展经营活动。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为响应习近平总书记提出的“建成支点、走在前列、谱写新篇”的目标定位，本公司依托独特酿造工艺，生产蕴含荆楚韵味的特色高
        端白酒。本公司从多角度分析了目前行业销售尤其是酒类销售，调研了酒业市场。公司决定利用当下各大热门的新媒体运营平台带来的发展机遇大力进行营销宣传，灵活运用各大新媒体平台为我们产品酒拓宽销路，深度挖掘消费者需求，打造品牌特色，大力开发线上网络销售渠道。力求突破线下实体销售困境，发挥线上营销优势，营造线上线下双渠道的运营网。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，弘扬荆楚酒文化，打造出独特的地方名片。本公司经营范围包含：（1）一般项目：酒类产品销售；（2）玩具、动漫及游艺用品销售；（3）办公用品销售；（4）日用品销售等。
      </p>
    </div>
    <div class="grid-item">
      <img class="picShow" src="../assets/AboutUsPic.jpg" alt="公司图片" />
    </div>
    <div class="grid-item">
      <p class="message">不急不躁酿好酒，精益求精酿品质</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.picShow {
  height: 35rem;
  width: 43rem;
}
.content {
  font-size: 1.2rem;
  line-height: 2.2;
  margin-right: 5rem;
}
h1 {
  font-size: 2.3rem;
}
.showBorder {
  border-bottom: 4px solid rgba(255, 215, 0, 1); /* 添加下边框 */
  padding-bottom: 0.6rem;
}
.grid-container {
  margin: 20px 2rem 5rem 8rem;
  display: grid;
  grid-template-columns: 5fr 5fr 1fr; /* 三列 */
  gap: 10px; /* 列和行之间的间隔 */
}

.grid-item {
  color: #000000;
  text-align: center;
  text-align: left;
}
.message {
  padding-top: 2.5rem;
  writing-mode: vertical-lr;
  font-size: 2rem;
  font-family: xingshu;
}
.companyName {
  grid-column-start: span 3;
}
@font-face {
  /* 字体名称随意起 */
  font-family: xingshu;
  /*你下载字体所在的位置*/
  src: url("../assets/xingshu.ttf");
}
</style>
