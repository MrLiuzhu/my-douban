<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type='hasCover' :items="hotMovies"></Scroller>
    <scroller title="免费在线观影" type='hasCover' :items="topMovies"></Scroller>
    <scroller title="新片速递" type='hasCover' :items="newMovies"></Scroller>
    <scroller title="发现好电影" type='onlyString' :items="movieTags"></Scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Scroller from "@/components/Scroller"
import Types from "@/components/Types"
import DownloadApp from "@/components/DownloadApp"

export default {
  components: { Scroller, Types, DownloadApp },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    ...mapActions([
      'getMovie'
    ])
  },
  created () {
    this.getMovie()
  },
  mounted (){

  }
}
</script>

<style scoped>

</style>
