<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link
      class="thumbnail"
      :to="{name:'DetailView',params: { id: item.id }}">
        <div class="content">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </template>
    <template v-if="mold === 'basic'">
      <div v-for="item in items" class="basic-item">
        <a href="#">
          <h3>{{item.title}}</h3>
          <div class="info">{{item.comments}}</div>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data(){
    return {

    }
  },
  filters: {
    subStr: function(value){
      value.replace(/<.+>|\s/,'')
      return value.slice(0, 30)
    }
  }
}
</script>

<style lang="less">
.list{
  .thumbnail{
    margin-left: 1.8rem;
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;

    .content{
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }
  }
  .author{
    font-size: 1.2rem;
    color: #ccc;
  }

  .label{
    position: absolute;
    bottom: 2.5rem;
    right: 1.8rem;
  }

  .basic-item{
    h3{
      margin: 1.5rem 0 1rem 0;
      font-size: 1.7rem;
      color: #494949;
      font-weight: 500;
    }

    .info{
      color: #42bd56;
      font-size: 1.4rem;
    }
  }
}

.thumbnail ~ .thumbnail::before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.1rem;
  content: "";
  background: #e3e3e3;
}

</style>
