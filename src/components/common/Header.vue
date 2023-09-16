<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="/svg/logo.svg">
      <span>Video-Library</span>
    </div>
    <div class="menu">
      <el-menu router default-active="/" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item v-for="(menu, index) in menus" :key="index" :index="menu.targetUrl">
          <img :src='menu.icoPath'>
          {{ menu.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="search">
      <el-input v-model="input1" class=" w-50 m-2" size="large" placeholder="搜索电影，剧集，动漫，演员" :prefix-icon="Search" />
    </div>
    <div class="userInfo">
      <div class="flex flex-wrap items-center">
        <el-dropdown>
          <img :src="userInfo.pic" alt="用户头像">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logoutHandle">注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
const menus = ref([
  {
    title: '首页',
    icoPath: '/svg/home.svg',
    targetUrl: '/'
  },
  {
    title: '电影',
    icoPath: '/svg/movie.svg',
    targetUrl: '/movie'
  },
  {
    title: '电视剧',
    icoPath: '/svg/tv.svg',
    targetUrl: '/tv'
  },
  {
    title: '动漫',
    icoPath: '/svg/animation.svg',
    targetUrl: '/animation'
  },
  {
    title: '综艺',
    icoPath: '/svg/variety.svg',
    targetUrl: '/variety'
  },
  {
    title: '纪录片',
    icoPath: '/svg/logo.svg',
    targetUrl: '/jlp'
  }
])

const userInfo = { name: 'admin', pic: 'https://pic2.zhimg.com/v2-a8e92316cbf9f5707b4f490a33fee37d_r.jpg' }

const logoutHandle = () => {
  console.log("退出成功");
}
</script>
  
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  .logo {
    margin-left: 20px;
    display: flex;
    align-items: center;

    img {
      height: 80px;
    }

    span {
      margin-left: 10px;
    }
  }

  .menu {
    margin-left: 100px;

    img {
      height: 18px;
    }
  }

  .search {
    margin-left: 100px;
    width: 20rem;
  }

  .userInfo {
    margin-left: 20px;
    margin-right: 20px;

    img {
      height: 65px;
      border-radius: 50%;
    }
  }
}
</style>