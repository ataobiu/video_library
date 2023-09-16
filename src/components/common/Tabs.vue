<template>
    <el-tabs type="border-card">
        <el-tab-pane v-for="tab in tabs" :label="tab">{{ tab }}</el-tab-pane>
    </el-tabs>
</template>
<script setup>
import { ref } from 'vue'

const tabs = ['热门', '最新', '华语', '美剧', '韩剧', '日剧']

</script>
<style lang="less" scoped></style>