<template>
  <div class="main-container">
    <lbd-vertical-swiper
      ref="swiper"
      audio="http://www.yinpin.com/upload/jiansheshengtaiyiju1009020.mp3"
      :audio-image="require('./audio.svg')"
    >
      <lbd-vertical-swiper-slide
        :index="0"
        background-color="red"
      >
        <div class="page animate__animated animate__slideInLeft" @click="showDialog">显示Dialog</div>
      </lbd-vertical-swiper-slide>
      <lbd-vertical-swiper-slide
        :background-image="require('./bg.jpg')"
        :index="1"
        background-color="yellow"
      >
        <div class="page animate__animated animate__slideInLeft">背景图片案例</div>
      </lbd-vertical-swiper-slide>
      <lbd-vertical-swiper-slide
        :index="2"
        background-color="blue"
        :no-swipe="noSwipe"
      >
        <div class="page animate__animated animate__slideInRight">
          <div>点击禁止滑动案例</div>
          <div @click="noSwipe = !noSwipe">no swipe {{ noSwipe }}</div>
        </div>
      </lbd-vertical-swiper-slide>
      <lbd-vertical-swiper-slide
        :index="3"
        background-color="green"
      >
        <div class="page animate__animated animate__slideInRight">
          <div @click="to">点击跳转第一页案例</div>
        </div>
      </lbd-vertical-swiper-slide>
    </lbd-vertical-swiper>

    <lbd-dialog
      v-model="isShowDialog"
      title="声明式弹窗"
      message="测试声明式弹窗"
      :show-cancel-button="true"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import { VerticalSwiper, VerticalSwiperSlide, Dialog } from 'lbd-ui'
import { Area } from 'vant';
import 'animate.css'
export default {
  name: 'example',
  components: {
    [VerticalSwiper.name]: VerticalSwiper,
    [VerticalSwiperSlide.name]: VerticalSwiperSlide,
    [Dialog.name]: Dialog,
  },
  data: () => ({
    isShowDialog: false,
    noSwipe: false
  }),
  methods: {
    to() {
      this.$refs['swiper'].swiperInstance.slideTo(0, 1000)
    },
    showDialog() {
      this.isShowDialog = true
      Dialog
        .confirm('测试confirm')
        .then(() => {
          console.log('confirm确认')
        })
        .catch(() => {
          console.log('confirm取消')
        })

      Dialog
        .alert({
          title: '测试alert标题',
          message: '测试alert内容'
        })
        .then(() => {
          console.log('alert确认')
        })

      Dialog
        .alert('测试alert')
        .then(() => {
          console.log('alert确认')
        })
    },
    handleConfirm() {
      console.log('声明式确认')
    },
    handleCancel() {
      console.log('声明式取消')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.main-container {
  width: 100%;
  height: 200vh;
}

.page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: .45rem;
  color: #fff;
}
</style>
