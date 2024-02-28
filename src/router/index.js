
import { createRouter, createWebHistory } from 'vue-router' // 导入 Vue Router
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import IndexShow from '../components/IndexShow';
import ProductService from '../components/ProductService';
import PartnerShow from '../components/PartnerShow';

export default createRouter({
  history: createWebHistory(),
  routes: [ // 添加路由配置
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: "/home",
      component: IndexShow
    },
    {
      path: "/service",
      component: ProductService
    },
    {
      path: "/partner",
      component: PartnerShow
    },
    {
      path: "/about",
      component: AboutUs
    },
    {
      path: "/contact",
      component: ContactUs
    }
  ]
})