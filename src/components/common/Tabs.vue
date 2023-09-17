<template>
    <el-tabs tab-position="right" type="border-card">
        <a v-for="tab in tabs" :href="'#' + tab">
            <el-tab-pane :label="tab">{{ tab }}</el-tab-pane>
        </a>
    </el-tabs>
</template>
<script setup>
import { ref } from 'vue'

const tabs = ['热门', '最新', '华语', '美剧', '韩剧', '日剧']

</script>
<style lang="less" scoped></style>