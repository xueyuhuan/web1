<template>
    <div class="no">
        <router-link to="/"><img src="../assets/img/404/bg.gif" alt=""></router-link>
    </div>
</template>

<script>
    export default {
        name: "blank"
    }
</script>

<style lang="scss" scoped>
    .no{
        background: #efefef;
        width: 100%;
        height: 100%;
        text-align: center;
        img{
            width: 100%;
        }
    }
</style>