/**
* @description 测试文件
* @author 齐皓
* @Date 2020/4/21
*/
<template>
  <div class="main-container">
    <h1 class="title">{{ time | formatDate('yyyy-MM-dd HH:mm:ss') }}</h1>
    <list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getList"
    >
      <cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </list>
  </div>
</template>

<script>
  import { List, Cell } from 'vant';
  export default {
    name: "index",
    data: () => ({
      time: new Date(),
      list: [],
      loading: false,
      finished: false,
    }),
    components: {
      List,
      Cell,
    },
    methods: {
      getList() {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .title {
      color: $color-primary;
    }
  }
</style>
