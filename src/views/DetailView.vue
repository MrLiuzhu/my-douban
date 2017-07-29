<template>
  <div class="detail has-header">
    <banner></banner>
    <template v-if="!showLoading">
      <div class="info">
        <div class="title">
          <h2>{{eventItem.title}}
            <span class="badge">{{eventItem.loc_name}}</span>
          </h2>
        </div>
        <div class="poster">
          <img :src="eventItem.image_hlarge" alt="">
        </div>
        <div class="info-item">
          <span class="label">时间:</span>
          <span class="info-item-content">{{eventItem.begin_time}}</span> -
          <span class="info-item-content">{{eventItem.end_time}}</span>
        </div>
        <div class="info-item">
          <span class="label">地点:</span>
          <span class="info-item-content">{{eventItem.address}}</span>
        </div>
        <div class="info-item">
          <span class="label">费用:</span>
          <span class="info-item-content">{{eventItem.fee_str}}</span>
        </div>
        <div class="info-item">
          <span class="label">类型:</span>
          <span class="info-item-content">{{eventItem.category_name}}</span>
        </div>
        <div class="info-item"  v-if="eventItem.owner">
          <span class="label">主办方:</span>
          <span class="info-item-content">{{eventItem.owner.name}}</span>
        </div>
        <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
        <div class="desc">
          <h2>活动详情</h2>
          <div v-if='eventItem.content' class="content" v-html="content"></div>
        </div>
      </div>
      <download-app></download-app>
    </template>
    <Loading v-show='showLoading'></Loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Banner from '@/components/Banner'
import DownloadApp from '@/components/DownloadApp'
import Loading from '@/components/Loading'
import Tags from '@/components/Tags'

export default {
  components: { Banner, DownloadApp, Loading, Tags },
  data(){
    return {
      showLoading: true
    }
  },
  computed:{
    content: function(){
      return this.eventItem.content.replace(/<img.+?>/ig,'')
    },
    ...mapState({
      eventItem: state =>state.activities.eventItem
    })
  },
  filters:{
    toArray(value){
      return value.split(',')
    }
  },
  created(){
    const id =  this.$route.params.id;
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then((res)=>{
      this.showLoading = false
    })
  }
}
</script>

<style lang="less" scoped>
.info{
  padding: 0 1rem;

  .title{

    h2{
      font-weight: bold;
      color: #494949;
      margin: 2rem 0;
    }

    .badge{
      display: inline-block;
      color: #fff;
      background-color: #ff8263;
      padding: 0.4rem 1rem;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      line-height: 1.6rem;
    }
  }

  .poster{
    text-align: center;
    padding: 0 0 2rem 0;
    width: 100%;
    img{
      // display: inline;
      width:50%;
    }
  }

  .info-item{
    margin: 0 0 1rem 0;

    .label{
      font-size: 1.4rem;
      color: #666;
      margin-right: 0.5rem;
    }
    .info-item-content{
      font-size: 1.6rem;
      color: #222;
    }
  }

  .desc{
    h2{
      margin: 2rem 0;
      font-weight: bold;
      color: #072;
    }

    .content{
      font-size: 1.4rem;
      overflow: hidden;
    }
  }
}
</style>
