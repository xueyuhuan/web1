<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
        <el-backtop></el-backtop>
    </div>
</template>

<style lang="scss">
    #app{
        background: url("assets/img/bg.jpg");
    }
</style>
