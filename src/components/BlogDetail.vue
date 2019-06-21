<template>
    <section class="blog">
        <h4 slot="title">{{data.title}}</h4>
        <time slot="time">{{data.time}}</time><span class="author">| Posted in News By {{data.author}}</span>
        <el-divider></el-divider>
        <div class="main">
            <div slot="default">
                <div class="content" :class="{ellipsis:type==='list'}" v-html="data.content"></div>
                <router-link v-if="type==='list'" to="/blog/detail"><el-link type="primary">Read More</el-link></router-link>
            </div>
            <img :src="data.img" alt=""/>
        </div>

        <ul v-if="data.tags.length>0">
            <li v-for="(i,index) in data.tags" :key="index"><el-tag size="small" effect="plain">{{i}}</el-tag></li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "BlogDetail",
        props: {
            data:Object,
            type:String,
        }
    }
</script>

<style lang="scss">
    section.blog{
        color: #fff;
        h4{
            font-size: 30px;
            margin: 20px 0 10px;
        }
        time{
            font-size: 12px;
            color: #ccc;
        }
        .author{
            display: inline-block;
            margin-left: 10px;
        }
        .main{
            @include flex(flex-start,flex-start);
            .content{
                color: #bbb;
            }
            .ellipsis{
                p{
                    display: none;
                    &:first-child{
                        @include ellipsis(2);
                    }
                }
                h4{
                    display: none;
                }
            }
            img{
                margin-left: 20px;
            }
        }

        ul{
            @include flex();
            li{
                margin: 5px 5px 0 0;
            }
        }
    }
</style>