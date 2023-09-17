<template>
  <!-- 头部组件 -->
  <div>
    <el-affix :offset="0">
      <Header></Header>
    </el-affix>
  </div>
  <!-- 首页轮播图组件 -->
  <div v-if="$route.path === '/'">
    <Carousel></Carousel>
  </div>
  <!-- 最近观看记录组件 -->
  <div v-if="$route.path === '/'">
    <Recent></Recent>
  </div>
  <div>
    <!-- <Tabs></Tabs> -->
  </div>
  <router-view></router-view>
  <el-affix position="buttom" z-index="100">
    <Pagination></Pagination>
  </el-affix>
</template>
<script setup>


</script>
