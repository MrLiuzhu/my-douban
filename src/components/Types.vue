<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for='item in items'>
          <a :href="baseUri + item.href">
            {{item.title}}<span></span>
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      baseUri: 'https://m.douban.com/',
      items: [
        {
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.types{
  margin-top: 1rem;
  h2{
    padding-top:0 1.6rem;
    height: 2.6rem;
    line-height: 2.6rem;
    display: inline-block;
  }
}

.type-list{
  margin: 1.6rem 0 0 1.6rem;
  overflow: hidden;

  li{
    display: inline-block;
    width: 50%;
    float: left;
    font-size: 1.6rem;
    padding-right: 1.8rem;
    box-sizing: border-box;
    border-top: solid 0.1rem #eee;
    border-right: solid 0.1rem #eee;
    height: 4.2rem;
    line-height: 4.2rem;
    a{
      color: #42bd56;
    }
  }

  li:nth-child(2n){
    padding-left: 1.8rem;
  }

  span{
    border-right: 0.1rem solid #ccc;
    border-bottom: 0.1rem solid #ccc;
    display: inline-block;
    transform: rotate(-45deg);
    float: right;
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 1.4rem;
    font-weight: bold;
    color: #ccc;
  }
}
</style>
