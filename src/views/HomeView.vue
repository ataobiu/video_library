<template>
  <div>
    <el-affix :offset="0">
      <Header></Header>
    </el-affix>
  </div>
  <div v-if="$route.path === '/'">
    <Carousel></Carousel>
  </div>
  <div>
    <Tabs></Tabs>
  </div>
  <router-view></router-view>
</template>
<script setup>


</script>
