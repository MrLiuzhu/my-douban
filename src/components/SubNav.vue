<template>
  <div class="subNav">
    <div class="quickNav" v-if="mold === 'quickNav'">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
        </li>
        <li>
          <router-link :to="{name: 'LoginView'}">登录豆瓣</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    mold: {
      type: String,
      default: 'quickNav'
    }
  },
  data(){
    return {

    }
  }

}
</script>

<style lang="less">
.quickNav{
  ul{
    overflow: hidden;
    margin: 1rem 0 0 0;
    padding-top: 0.6rem;

    li{
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a{
      max-width: 100%;
      background-color: #f6f6f6;
      display: block;
      line-height: 2rem;
      padding: 1.2rem 0;
      text-align: center;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }

  }
}
</style>
