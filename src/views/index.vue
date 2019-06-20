<template>
    <el-tabs class="index" type="border-card">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-s-home"></i></span>
            <div class="content">
                <search-form></search-form>
                <div class="right">
                    <el-carousel type="card" :interval="10000" height="214px">
                        <el-carousel-item>
                            <img src="../assets/img/carousel01.jpg" alt=""/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/img/carousel02.jpg" alt=""/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/img/carousel03.jpg" alt=""/>
                        </el-carousel-item>
                    </el-carousel>
                    <el-divider content-position="left">Top Brands</el-divider>
                    <div class="img">
                        <el-image src="//cdn.shopify.com/s/files/1/0047/4221/7841/t/10/assets/topex.jpg?0" alt=""></el-image>
                        <el-image src="//cdn.shopify.com/s/files/1/0047/4221/7841/t/10/assets/frezo.jpg?0" alt=""></el-image>
                        <el-image src="//cdn.shopify.com/s/files/1/0047/4221/7841/t/10/assets/xlbrake.jpg?0" alt=""></el-image>
<!--                        <img src="../assets/img/brand1.png" alt=""/>-->
<!--                        <img src="../assets/img/brand2.png" alt=""/>-->
<!--                        <img src="../assets/img/brand3.png" alt=""/>-->
                    </div>
                    <p>thebrakekits.com is a brake parts store, geared to meet your braking needs.
                        Our desire is to help you find the best combination of brake rotors and pads for you (your driving style) and your vehicle.
                        We are continually working to gather the most reputable and trusted names in brakes, to save you from searching.
                        Our motto is "The Ultimate Braking Experience," because we are committed to providing quality brakes and service.</p>
                    <p>To suit a wide selection of vehicles, driving styles, and aesthetic preferences,
                        our brake rotors are available in eight designs (including OE plain and custom).
                        We offer brake pads in ceramic, metallic, semi-metallic and aramid (synthetic) formulas.</p>
                    <p>To suit a wide selection of vehicles, driving styles, and aesthetic preferences,
                        our brake rotors are available in eight designs (including OE plain and custom).
                        We offer brake pads in ceramic, metallic, semi-metallic and aramid (synthetic) formulas.</p>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Brake Rotors">
            <search-form></search-form>
        </el-tab-pane>
        <el-tab-pane label="Brake Pads">
            <search-form></search-form>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "index",
    }
</script>

<style lang="scss">
    .index{
        @extend %width;
        background: #fff;
        .el-tabs__header{
            background: #22232b!important;
        }
        .el-tabs__content{
            background: #14151b;
        }
        .content{
            @include flex(flex-start,flex-start);
            .right{
                flex: 1;
                padding-left: 22px;
                .el-carousel{
                    width: 100%;
                    margin: 40px 0;
                }
                .el-divider{
                    .el-divider__text{
                        background: #14151b;
                        font-size: 22px;
                        color: #fff;
                    }
                }
                p{
                    font-size: 16px;
                    color: #e6e6e6;
                }
            }
        }
    }
    .index.el-tabs--border-card{
        border: none;
        box-shadow: none;
    }
</style>