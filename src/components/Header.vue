<template>
    <header>
        <nav>
            <img class="logo" src="../assets/logo.png" alt=""/>
            <ul>
                <li v-for="(i,index) in nav" :key="index"><router-link :to="i.url"><el-link>{{i.name}}</el-link></router-link></li>
                <li>
                    <el-popover placement="bottom-end" width="300" trigger="hover">
                        <el-button type="text" size="mini">Your Cart</el-button><br/>
                        <i class="el-icon-loading"></i>
                        <el-button icon="el-icon-shopping-cart-2" slot="reference">Shopping Cart</el-button>
                    </el-popover>
                </li>
            </ul>
        </nav>
        <h1>Profession Online Auto Part Store</h1>
        <h2>FIND MORE SURPRISE WITH DELPA</h2>
        <el-input class="ipt" size="medium"
                  placeholder="Search"
                  suffix-icon="el-icon-search"
                  v-model="search">
        </el-input>
        <div class="popover">
            <el-popover placement="bottom-start" width="300" trigger="hover">
                <p class="font12">
                    Phone Sales 312-316-6511 (PST)<br/>
                    Monday - Friday: 8:00am - 6:30pm<br/>
                    Saturday - Sunday: Closed
                    <el-divider></el-divider>
                    Live Chat (PST)<br/>
                    Monday - Friday: 8:00am - 6:30pm<br/>
                    Saturday - Sunday: Closed
                    <el-divider></el-divider>
                    Customer Service (PST)<br/>
                    Monday - Friday: 8:00am - 6:30pm<br/>
                    Saturday - Sunday: Closed
                </p>
                <el-button type="primary" size="small" icon="el-icon-phone" slot="reference">312-316-6511</el-button>
            </el-popover>
            <el-popover title="Free Shipping" placement="bottom-start" width="300" trigger="hover">
                <p class="font12">
                    Get Free Shipping on qualified items without<br/>hidden fees.
                    Valid on shipments to the<br/>contiguous U.S. Additional restrictions may<br/>apply. <el-link class="font12" type="primary">See Details</el-link>
                </p>
                <el-button type="primary" size="small" icon="el-icon-guide" slot="reference">FREE SHIPPING</el-button>
            </el-popover>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                nav:[
                    {
                        name:'My Account',
                        url:'My-Account'
                    },
                    {
                        name:'FAQ',
                        url:'FAQ'
                    },
                    {
                        name:'Contact Us',
                        url:''
                    },
                    {
                        name:'Blog',
                        url:''
                    },
                ],
                search:'',
            }
        }
    }
</script>

<style>

</style>
<style lang="scss" scoped>
    header{
        position: relative;
        @extend %width;
        background: url("../assets/img/banner.png") no-repeat;
        background-size: cover;
        height: 600px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        nav{
            @include flex(space-between);
            ul{
                @include flex();
                li{
                    a{
                        padding: 8px 10px;

                    }
                }
            }
        }
        h1{
            font-size: 50px;
            color: #fff;
        }
        h2{
            font-size: 18px;
            font-weight: 500;
            color: #fff;
        }
        .ipt{
            width: 780px;
            margin: 96px 0 40px;
        }
        .popover{
            position: absolute;
            left: 10px;
            bottom: 10px;
        }

    }
</style>