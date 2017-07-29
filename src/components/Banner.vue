<template>
  <div class="banner">
    <template v-if="adImg">
      <div class="banner-bg ad">
        <img :src="adImg" alt="ad">
        <span>广告</span>
      </div>
    </template>
    <template v-else>
      <div class="banner-else">
        <div class="content">
          <span class="title">{{title}}</span>
          <div class="button-wrapper">
            <span class="download">极速下载</span>
            <span class="open">打开</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "打开App, 浏览更多"
    },
    adImg: {
      type: String,
      required: false
    }
  },
  data (){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.banner-else{
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


.banner{
  position: relative;
  height: 8rem;

  .banner-bg{
    position: absolute;
  }

  img {
    max-width: 100%;
  }

  .ad {
    span {
      position: absolute;
      right: 0;
      bottom: 0.3rem;
      padding: 0.4rem;
      font-size: 1.2rem;
      color: rgb(255, 255, 255);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

</style>
