<template>
  <div class="marking">
    <slot name="book"></slot>
    <slot name="movie"></slot>
  </div>
</template>

<script>


export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.marking{
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;

  a{
    display: inline-block;
    line-height: 3rem;
    font-size: 1.6rem;
    color: #ffb712;
    border: 0.1rem solid #ffb712;
    // padding: 0.4rem 4rem;
    border-radius: 0.4rem;
    flex-grow: 1;
    text-align: center;
    margin-right: 1rem;
  }
}
</style>
