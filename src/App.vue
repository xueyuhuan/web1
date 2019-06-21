<template>
    <div id="app" :class="{'content-page':!$route.meta.blank,'content-blank':$route.meta.blank}">
        <Header v-if="!$route.meta.blank"></Header>
        <transition name="list">
            <router-view/>
        </transition>
        <Footer v-if="!$route.meta.blank"></Footer>
        <a class="toTop" href="#" v-show="scrollTag"><el-icon name="caret-top"></el-icon></a>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                scrollTag:false
            }
        },
        mounted(){
            let _this=this
            window.addEventListener('scroll',function(){
                let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                _this.scrollTag = top >= 300;
            })
        }
    }
</script>

<style lang="scss">
    .content-page{
        min-height: 100%;
        background: url("assets/img/bg.jpg");
        .list-enter-active {
            transition: all 1s;
        }
        .list-leave-active{
            transition: all 0.5s;
        }
        .list-enter
            /* .list-leave-active for below version 2.1.8 */ {
            opacity: 0;
            transform: translateX(30px);
        }
        .list-leave{
            opacity: 0;
            transform: translateX(-30px);
        }
    }
    .content-blank{
        height: 100%;
    }
    a.toTop{
        position: fixed;
        right: 40px;
        bottom: 40px;
        background-color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #409eff;
        @include flex(center);
        font-size: 20px;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        cursor: pointer;
        z-index: 5;
    }
</style>
