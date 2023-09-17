<template>
  <!-- 头部组件 -->
  <div>
    <el-affix :offset="0">
      <Header></Header>
      <Tabs></Tabs>
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
  <div v-if="$route.path === '/'">
  </div>
  <div>
    <TabHotPage></TabHotPage>
  </div>
  <AboutView></AboutView>
  <el-backtop :right="100" :bottom="100" />
  <router-view></router-view>
  <!-- <el-affix position="buttom" z-index="100"> -->
  <!-- <Pagination></Pagination> -->
  <!-- </el-affix> -->
  <!-- Backtop 回到顶部 -->
</template>
<script setup>

</script>
