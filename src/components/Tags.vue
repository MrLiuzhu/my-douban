<template>
  <div class="tag">
    <ul>
      <li v-for="item in items">
        <a href="#">{{item.name ? item.name : item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    items:{
      type:Array,
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
.tag{
  ul{
    li{
      display: inline-block;
      font-size: 1.5rem;
      line-height: 2.8rem;
      padding: 0 1rem;
      background-color: #ff8263;
      border-radius: 2.8rem;
      margin-top: 1rem;
      margin-right: 0.8rem;
    }
    a{
      color: #fff;
    }
  }
}
</style>
