<template>
 <div class="tit">
   <div class="wrap w1230">
     <div class="con">
  {{ title }}
  </div>
   </div>
   </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tit{background: #3cdfa5;font-size: 18px;color: #fff;height: 63px;color: #fff;line-height: 63px;}
.tit .con{ padding: 0 0 0 0;}
</style>