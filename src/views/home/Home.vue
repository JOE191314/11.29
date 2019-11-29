<template>
  <div id="videos">
    <com-head ref="messageTitle" @keywordChange="keywordChange" ></com-head>
    <tit :title="'HOME > Videos'"></tit>
    <!-- <list-nav :hanld-type="hanldType"></list-nav> -->
    <!-- 首页分类展示 -->
    <div class="wrap w1230">
      <div class="list_nav">
        <div class="name">
          <span class="srot">SORT BY:</span>
          <span  @click="sortByType(-1)" :class="type==-1?'active':''">Recommendations</span>
          <span  @click="sortByType(1)" :class="type==1?'active':''">News</span>
          <span  @click="sortByType(2)" :class="type==2?'active':''">Campus</span>
          <span  @click="sortByType(3)" :class="type==3?'active':''">STEM</span>
          <span  @click="sortByType(4)" :class="type==4?'active':''">Culture</span>
          <span  @click="sortByType(5)" :class="type==5?'active':''">Workplace</span>
          <span  @click="sortByType(6)" :class="type==6?'active':''">Entertainment</span>
        </div>
        <div class="all">
          <select>
            <option value="video">1233</option>
            <option value="video">faf</option>
            <option value="video">ewrq</option>
            <option value="video">选项呀</option>
          </select>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <video-list :video-lists="VideoLists"></video-list>
    <page @handleCurrentChange="handleCurrentChange" :pageSize="pages.limit" :count="pages.count" ></page>
    <com-foot></com-foot>  
  </div>
</template>

<script>
  // import { getHomeMultidata } from "network/home";
  import ComHead from 'common/ComHead'
  import Tit from 'common/Tit'
  import ListNav from 'components/ListNav'
  import VideoList from 'components/VideoList'
  import Page from 'common/Page'
  import ComFoot from 'common/ComFoot'
  import config from "@/config/index.js"
  

export default {
  name:"videos",
  components: {
    ComHead,
    Tit,
    VideoList,
    Page,
    ComFoot,
    ListNav
  },
  
  data(){
    return {
      VideoLists: [],
      allVideoLists: [],
      pages: {
        pageNo: 1, limit: 12, //pageNo:第几页,limit:每页显示多少条
        count:0 //总页数
      },
      type:-1,//type -1推荐(默认) 1新闻 2校园 3科学 4文化 5职场 6娱乐
      // messageTitles:'',
      keyword:"",//搜索关键词
    }
  },
  methods: {
    handleCurrentChange(val){
      // alert(val);
      this.pages.pageNo = val;
      this.keyword="";
      this.loadList();
    },
    keywordChange(word){
      // alert(val);
      this.keyword=word;
      this.loadList();
      // console.log("videolist:"+keyword);
    },
    sortByType(num){
        this.type = num;
        // alert(this.type);
        this.keyword="";
        this.loadList();
    },
    messageTitle(){
      // console.log(this.$refs.messageTitle.searchList)
      // this.messageTitles = this.$refs.messageTitle.searchList
    },
    loadList(){
      var pageNo = this.pages.pageNo;
      var limit = this.pages.limit;
      var requestURL = config.weburl+'/videos/appPage/'+pageNo+'/'+limit;
      //?type=1
      if(this.type!=-1){
        // 原地址+类型
        requestURL=requestURL+"?type="+this.type;
      }
      //keyword 搜索关键词
      if(this.keyword){
        requestURL=config.weburl+'/videos/searchTitle/'+this.keyword;
        // this.pages=1;
        // this.pages.count=1;
      }
      this.axios.get(requestURL).then(res=>{
        
        // console.log(this.allVideoLists)
        //keyword 搜索关键词
        if(this.keyword){
          // requestURL=config.weburl+'/videos/searchTitle/'+this.keyword;
          // this.pages=1;
          // this.pages.count=1;
          this.VideoLists=res.data.data;
          this.pages.count=this.VideoLists.length;
          this.pages.limit=this.VideoLists.length;
        }else{
          //常规浏览
          this.VideoLists = res.data.data.videoList;
          this.pages.count=res.data.data.count;
          this.pages.limit=12;
        }
      })
    }
  },

  mounted(){
      this.loadList();
      // this.sortByType(-1);
      // this.messageTitle();
  }
}
</script>

<style scoped>
.list_nav{height: 68px;line-height: 68px;}
.list_nav .name{float: left;}
.list_nav .name span{float: left;font-size: 14px;color: #31364c;margin: 0 14px;cursor: pointer;}
.list_nav .name span.active{border-top: 7px solid #48ffbe;line-height: 54px;color: #48ffbe}
.list_nav .name span.srot{margin: 0 6px 0 0;color: #cdcfd7;font-weight: 700;}
.list_nav .all{float: right;width: 120px;height: 44px;position: relative;margin: 15px 0 0 0;}
.list_nav .all select{float: left;width: 100%;height: 44px;font-size: 14px;color: #8a8a8a; outline: none;padding: 12px 20px;border: 1px solid #dedede;border-radius: 2px;;}
.list_nav .all select option{color: #666;text-align: center;}
</style>