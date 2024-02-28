<template>
  <div class="grid-container">
    <div>
        <img src="../assets/map.jpg" alt="地图" class="map"/>
    </div>
    <div class="contact">
        <p class="title">人自醉</p>
        <table class="table">
            <tr>
                <th>总部地址：</th>
                <td>湖北省武汉市洪山区青菱乡黄家湖西路2号武汉科技大学黄家湖校区教十一楼A区大学生创业基地306室37工位</td>
            </tr>
            <tr>
                <th>服务热线：</th>
                <td>071-0382-7535</td>
            </tr>
            <tr>
                <th>客服电话：</th>
                <td>13597499532</td>
            </tr>
            <tr>
                <th>业务咨询：</th>
                <td>15623029195</td>
            </tr>
            <tr>
                <th>电子邮箱：</th>
                <td>1973495929@qq.com</td>
            </tr>
        </table>
    </div>
  </div>
  
</template>

<script>
//   import MapShow from './MapShow.vue';
export default {
  name: "ContactUs",
  // components:{
  //     MapShow,
  // },
};
</script>

<style scoped>

th{
    width: 25%;
    height: 3rem;
    vertical-align: top;
}
td{
    vertical-align: top;
    padding-bottom: 1rem;
}
.table{
    margin-top: 1.5rem;
    font-size: 20px;
}
.contact{
    margin-left:1rem;
}
.map{
    max-height: 25rem;
}
.grid-container {
  display: grid;
  grid-template-columns: 5fr 5fr; /* 2列 */
  gap: 10px; /* 列和行之间的间隔 */
  margin:5rem 5rem 5rem 8rem;
}
.title {
  font-size: 37px; /* 设置字体大小 */
  color: #333; /* 设置文字颜色 */
  text-align: left; /* 文字居中对齐 */
  font-family: jiuzhongxiao;
  padding: 0;
  margin-top:0;
  margin-bottom: 0;
  height: 3rem;
  border-bottom: 4px solid rgba(255, 140, 0, 1); /* 添加下边框 */
}
@font-face {
  /* 字体名称随意起 */
  font-family: jiuzhongxiao;
  /*你下载字体所在的位置*/
  src: url("../assets/aajiuzhongxiao.ttf");
}
</style>
