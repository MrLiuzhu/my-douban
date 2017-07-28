<template>
  <div class="search-container has-header">
    <div class="search-box">
      <input
      type="text"
      v-model.trim.lazy="queryStr">
      <span class="start-search" @click="query()">搜索</span>
    </div>
    <group title="影视" :items="queryRes_movie">
      <a href="#" class="list-link" slot="more">查看更多影视结果</a>
    </group>
    <group title="图书" :items="queryRes_movie">
      <a href="#" class="list-link" slot="more">查看更多影视结果</a>
    </group>
    <group title="音乐" :items="queryRes_movie">
      <a href="#" class="list-link" slot="more">查看更多影视结果</a>
    </group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Group from "@/components/Group"
export default {
  components: { Group },
  data(){
    return {
      queryStr: '',
    }
  },
  computed: {
    ...mapState({
      queryRes_movie: state => state.search.queryRes_movie,
      queryRes_book: state => state.search.queryRes_book,
      queryRes_music: state => state.search.queryRes_music,
    })
  },
  methods: {
    query(){
      if(this.queryStr){
        this.$store.dispatch({
          type: 'query',
          queryStr: this.queryStr
        })
      }
    }
  },
  created(){
    const q = this.$route.params.q
    if(q){
      this.queryStr = q
      this.query()
    }
  }
}
</script>

<style lang="less" scoped>
.search-box{
  border-bottom: 0.1rem solid #F2F2F2;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  input{
    flex-grow: 1;
    height: 3rem;
    padding: 0.5rem 0.8rem;
    box-sizing: border-box;
    border: 0;
    outline: none;
    background: #f5f5f5;
    border-radius: 0.3rem;
  }

  span{
    display: inline-block;
    height: 3rem;
    font-size: 1.4rem;
    height: 1.6rem;
    color: #333;
    margin-left: 2rem;
  }
}

.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>
