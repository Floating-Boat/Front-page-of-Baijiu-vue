<template>
  <div>
    <HeadNavigation />
    <!-- 占位 -->
    <p class="placeHolder" style="height:60px;margin: 0;"></p>  
    <!-- <AboutUs /> -->
    <!-- <ContactUs/> -->
    <!-- <ProductService/> -->
    <router-view></router-view>
    <!-- <IndexShow/> -->
    <BottomShow/>
  </div>
</template>

<script>
import HeadNavigation from './components/HeadNavigation';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import ProductService from './components/ProductService'
// import IndexShow from './components/IndexShow.vue';

import BottomShow from './components/BottomShow';

export default {
  name: "App",
  components: {
    HeadNavigation,
    // AboutUs,
    // ContactUs,
    // ProductService,
    // IndexShow,
    BottomShow
  },
  
};
</script>
