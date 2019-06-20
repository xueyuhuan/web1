<template>
    <footer>
        <div class="newsletter">
            <img src="../assets/img/newsletter.png" alt=""/>
            <input v-model="email" type="text" placeholder="Email address"/>
            <input type="button" value="SUBSCRIBE">
        </div>
        <img class="pay" src="../assets/img/pay.png" alt=""/>
        <ul>
            <li>
                <h4>about us</h4>
                <p>TheBrakeKits.com is an online<br/>
                    US retailer that provides<br/>
                    automotive brake parts and<br/>
                    accessories for cars,trucks,<br/>
                    and sports-type multifunction<br/>
                    vehicles.</p>
                <router-link to="about-us"><el-link>READ MORE</el-link></router-link>
            </li>
            <li>
                <h4>product features</h4>
                <img src="../assets/img/product.png" alt=""/>
            </li>
            <li>
                <h4>why buy form delpa?</h4>
                <p><span>1</span>In-house brake experts</p>
                <p><span>2</span>Quality materials</p>
                <p><span>3</span>OE fitment guaranteed</p>
                <p><span>4</span>Limited-lifetime warranty</p>
                <h4>infometion center</h4>
                <p><router-link to="shipping-info"><el-link><i class="el-icon-arrow-right"></i> Shipping Info</el-link></router-link></p>
                <p><router-link to="service-commitment"><el-link><i class="el-icon-arrow-right"></i> Service Commitment</el-link></router-link></p>
            </li>
            <li>
                <h4>policies</h4>
                <p><router-link to="refund-policy"><el-link><i class="el-icon-arrow-right"></i> Refund Policy</el-link></router-link></p>
                <p><router-link to="terms-conditions"><el-link><i class="el-icon-arrow-right"></i> Terms and Conditions</el-link></router-link></p>
                <p><el-link><i class="el-icon-arrow-right"></i> Privacy Policy</el-link></p>
            </li>
            <li>
                <h4>contact us</h4>
                <h5>Head Office</h5>
                <h5><em>620 Magnolia Ave, Ontario, CA 91762</em></h5>
                <p><el-button type="primary" size="mini" icon="el-icon-phone" circle></el-button> Call Us 312-316-6511</p>
                <p><el-button type="primary" size="mini" icon="el-icon-printer" circle></el-button> +0 (1) 234 567 89</p>
                <p><el-button type="primary" size="mini" icon="el-icon-message" circle></el-button> service@thebrakekits.com</p>
                <div class="link">
                    <el-link :underline="false" target="_blank" href="https://www.facebook.com/Delpa-Technology-1730269357089874/"><i class="fa fa-facebook"></i></el-link>
                    <el-link :underline="false" target="_blank" href="https://www.youtube.com/channel/UCLQod3j4oW7XV_-m5nYUN6A"><i class="fa fa-youtube-play"></i></el-link>
                    <el-link :underline="false" target="_blank" href="https://www.instagram.com/topex_brake_kits/"><i class="fa fa-instagram"></i></el-link>
                </div>
            </li>
        </ul>
        <div class="bottom">© 2019 DELPA, INC. All Rights Reserved</div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                email:''
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        background: #14151b;
        @extend %width;
        margin-top: 30px;
        .newsletter{
            position: relative;
            input{
                position: absolute;
                top:214px;
                left:50%;
                margin-left: -267px;
                background: rgba(223,6,21,0.5);
                width: 534px;
                height: 48px;
                font-size: 20px;
                color: #fefefe;
                padding: 0 24px;
                border-radius: 24px;
                border: none;
                &::-webkit-input-placeholder{
                    color: rgba(254,254,254,0.5);
                }
            }
            input[type='button']{
                top:286px;
                background: rgba(223,6,21,1);
            }
        }
        img.pay{
            display: block;
            margin: 0 auto;
        }
        ul{
            @include flex(center,flex-start);
            li{
                padding-right: 20px;
                &:last-child{padding-right: 0}
                h4{
                    font-size: 20px;
                    color: #ffffff;
                    text-transform:uppercase;
                    white-space:nowrap;
                    margin: 10px 0 24px 0;
                }
                h5{
                    font-size: 15px;
                    font-weight: 500;
                    font-style: italic;
                    color: #636363;
                    margin: 16px 0;
                    em{
                        color: #fff;
                    }
                }
                p{
                    font-size: 14px;
                    color: #636363;
                    span{
                        display: inline-block;
                        background: #e60012;
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        font-size: 12px;
                        font-weight: 600;
                        color: #fff;
                        text-align: center;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
                .link{
                    i{
                        @include flex(center,center);
                        background: #fff;
                        width: 26px;
                        height: 26px;
                        border-radius: 50%;;
                        margin-right: 10px;
                    }
                }
            }
        }
        .bottom{
            background: #fff;
            height: 60px;
            line-height: 60px;
            font-size: 10px;
            color: #959595;
            text-align: center;
        }
    }
</style>