<template>
    <el-card class="page">
        <div slot="header">
            <el-page-header>
                <template slot="title">
                    <router-link to="/"><img src="../assets/logo.png" alt=""/></router-link>
                </template>
                <template slot="content">
                    <slot name="title">{{title}}</slot>
                </template>
            </el-page-header>
        </div>
        <slot></slot>
    </el-card>
</template>

<script>
    export default {
        name: "Page",
        props: {
            title: String
        }
    }
</script>

<style lang="scss">
    .page{
        @extend %width;
        .el-card__header{
            background: #22232b;
            .el-page-header__left{
                i{display: none}
                img{width: 80px;}
            }
            .el-page-header__content{
                @include flex();
                color: #fff;
            }
        }
        .el-card__body{
            background: #14151b;
        }
    }
</style>