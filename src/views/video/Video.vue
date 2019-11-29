<template>
  <div id="pandaChallenge">
    <com-head></com-head>
    <tit :title="'HOME > Videos> D-Campus> Foreigners in Hong Kong - Oliver'"></tit>
    <h5>甲方负责h5部份</h5>
    <div class="relatedVideos">Related Videos</div>
    <video-list :video-lists="VideoLists"></video-list>
    <page @handleCurrentChange="handleCurrentChange" :pageSize="pages.limit" :count="pages.count" ></page>
    <com-foot></com-foot>  
  </div>
</template>

<script>
  // import { getHomeMultidata } from "network/home";
  import ComHead from 'common/ComHead'
  import Tit from 'common/Tit'
  import VideoList from 'components/VideoList'
  import ComFoot from 'common/ComFoot'
  import config from "@/config/index.js"
  

export default {
  name:"videos",
  components: {
    ComHead,
    Tit,
    VideoList,
    ComFoot,
  },
  
  data(){
    return {
      VideoLists: [],
      pages: {
        pageNo: 2, limit: 4, //pageNo:第几页,limit:每页显示多少条
        count:0 //总页数
      }
    }
  },
  methods: {
    handleCurrentChange(val){
      // alert(val);
      this.pages.pageNo=val;
      this.loadList();
    },
    loadList(){
      var pageNo = this.pages.pageNo;
      var limit = this.pages.limit;
      this.axios.get(config.weburl+'/videos/appPage/'+pageNo+'/'+limit).then(res=>{
        this.VideoLists = res.data.data.videoList;
        this.pages.count=res.data.data.count;
      })
    }
  },
  mounted(){
      this.loadList();
  }
}
</script>

<style scoped>
/* #pandaChallenge{width: 1440px;margin: 0 auto;} */
#pandaChallenge .wrap.w1230{width: 1440px;}
h5{text-align: center;width: 1440px;height: 620px;background: #def7ee;margin: 0 auto;margin-top: 16px;line-height: 620px;font-size: 50px}
.relatedVideos{width: 1440px;height: 80px;border-bottom: 1px solid #dcdcdc;line-height: 80px;font-size: 22px;font-weight: 700;margin: 0 auto 27px auto;}
.index_videoList{width:120%; overflow: hidden;}
.index_videoList ul{float: left;width:120%;}
#pandaChallenge .index_videoList ul li{margin: 0 36px 44px 36px;width: 270px;height: 260px;border: 1px solid #eaeaea;}
</style>