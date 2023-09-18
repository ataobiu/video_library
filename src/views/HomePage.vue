<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <el-affix :offset="0">
            <Header></Header>
            <div v-if="$route.path === '/'">
              <AnchorPoint></AnchorPoint>
            </div>
          </el-affix>
        </div>
      </el-header>
      <el-main><!-- 头部组件 -->
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
          <HotPage></HotPage>
        </div>
        <MorePage></MorePage>
        <!-- Backtop 回到顶部 -->
        <el-backtop :right="100" :bottom="100" />
        <router-view></router-view>
        <div v-if="$route.path !== '/'" position="buttom" z-index="1100">
          <Pagination></Pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
.el-header {
  --el-header-padding: 0px;
  --el-header-height: 100px;
}

.el-main {
  --el-main-padding: 0px;
  overflow: hidden;
}
</style>