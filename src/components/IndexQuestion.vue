<template>
    <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      
      <el-collapse-item title="品牌定位不清，知名度有待提升" name="2">
        <div class="content">
            以“一品襄樊”酒新酒为代表，本公司所营销的几款酒产品在全国范围内的知名度有待提升，品牌管理粗放。本公司将会对几款酒产品进行合理的品牌定位，保证产品质量和品牌个性的一贯性。团队成员已在各大热门新媒体平台（例如抖音、快手、微博等）注册公司官方账号，通过录制宣传小视频、制作广告短片、聘请经验丰富的主播定期直播带货等形式，为几款酒产品进行营销。
        </div>

      </el-collapse-item>
      <el-collapse-item title="营销技术单一，促销手法无序" name="3">
        <div class="content">
            促销活动是个系统性的工作，包含促销设计、促销执行、人员配置、广告、品牌推广以及公共活动等板块。本公司将尝试突破惯例延展一些创新性的促销思路，打破常规思维，在结合原来销售方式的基础上不断创新销售手段，形成属于企业的独特销售体系。例如不定时发放产品优惠券、前几名下单的顾客可获得额外赠品、定期做评论区抽奖活动等。
        </div>
    
      </el-collapse-item>
      <el-collapse-item title="白酒行业本身的发展困境" name="4">
        <div class="content">
            替代品的发展一定程度上制约行业增长。随着人们生活水平的不断提高，人们健康意识的增强使得消费者对含酒精饮料的应用有所节制。而葡萄酒、啤酒、黄酒以及其他不含酒精的饮品的快速发展，一定程度的制约了白酒的消费增长。无序竞争是行业良性发展的潜在障碍。白酒行业作为传统产业，对科技水平要求不高，具有投资小、见效快的特点。本世纪以来，伴随着白酒行业的快速发展，受利益驱动，导致一些不规范和很多小作坊式的企业存在。这些小企业多数资金短缺，生产条件落后，一般以低档和散装酒为主。
        </div>
    
      </el-collapse-item>
      <el-collapse-item title="市场份额接近饱和，欠缺品牌意识" name="1">
        <div class="content">
            目前，湖北省酒类行业销售市场份额接近饱和。本公司将在这种情况下利用好互联网优势资源，使支点酒等营销产品从一众高端酒品牌中获得消费者的认可，打入湖北省的白酒消费市场。帮助其树立品牌意识，发挥自身优势，在激烈的市场竞争中发展壮大起来。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
  </template>
  
  <script>
  export default {
    name: "IndexQuestion",
  };
  </script>
  
  <style scoped>
  .content{

    font-size:1rem;
  }
  
  </style>
  