<template>
  <div id="app">
    <transition name="fade" mode="in-out">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter {
  opacity:0;
}

.fade-leave{
  opacity:1;
}

.fade-enter-active{
  transition:opacity .5s;
}

.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
