<template>
  <div class="card">
    <div class="desc">
      <div class="logo"></div>
      <div class="info">
        <div class="user-info">
          <strong>豆瓣</strong>写了日记
        </div>
        <div class="timestamp">
            2017-03-01 19:30:41
        </div>
      </div>
    </div>
    <div class="article-card">
      <div class="title">
          豆瓣App 4.12.0 主要更新豆瓣App 4.12.0
      </div>
      <div class="detail">
          - 可以写读书笔记了同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记.
      </div>
    </div>
    <div class="comment-card">
      <span class="btn like"><i>4</i></span>
      <span class="btn comment"><i>4</i></span>
      <span class="btn retweet"><i>4</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>


export default {
  props:{
    mold: {
      type: String,
      required: true
    }
  },
  data(){
    return {

    }
  },
  created(){
  }

}
</script>

<style lang="less" scoped>
.card{
  padding: 2rem 2rem 1rem 2rem;
  position: relative;
  // border-bottom: 0.1rem solid #E8E8E8;

  .desc{
    display: flex;
    align-items: center;

    .logo{
      background-image: url(../assets/douban-app-logo.png);
      width: 4rem;
      height: 4rem;
      background-size: cover;
      border-radius: 50%;
      margin: 1rem;
    }

    .info{
      color: #aaa;
      font-size: 1.5rem;

      strong{
        font-weight: bold;
        color: #494949;
        font-size: 1.7rem;
      }
    }
  }

  .article-card{
    margin: 0 0 0.5rem 5rem;
    padding: 1.5rem;
    border: 0.1rem solid #d8d8d8;
    border-radius: 0.2rem;

    .title{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-wrap: normal;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
      line-height: 1.4rem;
      height: 1.4rem;
    }

    .detail{
      color: #aaa;
      margin-top: 0.4rem;
      font-size: 1.2rem;
      line-height: 1.6;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .comment-card{
    display: relative;
    display: flex;
    border-bottom: 0.1rem solid #e8e8e8;
    padding: 1rem 0 1rem 5rem;
    color: #ccc;
    .btn{
        display: block;
        height: 2rem;
        line-height: 2rem;
        width: 2rem;
        margin-right: 2rem;
        i{
          padding-left: 2rem;
          font-style: normal;
        }
    }
    .like{
      background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
    }
    .comment{
      background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
    }
    .retweet{
      flex-grow: 1;
      background-repeat: no-repeat;
      background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
    }
    .more{
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
    }
  }
}


</style>
