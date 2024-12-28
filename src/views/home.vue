<script setup>
import navbar from "../component/navbar.vue"
import bannershow from "../component/bannershow.vue"
</script>
<template>
    <main>
        <navbar></navbar>
        <bannershow></bannershow>
    </main>
</template>
<style scoped>
main{
    background-color: #0f0d13;
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    overflow-y: scroll;
}
</style>