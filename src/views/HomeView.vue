<template>
<div class="home-view has-header">
  <sub-nav mold="quickNav"></sub-nav>
  <List mold="thumbnail" :items="events"></List>
  <InfiniteLoading :on-infinite="onInfinite" ref="infiniteLoading">
    <Loading slot="spinner"></Loading>
  </InfiniteLoading>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import SubNav from "@/components/SubNav"
import InfiniteLoading from "vue-infinite-loading"
import Loading from "@/components/Loading"
import List from "@/components/List"

export default {
  components: {
    SubNav,
    InfiniteLoading,
    Loading,
    List
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    onInfinite() {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 3000)
    },
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<style lang="less" scoped>

</style>
