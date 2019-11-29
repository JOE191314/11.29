<template>
<div class="wrap w1230">
  <div class="index_videoList">
      <ul>
        <li v-for="(VideoList,id) in VideoLists" :key="id">
          <router-link tag="a" target="_blank" :to="{path:'/video',query:{ userId: VideoList.id }}">
            <div class="img">
              <img :src="webRoot+VideoList.videoThumb" alt="">
              <div class="time">{{VideoList.timeLength}}</div>
            </div>
            <div class="p" :class="VideoList.level | filteringUT">
              <div class="video_name">{{VideoList.title}}</div>
              <div class="text">
                <span class="date">{{ VideoList.pubTime }}</span>
                <span class="views">{{ VideoList.browse }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
</div>
  
</template>

<script>
//配置文件
import config from "@/config/index.js"

export default {
  props: {
    VideoLists: {
      type: Array,
        default: []
    }
  },
  data(){
    return {
      webRoot:config.weburl
    }
  },
  created(){
    // this.videoLists()
    
  },
  methods: {
     
  },
  filters: {
    filteringUT(key) {
        switch(key) {
          case '1':
            return 'red'
          case '2':
            return 'blue'
          case '3':
            return 'green'
          case '':
            return 'green'
        }
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.list_nav{height: 68px;line-height: 68px;padding: 0 345px;}
.list_nav .name{float: left;}
.list_nav .name span{float: left;font-size: 14px;color: #31364c;margin: 0 14px;}
.list_nav .name span.active{border-top: 7px solid #48ffbe;line-height: 54px;}
.list_nav .name span.srot{margin: 0 6px 0 0;color: #cdcfd7;font-weight: 700;}
.list_nav .all{float: right;width: 120px;height: 44px;position: relative;margin: 15px 0 0 0;}
.list_nav .all select{float: left;width: 100%;height: 44px;font-size: 14px;color: #8a8a8a; outline: none;padding: 12px 20px;border: 1px solid #dedede;border-radius: 2px;;}
.list_nav .all select option{color: #666;text-align: center;}

.index_videoList{width:100%;}
.index_videoList ul{float: left;width:120%;overflow: hidden;margin-left: -24px;}
.index_videoList ul li{float: left;margin: 0 24px 44px 24px;width: 270px;height: 260px;border: 1px solid #eaeaea;}
.index_videoList ul li a{float: left;width: 270px;height: 260px;}
.index_videoList ul li a .img{height: 153px;width: 270px;overflow: hidden;position: relative;}
.index_videoList ul li a .img img{width: 100%;height: 100%;}
.index_videoList ul li a .img .time{position: absolute;right: 15px;bottom: 9px;width: 54px;height: 18px;color: #424134;line-height: 18px;border-radius: 5px;color: #fff;font-size: 12px;background: 
  #424134;text-align: center;}
.index_videoList ul li a .p.red{border-top: 6px solid #f04e4e;}
.index_videoList ul li a .p.blue{border-top: 6px solid #56b9f0;}
.index_videoList ul li a .p.green{border-top: 6px solid #5ad798;}
.index_videoList ul li a .p .video_name{height:52px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;padding: 0 20px;width: 230px;;font-size: 18px;color: #31364c;line-height: 24px;margin: 12px 0 0 0;}
.index_videoList ul li a .p .text{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 15px;color: #858585;margin: 8px 0 0 0;line-height: 26px;border-top: 1px solid #f5f5f5;height: 26px;padding: 0 20px;width: 230px;}
.index_videoList ul li a .p .text .date{margin: 0 12px 0 0;float: left;width: 144px;display: block;height: 26px;}
.index_videoList ul li a .p .text .views{float: right}
</style>