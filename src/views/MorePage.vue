<template>
  <div class="tabs">
    <el-button v-for="item in tabs" round>{{ item }}</el-button>
  </div>
  <div class="container">
    <el-row class="row" :gutter="30">
      <el-col v-for="item in movie_data" :span="4.5" @click="targetUrl(item.hot_url)">
        <div class="item">
          <img :src="item.hot_img_url">
          <div>
            <span>豆 {{ item.hot_rate }} </span>
          </div>
          <h4> {{ item.hot_name }} </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const movie_data = ref({})

const tabs = ['动作', '剧情', '奇幻', '恐怖', '喜剧', '历史', '爱情']

const targetUrl = (data) => {
  console.log(data);
}
onMounted(() => {
  movie_data.value = store.state.movie_data.slice(0, 15)
})
</script>
<style lang="less" scoped>
.tabs {
  margin-top: 20px;
}

.container {
  background-color: white;
  margin: 20px 20px;
  border-radius: 20px;
  padding-top: 20px;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      box-shadow: -12px -6px 3px #c2bfbf;
      margin: 20px;

      img {
        height: 350px;
        border-radius: 15px;

      }

      span {
        background-color: #45b164;
      }

      h4 {
        margin: 0;
      }
    }

    .item:hover {
      transition: all 0.3s ease;
      transform: scale(1.1);
    }
  }
}
</style>