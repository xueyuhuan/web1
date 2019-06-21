<template>
    <page title="Blog Detail">
        <blog-detail :data="data"></blog-detail>
    </page>
</template>

<script>
    export default {
        name: "Detail",
        props: ['id'],
        computed: {
            data () {
                return this.$store.state.blog[this.id]
            }
        },
        created() {
            console.log(this.data)
        }
    }
</script>

<style scoped>

</style>