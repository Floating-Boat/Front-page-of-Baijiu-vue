<template>
  <div class="container">
    <div class="basicIntroduction">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着互联网时代的发展，作为传统食品生产与加工行业的白酒行业面临着数字化转型的挑战，传播速度慢、影响力小、耗资巨大的传统线下营销活动已经不适合当前白酒行业的营销需求。同时网络媒体的快速发展，又为白酒行业提供了高效而廉价的传播渠道。而大多数中小型白酒企业思维老旧，对于数字化营销依然处于观望和探索阶段，极个别企业对数字化营销有过尝试，但营销效果不理想，不可预见性高；缺乏整体方案，只有“点”，没有“面”；缺乏创新人才，白酒企业对数字化营销人才有需求，但是缺少互联网基因，难以招到合适人才。
      我们提供的特色数字化营销活动方案打造+全媒体矩阵式内容产出与推广服务，是项目前期提供的主要服务，是后续服务的内容基础。通过线上线下相结合模式，以“做荆楚酒的传播者”为定位，为具备一定竞争能力的荆楚酒企业及其特色产品提供品牌推广与产品销售服务，通过线上经营微信公众号、微博、抖音等平台，结合线下与企业或者合作商建立合作关系，帮助荆楚酒企业解决当下品牌竞争能力低，传播渠道窄的问题，以助力湖北白酒产业振兴为起点。主要通过线上平台推广白酒文化以及荆楚酒产品和企业资讯，以“酒与酒文化”——“荆楚酒与荆楚酒故事”——“荆楚酒企业与荆楚酒产品”为主线，通过故事、文章和短视频的方式发布内容，讲好酒文化故事，涵盖青年、中年等多种受众群体，形成一个矩阵式品牌推广结构，为荆楚酒企业制定数字化品牌推广方案，以平台运营费、营销咨询费、品牌管理策划服务费和销售抽成的形式向企业收费。
    </div>
    <div class="content">
      <h1>产品服务</h1>
      <div class="demo-collapse" >
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="全媒体平台矩阵推广与管理" name="1" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对中小酒企自身定位与宣传需求，为企业开通及运营包括但不限于微信公众号平台、微博、网易号、搜狐号、抖音、快手、小红书等媒体平台，提供定制文案内容产出与推广、脚本撰写与拍摄、宣传图片与海报制作、数据监控与分析等服务。推广与管理服务在对企业的推广与管理需求评估后，按月进行收费。
            </div>
          </el-collapse-item>
          <el-collapse-item title="一物一码精准溯源管理系统" name="2" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在消费者端，一物一码系统能够赋予每一件商品专属的ID二维码，消费者通过扫码即可辨别真伪；一物一码配置的溯源系统可供消费者扫码查看商品的“来龙去脉”，包括酒品的生产信息、生产原料、文化背景故事等，可视化追踪产品生产，增强品牌信任感；该系统同时还配备有红包奖励，这使得每一件商品都是流量与信息收集的入口，消费者通过扫码领取红包/积分/卡券/抽奖等方式提供自己的信息给企业，同时通过社群链接进入企业社群，快速打造品牌私域流量池，沉淀用户资源，提升用户复购率。
	在企业端，一物一码系统配置的防窜预警能够根据消费者实时GPS扫码定位，快速确认是否窜货并在后台进行预警；利用导购返利，促进导购员推销，导购员成功推销产品，即可自动获得红包奖励；利用大数据分析，通过海量的扫码次数，搜集并沉淀用户数据，助力企业实现精准二次营销。
            </div>
            <div class="realContent qr">
              <img src="../assets/一物一码1.png" alt="一物一码APP" class="QRCode"/>
              <img src="../assets/一物一码2.png" alt="一物一码码" class="QRCode"/>
            </div>
          </el-collapse-item>
          <el-collapse-item title="私域流量生态系统" name="3" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于微信社群的私域流量生态系统，帮助企业搭建集裂变获客、留存促活、销售变现、客户管理于一体的裂变增长系统，为企业提供私域流量生态系统的搭建、运行、管理等服务。基础服务项目免费，其他增值服务提供一个月免费的试用期，试用期结束后按月收费，可与一物一码溯源系统、荆楚酒数字化品牌管理系统、云酒大数据分析系统搭配购买。
            </div>
            <div class="qr">
              <img src="../assets/flow.png" alt="私域流量生态系统图" class="QRCode"/>
            </div>
          </el-collapse-item>
          <el-collapse-item title="消费者画像多维分析系统" name="4" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;聚合多种高级分析模型，灵活组合各项指标，实时数据灵活洞察用户全生命周期中的行为表现，从而发现指标背后的增长可能。数据链接贯穿线上线下各个营销触点，线上包括微信社群、短信、邮件、广告、小程序、线上品质生活馆；线下包括门店、一物一码、导购、卡券、营销活动等。在获取数据后，建立体系化的客户标签和内容标签，提供行业标签解决方案和顾问服务；通过标签、属性、来源、事件、活跃度等指标形成精准的360°客户画像；通过客户画像背后的多级维度，智能化社群分组，将营销活动精确到可自定义的客户群体，实现精准营销。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，消费者画像多维分析系统还能实现：提高获客效率；提高业务流程转化，转化瓶颈洞察；进行流失分析，定位流失用户群体等功能。
            </div>
            <div class="realContent">
              <img src="../assets/analysis.png" alt="消费者画像多维分析图" class="QRCode"/>
            </div>
          </el-collapse-item>
          <el-collapse-item title="大数据定价辅助工具" name="5" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台的大数据定价辅助工具采用多种埋点形式，采集各大电商app、白酒销售网站网站、线上品质生活馆等各平台数据，并通过API，聚合跨端、跨触点，全面采取白酒行业内各个企业酒品的品牌系列、定位、价格、订单成交量、折扣活动、用户评价等信息，为白酒企业营销管理层人员以及社群用户提供产品动态定价服务。
            </div>
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过收集基于顾客行为的数据，例如：顾客在线上品质生活馆中浏览的产品种类、顾客在该产品上浏览的市场、顾客购买曾经购买的产品种类与价格、加入了购物车的产品信息等，顾客在社群生态系统中的一系列表现，有了实时数据之后，在平台上运行的CRM软件可以与人工智能工具相结合，人工智能会采用动态定价算法并与线上品质生活馆相结合。通过收集数据-使用人工智能进行数据分析-制定最优定价计算算法-制定最优定价公式等一系列流程，品牌管理系统会精准制定单个用户购买产品的价格，并以红包优惠的形式进行动态浮动。人工智能驱动的动态定价在没有增加任何管理成本的情况下，把企业用户的最低价格平均提升了2%-3%，为竞争企业用户也带来了高达10%的收益增长。
            </div>
          </el-collapse-item>
          <el-collapse-item title="客户旅程可视化管理系统" name="6" class="titles">
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持续高速增长始终是企业的核心营销目标，客户旅程可视化管理系统基于消费者画像多维分析系统，通过自动化的客户全生命周期管理，让营销部门面对数以亿计的客户/会员群体，营销自动化运营，减少重复性工作，降低营销成本，提高市场ROI，真正拥有了精细化运营和增长的核心能力。
            </div>
            <div class="realContent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其核心功能是客户旅程可视化管理与智能化策略控制模块。数字化时代，客户与企业交互的触点爆炸式增长，客户体验正从单一触点走向端到端旅程，客户旅程是企业交付最佳体验的根本。通过实时记录用户互动行为，评估每个潜在客户的行为动机及购买意向，及时发现优质商机。使用多维度标签及权重打分，合理分析线索质量；利用营销模型，高效激活线索，孵化商机；精准洞察客户意向，及时发现高意向商机实施转化。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductService",
};
</script>

<style scoped>
.QRCode{
  margin:1rem 4rem 0 4rem;
}
.qr{
  text-align: center;
}
.container{
  margin:3rem 8rem 5rem 8rem;
}
.basicIntroduction{
  font-size: 1.3rem;
  line-height: 2.8rem;
  padding-bottom: 3rem;
  border-bottom: 4px solid rgba(255, 140, 0, 1); /* 添加下边框 */
}
.content{
  margin-top:3rem;
}
.realContent{
  margin-left: 2rem;
  margin-right:2rem;
  font-size:1.1rem;
}

</style>
