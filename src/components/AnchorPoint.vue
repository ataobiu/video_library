<template>
    <div class="tab">
        <a v-for="item in tabs" :href="'#' + item.a_point">{{ item.title }}</a>
    </div>
</template>
<script setup>

const tabs = [
    { title: '热门', a_point: '/hot' },
    { title: '最新', a_point: '/new' },
    { title: '华语', a_point: '/hw' },
    { title: '美剧', a_point: '/atv' },
    { title: '韩剧', a_point: '/sktv' },
    { title: '日剧', a_point: '/jtv' }
]

</script>
<style lang="less" scoped>
.tab {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    width: 50px;
    height: 300px;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 400px;
    z-index: 11111;

    a {
        margin-top: 20px;
        color: rgb(46 52 63 / 50%);
        font-size: 14px;
        height: 100%;
    }

    a:hover {
        margin-top: 20px;
        color: black;
    }
}
</style>