<template>
    <div class="hotmain" v-for="tab in tabs">
        <h3 :id="tab.a_point">
            {{ tab.title }}:
        </h3>
        <div class="container">
            <el-scrollbar always >
                <div class="scrollbar-flex-content">
                    <div class="item" v-for="item in movie_data" @click="targetUrl(item.hot_url)">
                        <img :src="item.hot_img_url">
                        <div>
                            <span>豆 {{ item.hot_rate }} </span>
                        </div>
                        <h4> {{ item.hot_name }} </h4>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const tabs = [
    { title: '热门', a_point: '/hot' },
    { title: '最新', a_point: '/new' },
    { title: '华语', a_point: '/hw' },
    { title: '美剧', a_point: '/atv' },
    { title: '韩剧', a_point: '/sktv' },
    { title: '日剧', a_point: '/jtv' }
]

const store = useStore();
const movie_data = ref({});
onMounted(() => {
    // 限制首页展示数量
    movie_data.value = store.state.movie_data.slice(0, 10)
});

const targetUrl = (data) => {
    console.log(data);
}
</script>
<style lang="less" scoped>
.hotmain {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        background-color: rgb(255, 255, 255);
        width: 99%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }

    h3 {
        margin-left: 50px;
        text-align: start;
        padding-top: 100px;
        margin-top: 0;
        width: 100%;
    }

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

.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
}
</style>