<template>
<div class="wrap w1230">
    <div class="list_nav">
      <div class="name">
        <span class="srot">SORT BY:</span>
        <span>Recommendations</span>
        <span  @click="type(1)" :class="n==1?'active':''">News</span>
        <span  @click="type(2)" :class="n==2?'active':''">Campus</span>
        <span  @click="type(3)" :class="n==3?'active':''">STEM</span>
        <span  @click="type(4)" :class="n==4?'active':''">Culture</span>
        <span  @click="type(5)" :class="n==5?'active':''">Workplace</span>
        <span  @click="type(6)" :class="n==6?'active':''">Entertainment</span>
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
</template>

<script>
export default {
  data(){
    return {
      n: 1
    }
  },
  methods: {
    type(num){
      this.$emit('hanldType', num);
    }
  }
}
</script>

<style scoped>
.list_nav{height: 68px;line-height: 68px;}
.list_nav .name{float: left;}
.list_nav .name span{float: left;font-size: 14px;color: #31364c;margin: 0 14px;}
.list_nav .name span.active{border-top: 7px solid #48ffbe;line-height: 54px;color: #48ffbe}
.list_nav .name span.srot{margin: 0 6px 0 0;color: #cdcfd7;font-weight: 700;}
.list_nav .all{float: right;width: 120px;height: 44px;position: relative;margin: 15px 0 0 0;}
.list_nav .all select{float: left;width: 100%;height: 44px;font-size: 14px;color: #8a8a8a; outline: none;padding: 12px 20px;border: 1px solid #dedede;border-radius: 2px;;}
.list_nav .all select option{color: #666;text-align: center;}

</style>