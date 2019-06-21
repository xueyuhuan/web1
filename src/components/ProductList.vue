<template>
    <ul>
        <li v-for="(i,index) in list" :key="index">
            <img class="product" :src="i.img" alt=""/>
            <div class="text">
                <p>{{i.name}}</p>
                <span>{{i.des}}</span>
            </div>
            <em class="price">${{i.price}}</em>
            <el-button disabled type="primary" size="small" icon="el-icon-shopping-cart-2"></el-button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ProductList",
        computed:{
            list () {
                return this.$store.state.product
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        li{
            @include flex();
            background: #fcfcfc;
            padding: 10px 20px;
            border: 1px #ccc solid;
            margin: 0 0 10px 20px;
            img.product{
                width: 80px;
                margin-right: 10px;
            }
            .text{
                @include flex(space-between,flex-start);
                flex-flow: column;
                p{
                    margin: 0 0 10px 0;
                }
                span{
                    font-size: 12px;
                    color: #666;
                }
            }
            em.price{
                font-size: 16px;
                color: #e50000;
                margin: 0 60px 0 80px;
            }
        }
    }
</style>