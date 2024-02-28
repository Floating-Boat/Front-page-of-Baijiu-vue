<template>
  <div class="topContainer">
    <div class="FtShow">
      <div class="FtContent">
        <h1 class="FtTitle">人自醉</h1>
        <p class="FtAfterContent">
          湖北人自醉商贸有限公司主要成员都来自于武汉科技大学，是一个集各类专长为一体的多功能精英团队。我们皆来自不同专业、各有所长，自发形成创业团队，着手创业项目的策划工作。团队的核心成员不仅在工作上默契十足，在生活中也有着良好和谐的人际关系，共同构成本团队庞大的人脉关系网。
        </p>
      </div>
      <div>
        <img src="../assets/IndexPic1.jpg" alt="companyShow" />
      </div>
    </div>
    <div class="SdShow">
      <p class="SdContent">
        作为可信赖的数字化转型卓越伙伴，我们团队致力于帮助传统的白酒企业实现从公司特色酒产品的商业模式设计到产品文化的发掘、酒类产品的文化产品设计、最终打造成自己独特的销售品牌，增加酒厂的销售，促进当地农民的就业和收入增长。通过短视频
        APP、购物软件、网络社交媒体等平台，对公司对接代理销售的产品进行线上营销宣传，结合线下推广，力求突破线下酒业实体销售困境。
      </p>
    </div>
    <div class="TdShow">
      <h1 class="TdTitle">卓越职场</h1>
      <div class="TdContent">
        <div class="TdAfterContent">
          <p>
            每一次杰出的营销变革的核心在于杰出的人才。每天，我们的市场推广专家都在努力做出非凡的工作，为着共同目标而努力，为各个企业推广酒的业务蓬勃发展助力。
          </p>
          <p>
            加入我们，用你的创意、专业知识和决心，创造有影响力的市场推广策略，解决企业面临的重大挑战。
          </p>
          <p>
            在与各行各业的企业合作中，我们始终与杰出的企业家、创新技术和领先企业密切合作，为客户、员工和社区创造更多价值。
          </p>
          <p>与我们一起工作，一同创造积极且持久的市场推广价值。</p>
        </div>
        <div>
          <img src="../assets/customer.jpg" alt="person" class="customerPic" />
        </div>
      </div>
    </div>
    <div class="FstShow">
      <h1 class="FstTitle">中国酒文化</h1>
      <div class="FstContent">
        <div style="height: 30rem">
          <CarouselPics/>
        </div>
        <div class="FstAfterContent">
            <p>白酒酿造从建国之初发展到今天，科研工作一直有序推进。从加工过程，到微生物发酵，到蒸馏技术、贮存技术等环节，都一直在不断投入科研力量，尤其是 2007 年之后，在中国白酒 169 计划、中国白酒 3C 计划推动下，白酒产业科技进入更深层次和更宽广的领域。目前，在国际上关于白酒风味化合物的研究我们处于世界领先，对于白酒中风味化合物的认知有几百种，白酒风味物质的阈值研究及相关关系研究同样处于世界领先。尤其是在关于白酒酿造微生态的研究，更处于国际领先水平，在国际微生物、风味化学等领域产生了巨大影响。</p>
          <p>
            白酒是中华文化的典型代表，是中国传统文化中最富生命力的文化内核，数千年白酒酿造史和一代代酿酒工匠的孜孜追求，让传承成为中国名酒企业血脉中最尊贵的符号。在互联网迅速发展的今天，如何利用互联网+业态新模式助力百年酒文化传承成为我们要探讨的重要命题。未来，建设中国特色社会主义强国的历程，就是中国酒走出去的历程。
          </p>
        </div>
      </div>
    </div>
    <div class="FiveShow">
      <h1 class="FiveTitle">常见问题</h1>
      <div class="FiveContent">
            <IndexQuestionVue/>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselPics from "./CarouselPics.vue";
import IndexQuestionVue from './IndexQuestion';

export default {
  name: "IndexShow",
  components: {
    CarouselPics,
    IndexQuestionVue,
  },
};
</script>

<style scoped>
.FiveShow{
    padding: 2rem 17rem 4rem 13rem;
}
.FstAfterContent{
    line-height: 2.3rem;
}
.FstTitle{
    font-size: 2.6rem;
}
.FstContent {
  display: grid;
  grid-template-columns: 3fr 5fr; /* 2列 */
  gap: 1.5rem; /* 列和行之间的间隔 */
  font-size: 1.2rem;
}
.FstShow {
  padding: 2rem 17rem 4rem 13rem;
  background-color: rgb(220, 220, 220);
}
.customerPic {
  max-height: 30rem;
}
.TdShow {
  padding-left: 13rem;
  line-height: 2.2rem;
}
.TdTitle {
  font-size: 2.6rem;
  margin-bottom: 0;
}
.TdContent {
  display: grid;
  grid-template-columns: 3fr 5fr; /* 2列 */
  gap: 3rem; /* 列和行之间的间隔 */
  font-size: 1.1rem;
}
.SdContent {
  border-left: 4px solid rgba(255, 140, 0, 1); /* 添加左边框 */
  padding-left: 1rem;
  font-size: 2rem;
}
.SdShow {
  padding: 2rem 17rem 2rem 13rem;
  background-color: rgb(220, 220, 220);
}
.FtAfterContent {
  font-size: 1.3rem;
  margin-top: 0;
  line-height: 2.2rem;
}
.FtTitle {
  font-size: 4rem;
  margin-bottom: 0;
}
.FtContent {
  padding-left: 13rem;
}
.FtShow {
  display: grid;
  grid-template-columns: 5fr 5fr; /* 2列 */
  gap: 15px; /* 列和行之间的间隔 */
}
</style>
