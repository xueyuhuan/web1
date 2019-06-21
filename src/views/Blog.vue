<template>
    <page title="Blog">
        <blog-detail v-for="(i,index) in list" :data="i" :index="index" :key="index" type="list"></blog-detail>
    </page>
</template>

<script>
    export default {
        name: "Blog",
        computed: {
            list () {
                return this.$store.state.blog
            }
        }
    }
</script>

<style scoped>

</style>