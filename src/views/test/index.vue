/**
* @description 测试文件
* @author 齐皓
* @Date 2020/4/21
*/
<template>
  <div class="main-container">
    <div class="block" v-finger:swipe="handleFinger">Swipe</div>
    <div class="block" v-finger:tap="handleFinger">Tap</div>
    <div class="block" v-finger:single-tap="handleFinger">singleTap</div>
    <div class="block" v-finger:double-tap="handleFinger">doubleTap</div>
    <div class="block" v-finger:long-tap="handleFinger">longTap</div>
    <div class="block" v-finger:touch-start="handleFinger">touchStart</div>
    <div class="block" v-finger:touch-move="handleFinger">touchMove</div>
    <div class="block" v-finger:touch-end="handleFinger">touchEnd</div>
    <div class="block" v-finger:touch-cancel="handleFinger">touchCancel</div>
    <div class="block" v-finger:pinch="handleFinger">pinch</div>
    <div class="block" v-finger:press-move="handleFinger">pressMove</div>
    <div class="block" v-finger:rotate="handleFinger">rotate</div>
    <div class="block" v-finger:multipoint-start="handleFinger">multipointStart</div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'index',
  data: () => ({
    time: new Date()
  }),
  methods: {
    handleFinger(e) {
      Toast('trigger')
    },
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .title {
    color: $color-primary;
  }

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: $color-primary;
    margin-top: .1rem;
    font-size: .32rem;
    color: #fff;
  }
}
</style>
