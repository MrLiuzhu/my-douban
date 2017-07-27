<template>
  <router-link :to="{name: 'LoginView'}" class="user-bar" tag="div">
    <div class="avatar">
      <!-- <img src="../assets/avatar.png" alt="avatar"> -->
      <template>
        <img src="../assets/user_normal.jpg" alt="未登陆">
      </template>
    </div>
    <div class="holder">
      请先登陆
    </div>
    <div class="icon icon-pen">

    </div>
    <div class="icon icon-camera">

    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {

    }
  },
  // computed: {
  //   currentLink: function () {
  //     return this.currentUser.name ? 'HomeView' : "LoginView"
  //   },
  //   holder: function () {
  //     return this.currentUser.name ? this.currentUser.name : "请先登陆"
  //   },
  //   ...mapGetters(['currentUser'])
  // },
  // created () {
  //   if(localStorage.getItem('email')){
  //     this.$store.commit({
  //       type: 'getLocalUser'
  //     })
  //   }
  // }
}
</script>

<style lang="less" scoped>
.user-bar{
  height: 4rem;
  line-height: 3rem;
  padding: 0.2rem 1rem 0.6rem;
  display: flex;
  border-bottom: 0.2rem solid #E8E8E8;

  .avatar{
    img{
      border-radius: 50%;
    }
  }

  .holder{
    flex-grow: 1;
    font-size: 1.6rem;
    color: #aaa;
    padding: 0.4rem 0 0 1rem;
  }

  .icon{
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  .icon-camera{
    background: url('../assets/camera.svg');
  }

  .icon-pen{
    background: url('../assets/pen.svg')
  }

}
</style>
