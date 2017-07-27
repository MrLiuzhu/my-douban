<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for='item in items' :key='item'></card>
      <a href="#" class="list-link">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import UserBar from '@/components/UserBar'
import Card from '@/components/Card'
import DownloadApp from '@/components/DownloadApp'

export default {
  components: { Banner, UserBar, Card, DownloadApp },
  data(){
    return {
      items: new Array(10)
    }
  }
}
</script>

<style lang="less" scoped>
.list-link{
  display: block;
  text-align: center;
  font-size: 1.7rem;
  color: #42bd56;
  padding: 1.5rem 0;
}
</style>
