<template>
  <div class="g_head">
    <div class="wrap w1200">
      <div class="logo">
       <router-link tag="a" to="/home"><img src="~assets/images/index_logo.png" alt=""></router-link>
      </div>
      <div class="search">
        <img src="~assets/images/index_search.png" alt="">
        <input type="text" v-model="keyword" @keyup="keywordChange">
      </div>
      <div class="nav">
        <ul>
          <router-link tag="li" to="/home">Videos</router-link>
          <router-link tag="li" to="/pandaChallenge">Panda Challenge</router-link>
          <router-link tag="li" to="/game">Game</router-link>
          <router-link tag="li" to="/about">About</router-link>
        </ul>
      </div>
      <!-- 登录 -->
      <div class="login">
        <img src="~assets/images/index_login.png" alt="">
        <p>Log In</p>
      </div>
      <!-- 语言控制 -->
      <div class="language">
        <span class="en">EN</span><em>|</em>
        <span class="numerous">繁</span><em>|</em>
        <span class="simple">简</span>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
 import config from "@/config/index.js"
export default {
  data(){
    return {
      keyword: '',
      // searchList:[1,2] ,//没有数据
      // x: 1
    }
  },
  created(){
    // this.message()
  },
  methods: {
    keywordChange(){
      // alert(keyword);
      console.log("keyword:"+this.keyword);
      this.$emit('keywordChange', this.keyword);
    }
  },
  // watch: {
  //   message:{
  //     handler (newValue) {
  //     // console.log(value)
  //     this.axios.get(config.weburl+'/videos/searchTitle/'+newValue).then((res)=>{
  //       var message = res.data.message
  //       if(message){
  //         // console.log(res.data.data)
  //         this.searchList = res.data.data
  //         console.log(this.searchList)//有数据 
  //       }
  //     })
  //   },
  //   deep: true,
  //   immediate: true
  // }
  // },
  // computed: {
  //   message(newValue){
  //      this.axios.get(config.weburl+'/videos/searchTitle/'+newValue).then((res)=>{
  //       var message = res.data.message
  //       if(message){
  //         // console.log(res.data.data)
  //         return this.searchList = res.data.data
  //         console.log(this.searchList)//有数据 
  //       }
  //     })
  //   }
  // }
  // watch: {
  //   message(newValue){
  //      this.axios.get(config.weburl+'/videos/searchTitle/'+newValue).then((res)=>{
  //       var message = res.data.message
  //       if(message){
  //         // console.log(res.data.data)
  //         this.searchList = res.data.data
  //         console.log(this.searchList)//有数据 
  //       }
  //     })
  //   }
  // }
}
</script>

<style scoped>
.g_head{width: 100%; height: 83px;background: #fafafa;}
.g_head .logo{float: left;margin: 20px 0 0 0;cursor: pointer;}
.g_head .logo a{float: left;}
.g_head .logo a img{float: left;width: 171px;height: 40px;}
.g_head .search{float: left;position: relative;width: 237px;height: 32px;margin: 27px 0 0 32px;}
.g_head .search img{position: absolute;top: 7px;left: 13px;}
.g_head .search input{width: 190px;height: 32px;border: 1px solid #c4c4c4;border-radius: 17px;font-size: 16px;color: #d0d0d0;padding: 0 0 0 47px;line-height: 32px;outline: none;background: #fff;}
.g_head .nav{float: left;margin: 0 0 0 30px;overflow: hidden;height: 83px;}
.g_head .nav ul{float: left;}
.g_head .nav ul li{float: left;padding: 0 9px;margin: 0 10px;line-height: 83px;font-size: 18px;color: #231815;cursor: pointer;}
.g_head .nav ul li.router-link-active{border-top: 7px solid #3cdfa5;line-height: 70px;color: #3cdfa5;}
.g_head .language{line-height: 83px;font-size: 18px;color: #5c5452;cursor: pointer;float: right;}
.g_head .language em{margin: 0 5px;}
.g_head .language .en{color: #45a25d;}
.g_head .language .numerous{color: #231815;}
.g_head .language .simple{color: #231815;}
.g_head .login{margin: 33px 0 0 40px;float: right;cursor: pointer;}
.g_head .login img{width: 11px;height: 17px;float: left;margin: 0 10px 0 0;}
.g_head .login p{font-size: 17px;color: #303030;float: left;}
</style>