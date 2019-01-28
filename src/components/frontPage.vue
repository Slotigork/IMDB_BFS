<template>
  <div class="frontPage">

    <transition name="fade">
    <h1 v-show="showHeader">6 Degrees of Bacon</h1>
  </transition>

  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      showHeader: false
    }
  },
  mounted(){
    setTimeout(this.showHeader=true, 2000);
  }
}
</script>

<style scoped>
h1 {
    font-size:6em;
    color:rgb(50,50,50);
}
.fade-enter-active{
        transition: opacity 1.5s;
        transition:translateY(100px) 3s ease 2s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
