<template>
  <div id="app">
       <TheNavigation />
      <transition name="slide" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';
export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity .3s, transform .3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

</style>
