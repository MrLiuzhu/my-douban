<template>
  <div class="talion">
    <div class="search-box">
      <span class="btn-close" @click="closeTalion">关闭</span>
      <input type="text" class="search">
    </div>
    <div class="content-box">
      <div class="talion-nav">
        <div class="nav-item">
          <a href="#" target="_blank">
            <strong style="color: rgb(35, 132, 232);" class="title">电影</strong>
            <span class="desc">影院热映</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(122, 106, 219);" class="title">电视</strong>
            <span class="desc">正在热播</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);" class="title">图书</strong>
            <span class="desc">畅想排行</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" target="_blank">
            <strong style="color: rgb(230, 70, 126);" class="title">同城</strong>
            <span class="desc">周末活动</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(42, 184, 204);" class="title">小组</strong>
            <span class="desc">志趣相投</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(244, 143, 46);" class="title">音乐</strong>
            <span class="desc">新碟榜</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);" class="title">阅读</strong>
            <span class="desc">电子书</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(87, 116, 197);" class="title">游戏</strong>
            <span class="desc">虚拟世界</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(89, 108, 221);" class="title">应用</strong>
            <span class="desc">玩手机</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" target="_blank">
            <strong style="color: rgb(225, 100, 77);" class="title">东西</strong>
            <span class="desc">心爱之物</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(64, 207, 169);" class="title">FM</strong>
            <span class="desc">红心歌单</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(66, 189, 86);" class="title">市集</strong>
            <span class="desc">购买原创</span>
          </a>
        </div>
      </div>
      <sub-nav mold="navBottom"></sub-nav>
    </div>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav"

export default {
  components: { SubNav },
  data(){
    return {
      queryStr: ''
    }
  },
  methods:{
    closeTalion: function(){
      this.$emit('closeTalion')
    }
  }
}
</script>

<style lang="less" scoped>
.talion{
  position: fixed;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  z-index: 999;
  left: 0;
  top: 0;
}

.search-box{
  height: 5rem;
  line-height: 3rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #f3f3f3;

  .btn-close{
    color: #42bd56;
    padding-left: 2.6rem;
    padding-right: 1rem;
    cursor: pointer;
  }

  .search{
    border: 0;
    display: block;
    flex-grow: 1;
    margin-right: 2rem;
    height: 3.2rem;
    line-height: 3.2rem;
    border-radius: 0.3rem;
    background:
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
    background-size: 1.73rem;

    &:focus{
      background: #f3f3f3;
    }
  }

}

.content-box{
  max-width: 41.2rem;
  margin: 0 auto;
  // padding: 3rem 0;

  .talion-nav{
    // padding: 2rem;
    .nav-item{
      display: flex;
      justify-content: space-around;
      text-align: center;
      height: 4rem;
      padding-top: 1.5rem;
      padding-bottom: 2.5rem;

      a{
        display: inline-block;
        strong{
          display: block;
          font-size: 2.4rem;
          line-height: 2.6rem;
          height: 2.6rem;
          font-weight: 500;
        }

        .desc{
          color: #999;
        }
      }
    }

  }
}
</style>
