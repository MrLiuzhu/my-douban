<template>
  <div class="banner">
    <div class="content">
      <span class="title">{{title}}</span>
      <div class="button-wrapper">
        <span class="download">极速下载</span>
        <span class="open">打开</span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "打开App, 浏览更多"
    }
  },
  data (){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  height: 8rem;
  position: relative;
  background: url('../assets/promotion_bg.jpg');

  .content{
    // padding-top: 2.5rem;
    // position: relative;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    height: 8rem;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 1rem;


    .title{
      font-size: 1.4rem;
      color: #2ca532;
      font-weight: normal;
    }

    .download, .open{
      display: inline-block;
      padding: 0 1.4rem;
      width: auto;
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 2rem;
      border: 0.1rem solid #42bd56;
      border-radius: 0.3rem;
    }

    .download{
      color: #fff;
      background: #42bd56;
    }
    .open{
      color: #42bd56;
    }
  }
}
</style>
