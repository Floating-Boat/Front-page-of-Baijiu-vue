<template>
  <div class="topContainer">
  <div class="grid-container">
    <div class="aContainer">
      <!-- <router-link to="/service" class="aShow">产品服务</router-link>
      <router-link to="/partner" class="aShow">合作伙伴</router-link>
      <router-link to="/about" class="aShow">关于我们</router-link>
      <router-link to="/contact" class="aShow">联系我们</router-link> -->
      <a class="aShow">产品服务</a>
      <a class="aShow">合作伙伴</a>
      <a class="aShow">关于我们</a>
      <a class="aShow">联系我们</a>
    </div>
    <div class="picShow"><img src="../assets/微信.png" alt="微信图片" class="realPic" style="margin-left: 2rem;"/>
      <img src="../assets/微博.png" alt="微博图片" class="realPic" style="margin-left: 1.5rem;" /></div>
    <div>
      <p>友情链接：武汉科技大学附属天佑医院 武汉科技大学沁水青山BBS 武汉科技大学城市学院</p>
      <p>联系电话：071-0382-7535</p>
      <p>联系地址：湖北省武汉市洪山区青菱乡黄家湖西路2号武汉科技大学黄家湖校区教十一楼A区大学生创业基地306室37工位</p>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: "BottomShow",
};
</script>

<style scoped>
.realPic{
  max-height: 5rem;
  padding: 0;
}
.realPic:hover{
  cursor: pointer;
}
.aContainer{
  text-align: center;
  padding: 1.7rem 0;
  border-bottom: 2px solid rgb(192, 192, 192);/* 添加下边框 */
  border-top: 2px solid rgb(192, 192, 192);/* 添加下边框 */
}
.aShow{
  margin:0 6rem
}
.aShow:hover{
  cursor: pointer;
  color:white;
}
.grid-container {
  display: grid;
  grid-template-columns: 5fr 1fr; /* 2列 */
  gap: 10px; /* 列和行之间的间隔 */
  
}
.topContainer{
  background: black;
  color:rgb(192,192,192);
  padding:2rem 7rem 2rem 7rem;
}
.picShow{
  margin-top:3rem;
  grid-row: 1 / span 2; /* 第二个 div 跨越两行 */
  grid-column: 2;
}

</style>
