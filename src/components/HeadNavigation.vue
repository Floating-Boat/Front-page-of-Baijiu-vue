<template>
    <el-menu 
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router="true"
      @select="handleSelect" style="position: fixed ;margin-top: 0;width: 100%;top:0;padding-top: 5px; height: 4rem; z-index: 999;"
    >
      <el-menu-item >
        <img
          src="../assets/MainLogo.jpg"
          alt="公司Logo"
          class="logo"
          style="margin-top: -10px; margin-left: 2rem"
        />
        <label class="title" style="margin-left: -20px">人自醉</label>
      </el-menu-item>
      <el-menu-item route="home"
        index="1"
        class="nav"
        style="margin-left: 30px; font-size: 16px"
        >首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</el-menu-item
      >
      <el-menu-item route="/service"
        index="2"
        class="nav"
        style="margin-left: 30px; font-size: 16px"
        >产品服务</el-menu-item
      >
      <el-menu-item route="/partner"
        index="3"
        class="nav"
        style="margin-left: 30px; font-size: 16px"
        >合作伙伴</el-menu-item
      >
      <el-menu-item route="/about"
        index="4"
        class="nav"
        style="margin-left: 30px; font-size: 16px"
        >关于我们</el-menu-item
      >
      <el-menu-item route="contact"
        index="5"
        class="nav"
        style="margin-left: 30px; font-size: 16px"
        >联系我们</el-menu-item
      >
    </el-menu>
</template>
<script>
export default {
  name: "HeadNavigation",
  
};
</script>

<style lang="css">
.logo {
  max-width: 70px;
  margin-right: 0;
}
/* 公司名称样式 */
.title {
  font-size: 37px; /* 设置字体大小 */
  color: #333; /* 设置文字颜色 */
  text-align: center; /* 文字居中对齐 */
  padding-top: 38px;
  font-family: jiuzhongxiao;
  border-radius: 10px; /* 圆角边框 */
  margin-right: 0;
}

.title:hover {
  cursor: pointer;
}

@font-face {
  /* 字体名称随意起 */
  font-family: jiuzhongxiao;
  /*你下载字体所在的位置*/
  src: url("../assets/aajiuzhongxiao.ttf");
}
</style>
