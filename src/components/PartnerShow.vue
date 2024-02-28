<template>
  <div class="topImgContainer">
    <img class="topImg" src="../assets/partnerTop.png" alt="展示图片" />
    <div class="topImgContent">
      <h1 style="font-size: 3.6rem; margin-bottom: 0.7rem">合作伙伴</h1>
      <h1 style="margin-top: 0; padding-top: 0">&nbsp;Partners</h1>
    </div>
  </div>
  <div class="dataContainer">
    <h1>关键数据</h1>
    <table class="dataTable">
      <tr>
        <th><p class="dataP">1个</p></th>
        <th><p class="dataP">1座</p></th>
        <th><p class="dataP">20.7%</p></th>
      </tr>
      <tr class="smallSize">
        <td>合作厂家</td>
        <td>人自醉办公室所在城市数量</td>
        <td>提升效益</td>
      </tr>
    </table>
  </div>
  <div class="partner">
    <div class="partnerDetails">
      老河口仙人酒位于老河口市仙人渡镇，始建于宋乾德元年，扩建于1979年。1995年由粮食局、仙人渡政府组建了股份制的老河口市仙人酒厂。2000年全市第一家承债式民营企业至今。酒厂继承传统的酿酒工艺，引进五粮液酒厂生产技术，聘请该厂高级工程师肖敏峰为技术顾问。厂内有取自清醇甘冽的千年观音泉水精心酿造的仙人系列酒“仙人粮液”“商务原”“帆风顺”等10个名牌，48个品种。推出有20年、3团年陈酿年份原浆酒，酿制出42度、46度、50度，53度等针对不同消费人群的酒。在湖北、河南等地占有较好的市场份额。酒厂生产的“仙人”系列酒先后荣获“中国乡镇企业博览会金奖”，2007年-2012年获“中国酒类博览会金奖”、2012年-2013年获“湖北省重合同守信用单位”、2014年被评为“湖北省第十届消费者满意商品”、2015年被评为“第二届襄阳市知名商标”，2016年被评为“湖北省著名商标”，2017-2019年湖北省农博会金奖。
    </div>
    <div class="block text-center" m="t-4" >
      <el-carousel trigger="click" height="25rem" style="width: 38.6rem;">
        <el-carousel-item
          v-for="(image, index) in images"
          :key="index"
          style="height: 25rem;width: auto;"
        >
          <!-- <img :src="image" :alt="'Image ' + index" /> -->
          <img
            class="pics"
            v-if="index == 0"
            src="../../static/partner1.jpg"
            :alt="'Image ' + index"
          />
          <img
            class="pics"
            v-if="index == 1"
            src="../../static/partner2.jpg"
            :alt="'Image ' + index"
          />
          <img
            class="pics"
            v-if="index == 2"
            src="../../static/partner3.jpg"
            :alt="'Image ' + index"
          />
          <img
            class="pics"
            v-if="index == 3"
            src="../../static/partner4.jpg"
            :alt="'Image ' + index"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerShow",
  data() {
    return {
      images: [
        "../../static/partner1.jpg",
        "../../static/partner2.jpg",
        "../../static/partner3.jpg",
        "../../static/partner4.jpg",
      ], // 实际的图片路径
    };
  },
};
</script>

<style scoped>
.partnerDetails{
    font-size:1.1rem;
    line-height: 2rem;
}
.pics{
    height: 25rem;
    width:38.6rem;
}
.partner {
  display: grid;
  grid-template-columns: 4fr 5fr; /* 2列 */
  gap: 3rem; /* 列和行之间的间隔 */
  padding: 3rem 4rem 3rem 10rem;
  background-color: rgb(220, 220, 220);
}
.dataP {
  border-bottom: 4px solid rgba(255, 140, 0, 1); /* 添加下边框 */
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 2rem;
  padding-top: 0;
  padding-bottom: 0;
}
.dataContainer th {
  width: 20rem;
}
.smallSize {
  font-size: 1rem;
}
.dataTable {
  font-size: 3rem;
  text-align: left;
}
.dataContainer {
  padding-left: 10rem;
  margin-bottom: 2rem;
}
.topImgContainer {
  padding: 0;
  margin: 0;
  position: relative; /* 使用相对定位 */
  display: inline-block; /* 确保容器与图片大小一致 */
}
.topImg {
  width: 100%;
  height: 15rem;
  filter: blur(2px); /* 5px的模糊效果，你可以根据需要调整值 */
}
.topImgContent {
  position: absolute; /* 使用绝对定位 */
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-45rem, -50%); /* 居中定位 */
  padding: 5px; /* 可选：添加内边距 */
}
</style>
