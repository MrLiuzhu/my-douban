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
        <img :src="item.images.small" alt="">
        <h2>{{item.title}}</h2>
        <span>{{item.group_member}} 人</span>
      </div>
      <div class="group-content">
        {{item.group_topic.title}}
      </div>
    </router-link>
    <slot name="more"></slot>
  </div>
</template>

<script>


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
    padding: 1.5rem 0;
    border-bottom: 0.1rem solid #F2F2F2;
    cursor: pointer;

    .group-info{
      display: flex;
      height: 4rem;
      line-height: 4rem;
      align-items: center;

      img{
        margin-right: 1rem;
      }
      h2{
        flex-grow: 1;
        font-size: 1.8rem;
        font-weight: 500;
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
