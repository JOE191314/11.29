<template>
  <!-- <div class="page">
    <span class="active">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span class="ellipsis">...</span>
    <span>20</span>
    <span>下一页</span>
    <div class="clear"></div>
  </div> -->
  <div class="page">
  <el-pagination
  background
  @current-change="handleCurrentChange"
  layout="total,prev, pager, next,jumper"
  :page-size="pageSize"
  :total="count"
  >
</el-pagination>
</div>
</template>

<script>
//配置文件
import config from "@/config/index.js"

export default {
  props:["pageSize","count"],
  methods:{
    handleCurrentChange(val){
      // alert(val);
      this.$emit('handleCurrentChange', val);
    }
  }
}
</script>

<style>
/* .page{width: 525px;height: 44px;margin: 0 auto;}
.page span{line-height: 36px;padding: 0 14px;color: #a8a8a8;margin: 0 7px;border: 1px solid #d9d9d9;border-radius: 4px;float: left;}
.page span.active{background: #3cdfa5;color: #fff;}
.page span.ellipsis{margin: 0;border:none} */
.page{ width:100%;height: 44px;}
.page .el-pagination{width:100%; text-align: center;padding:0;}
.el-pagination.is-background .el-pager li {margin: 0 5px;color: #a8a8a8;min-width: 30px;border-radius: 4px;border: 1px solid #d9d9d9;background: #fff;}
.el-pagination.is-background .el-pager li:not(.disabled).active { background-color: #3cdfa5;color: #FFF;}

</style>