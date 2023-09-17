  <!-- 最近观看记录组件 -->
<template>
    <div class="main">
        <div class="title">
            <img src="/svg/recentView.svg" alt="">
            <span>最近观看：</span>
        </div>
        <div class="container">
            <!-- 将忽略五条以上的数据 -->
            <div class="item" v-for=" item in recentViews.slice(0, 5)" @click="targetMovie(item.movie_url)">
                <img :src="item.movie_cover" alt="">
                <div class="mark">
                    <span>豆 {{ item.mark }}</span>
                </div>
                <h4>{{ item.movie_name }}</h4>
            </div>
        </div>
    </div>
</template>
<script setup>
// 建议仅传入五条记录，为了布局
const recentViews = [
    { movie_name: '月球2023', movie_cover: 'https://t1.szrtcpa.com/view/photo/s_ratio_poster/public/p2891539202.jpg', movie_url: '/', mark: '8.1' },
    { movie_name: '海贼王 真人版', movie_cover: 'https://t1.szrtcpa.com/view/photo/s_ratio_poster/public/p2897001977.jpg', movie_url: '/', mark: '9.1' },
    { movie_name: '念念相忘', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/07/945/f0689fd5e0c8f76d2c747e2e5aa2a632.jpg', movie_url: '/', mark: '9.5' },
    { movie_name: '我经过风暴', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/05/69/0ad64f12afd93c10e9480930ddc30123.jpg', movie_url: '/', mark: '8.6' },
    { movie_name: '巨齿鲨2：深渊', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/05/511/bfb8627b69afb1956c3f5484ddad4a4f.jpg', movie_url: '/', mark: '8.6' }
]

const targetMovie = (data) => {
    console.log(data);
}
</script>
<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        margin-top: 5px;
        margin-left: 25px;
        width: 100%;

        img {
            height: 40px;
        }
    }

    .container {
        display: flex;
        justify-content: space-around;
        background-color: white;
        padding: 20px;
        border-radius: 20px;
        width: 90%;
        overflow: hidden;

        img {
            height: 350px;
            border-radius: 15px;

        }

        span {
            background-color: #45b164
        }

        h4 {
            margin: 0;
        }

        .item {
            border-radius: 20px;
            box-shadow: -12px -6px 3px #c2bfbf;
        }

        .item:hover {
            transition: all 0.3s ease;
            transform: scale(1.1);
        }

    }
}
</style>
  