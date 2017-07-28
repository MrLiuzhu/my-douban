<template>
  <div class="group">
    <div class="title">
      {{title}}
    </div>
    <router-link
      :to="{name: 'HomeView',params: {classify: item.subtype ? item.subtype : 'book',id: item.id}}"
      class="group-item"
      v-for='item in items'
      tag='div'
      :key="item.id">
      <div class="group-info">
        <img v-if="item.images.small" :src="item.images.small" alt="">
        <div class="item-title">
          <h2>{{item.title}}</h2>
          <rating v-if="item.rating" :rating="item.rating"></rating>
        </div>
        <span  v-if="item.group_member">{{item.group_member}} 人</span>
      </div>
      <div v-if="item.group_topic" class="group-content">
        {{item.group_topic.title}}
      </div>
    </router-link>
    <slot name="more"></slot>
  </div>
</template>

<script>
import Rating from '../components/Rating'

export default {
  props:{
    items:{
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: { Rating },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.group{
  margin: 2rem 1rem;

  .title{
    font-size: 1.8rem;
  }

  .group-item{
    padding: 2.5rem 0;
    border-bottom: 0.1rem solid #F2F2F2;
    cursor: pointer;

    .group-info{
      display: flex;
      height: 4rem;
      line-height: 4rem;
      align-items: center;

      img{
        margin-right: 1rem;
        width: 4rem;
        // height: 4rem;
      }
      .item-title{
        flex-grow: 1;
        // display: flex;
        // justify-content: center;
        // flex-direction: column;
        // box-sizing: border-box;
        // padding: 1rem 0;
        // height: 100%;
        h2{
          font-size: 1.8rem;
          font-weight: 500;
          height: 1.8rem;
          line-height: 1.8rem;
        }
      }
      span{
        float: right;
        font-size: 1.4rem;
        color: #aaa;
      }
    }

    .group-content{
      color: #aaa;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 3rem;
      line-height: 2.6rem;
      font-size: 1.4rem;
    }
  }
}
</style>
