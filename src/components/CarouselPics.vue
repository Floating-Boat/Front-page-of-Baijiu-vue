<template>
    <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="150px" arrow="always" style="height: 30rem;width: 20rem;">
        <el-carousel-item v-for="(image, index) in images" :key="index" style="height: 30rem;" >
      <!-- <img :src="image" :alt="'Image ' + index" /> -->
      <img class="pics" v-if="index==0" src="../../static/baijiu1.jpg" :alt="'Image ' + index" />
      <img class="pics" v-if="index==1" src="../../static/baijiu2.jpg" :alt="'Image ' + index" />
      <img class="pics" v-if="index==2" src="../../static/baijiu3.jpg" :alt="'Image ' + index" />
      <img class="pics" v-if="index==3" src="../../static/baijiu4.jpg" :alt="'Image ' + index" />
    </el-carousel-item>
    </el-carousel>
    <!-- <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
  </div>
  </template>
  
  <script>
  export default {
    name: "CarouselPic",
    data() {
      
    return {
      images: ['../../static/baijiu1.jpg',
       '../../static/baijiu2.jpg',
        '../../static/baijiu3.jpg', 
        '../../static/baijiu4.jpg'], // 实际的图片路径
    };
  },
  };
  </script>
  
  <style scoped>
.pics{
    max-height: 30rem;
}
  
  </style>
  