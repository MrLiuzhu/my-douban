<template>
  <div class="has-header">
    <banner></banner>
    <template v-if="!showLoading">
      <div class="subject-card">
        <h2>{{subject.title}}</h2>
        <div class="subject-info">
          <div class="left">
            <rating :rating="subject.rating">
              <span slot="ratingsCount">{{subject.ratings_count}}人评价</span>
            </rating>
            <p class="meta">{{subjectMeta}}</p>
            <a href="#" class="open-app">用App查看影人资料</a>
          </div>
          <div class="right">
            <a href="#">
              <img v-if='subject.images' :src="subject.images.large" alt="">
            </a>
          </div>
        </div>
        <div v-if="subject.author" class="vendors-link">
          <a href="#" class="link">
            <span>在哪儿买这本书</span>
            <span class="info">
              豆瓣阅读电子书 66.00元起
            </span>
          </a>
        </div>
        <marking>
          <template slot="book" v-if="subject.author">
            <router-link :to="{name: 'LoginView'}">想读</router-link>
            <router-link :to="{name: 'LoginView'}">在读</router-link>
            <router-link :to="{name: 'LoginView'}">读过</router-link>
          </template>
          <template slot="movie" v-else>
            <router-link :to="{name: 'LoginView'}">想看</router-link>
            <router-link :to="{name: 'LoginView'}">看过</router-link>
          </template>
        </marking>
        <div class="subject-intro">
          <h2>{{subject.title}}的简介</h2>
          <p>
            <template v-if="summary && subject.summary">
              {{isExpand ? summary + '......' : subject.summary}}

            </template>
            <a href="javascript:;" @click="toggleExpand">
              {{isExpand ? "(展开)" : "(收起)"}}
            </a>
          </p>
        </div>
        <div class="more-type">
          <h2>查看更多相关分类</h2>
          <template v-if="genres">
            <tags :items="genres"></tags>
          </template>
        </div>
        <div class="subject-picture">
          <h2>{{subject.title}}的图片</h2>
          <ul v-if="subject.images">
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
            <li class="pic">
              <a href="#">
                <img :src="subject.images.large" alt="poster">
              </a>
            </li>
          </ul>
        </div>
        <div class="short-comment">
          <h2>{{subject.title}}的短评</h2>
          <div class="content-list">
            <card mold="comment" v-for="item in items" :key="item"></card>
            <a href="javascript:;" class="list-link">显示更多评论</a>
          </div>
        </div>
        <div class="ad">
          <banner :adImg="adImgUrl"></banner>
        </div>
        <div class="subject-question">
          <h2>关于{{subject.title}}的问答</h2>
          <list :items="questions"></list>
          <a class="list-link" href="javascript:;">显示更多问答</a>
        </div>
        <scroller title="推荐的豆列" type="onlyString" :items="movieTags"></scroller>
        <download-app></download-app>
      </div>
    </template>
    <loading v-if='showLoading'></loading>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Banner from '@/components/Banner'
import Rating from '@/components/Rating'
import Loading from '@/components/Loading'
import Tags from '@/components/Tags'
import Scroller from '@/components/Scroller'
import DownloadApp from '@/components/DownloadApp'
import Marking from '@/components/Marking'
import Card from '@/components/Card'
import List from '@/components/List'

export default {
  components: {
    Banner,
    Rating,
    Loading,
    Scroller,
    Tags,
    DownloadApp,
    Marking,
    Card,
    List
  },
  data(){
    return {
      showLoading: true,
      isExpand: true,
      items: new Array(5)
    }
  },
  computed: {
    ...mapState({
      subject: state => state.subject.subject,
      movieTags: state => state.movie.movieTags,
      adImgUrl: state => state.subject.adImgUrl,
      questions: state => state.subject.questions,
    }),
    ...mapGetters({
      subjectMeta: 'subjectMeta',
      summary: 'summary',
      genres: 'genres'
    })
  },
  methods:{
    toggleExpand(){
      this.isExpand = !this.isExpand
    }
  },
  created(){
    const classify = this.$route.params.classify
    const id = this.$route.params.id
    this.$store.dispatch({
      type:'getSingleSubject',
      classify: classify,
      id: id
    }).then((res)=>{
      this.showLoading = false
    })
  }
}
</script>

<style lang="less" scoped>
.subject-card{
  padding: 0 1.5rem;
  h2{
    margin: 1rem 0;
    font-weight: bold;
  }

  .subject-info{
    display: flex;
    margin-bottom: 3rem;

    .left{
      flex-grow: 1;
      padding-right: 1rem;
      .meta{
        font-size: 1.4rem;
        color: #494949;
      }
      .open-app{
        font-size: 1.4rem;
        color: #42bd56;
      }
    }
    .right{
      img{
        width: 10rem;
      }
    }
  }

  .vendors-link{
    padding: 1rem 1rem;
    border-top: 0.1rem solid #E8E8E8;
    border-bottom: 0.1rem solid #E8E8E8;

    .link{
      line-height: 2.4rem;
      color: #000;
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
    }

    .info{
      color: #ccc;
    }
  }

  .subject-intro{
    h2{
      margin: 1rem 0;
      color: #aaa;
      font-weight: normal;
      font-size: 1.5rem;
    }
    font-size: 1.5rem;
    color: #494949;

    a{
      color: #42bd56;
    }
  }

  .more-type, .subject-picture, .short-comment, .subject-question{
    h2{
      margin: 1rem 0;
      color: #aaa;
      font-weight: normal;
      font-size: 1.5rem;
    }
  }

  .subject-picture{
    ul{
      overflow-x: auto;
      white-space: nowrap;
      box-sizing: border-box;
      // padding-right: 3rem;
      li{
        overflow: hidden;
        display: inline-block;
        img{
          width: 16rem;
        }
      }
    }
  }

  .ad{
    // position: relative;
    padding-left: 2rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
}

.list-link{
  display: block;
  text-align: center;
  font-size: 1.7rem;
  color: #42bd56;
  padding: 1.5rem 0;
}
</style>
