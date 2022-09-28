<template>
    <div>
        <!-- 主体内容 -->
        <router-view></router-view>
        <!-- 底部tabbar -->
        <tabbar></tabbar>
    </div>
</template>
<script lang="ts" setup>
    import tabbar from "@/components/Tabbar/TabbarView.vue"
</script>