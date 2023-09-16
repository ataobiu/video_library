<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carousels" :key="item" @click="gotoDetail(item.movie_url)">
            <el-image style="width: 100%; height: 100%" :src="item.movie_cover" fit="cover" />
            <h3 class="name">{{ item.movie_name }}</h3>
            <h3 class="date">{{ item.movie_date }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup>
const carousels = [
    { movie_name: '月球2023', movie_date: '2023/0/0', movie_cover: 'https://t1.szrtcpa.com/view/photo/s_ratio_poster/public/p2891539202.jpg', movie_url: '/' },
    { movie_name: '海贼王 真人版', movie_date: '2023/0/0', movie_cover: 'https://t1.szrtcpa.com/view/photo/s_ratio_poster/public/p2897001977.jpg', movie_url: '/' },
    { movie_name: '念念相忘', movie_date: '2023/0/0', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/07/945/f0689fd5e0c8f76d2c747e2e5aa2a632.jpg', movie_url: '/' },
    { movie_name: '我经过风暴', movie_date: '2023/0/0', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/05/69/0ad64f12afd93c10e9480930ddc30123.jpg', movie_url: '/' },
    { movie_name: '巨齿鲨2：深渊', movie_date: '2023/0/0', movie_cover: 'https://img.ynajax.com:2391/storage/images/2023/05/511/bfb8627b69afb1956c3f5484ddad4a4f.jpg', movie_url: '/' }
]

const gotoDetail = (data) => {
    console.log(data);
}
</script> 
<style scoped>
.el-carousel__item .name {
    position: absolute;
    bottom: 25px;
    left: 20px;
    transform: translate(0, 50%);
    color: rgb(255, 255, 255);
}

.el-carousel__item .date {
    position: absolute;
    bottom: 5px;
    left: 20px;
    transform: translate(0, 50%);
    color: rgb(255, 255, 255);
    font-size: small;
}
</style>
  