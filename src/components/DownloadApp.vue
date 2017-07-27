<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" alt="">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>
          我们的精神角落
        </div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>


export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.download-app{
  padding:0 0 2rem 0;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.5rem;
}

.info{
  margin: 0 auto 1.5rem;
  overflow: hidden;
  display: inline-block;
  text-align: left;
  color: #111;
  font-size: 1.4rem;
}

img{
  float: left;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
}

.info-content{
  overflow: hidden;
}

strong{
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 2.8rem;
}

.download-app a:last-child{
  display: block;
  text-decoration: none;
  color: #42bd56;
}
</style>
