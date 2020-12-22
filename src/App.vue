<template>
  <div id="app">
    <transition name="fade" mode="in-out">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-active {
  transition: all .5s;
}

.fade-leave-active{
  opacity: 0;
  transform: translateX(-100%);
  transition: all .5s;
}
</style>
