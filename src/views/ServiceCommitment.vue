<template>
    <page title="Service Commitment">
        <h2>Our customer service commitment</h2>
        <p>At Topex, the relationships we have with our clients are incredibly important to us. We are committed to putting our clients first, providing exceptional service and achieving the best outcomes we can.</p>
        <p>We believe that the best results are achieved when we foster two-way partnerships with our stakeholders.</p>
        <p>Six core commitments underpin our approach:</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Accessibility: </em>We aim to provide our clients and partners with as much access as they need to our people.  We take the time to understand your needs, provide assistance and listen to your ideas. You contact us at any time.</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Responsiveness: </em>We pride ourselves on responding to enquiries in an efficient, timely manner. We are continually looking for ways to improve our servicing offering and, for this reason, we greatly value your feedback.</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Privacy: </em>We take all reasonable precautions to protect the information you give us. We do not disclose your information to other parties unless you give us permission to do so (or are required by law).  We ensure our service providers adhere to these same standards.</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Transparency: </em>We are committed to clearly explaining our products.</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Communication: </em>We aim to our clients up to date through communication. Wherever possible, we aim to use simple language that is easy to understand.</p>
        <p><el-button class="btn" size="mini" type="success" icon="el-icon-check" circle plain></el-button><em>Excellence: </em>We strive for excellence in everything we do. We are committed to applying our knowledge, innovation and intelligence to develop products relevant to today’s market. Our ‘bespoke’ transactions are tailored to meet the particular requirements of our clients.</p>
        <p><em>Strong relationships are the foundation of our success. At every level of our business, we forge two way partnerships based on trust, integrity and respect.</em></p>
        <p class="small">We're The Experts Ask us anything. We are the professionals!<br/>
            Largest Selection If you don't find the part, we'll get it for you!<br/>
            Free ShippingOn ALL<br/>
            No Sales TaxFor US Customers!<br/>
            Have a question?Ask the Pros<br/>
            <em><el-button class="btn" type="primary" size="mini" icon="el-icon-phone" circle></el-button>Email us</em> Get answers from the pros<br/>
            <em><el-button class="btn" type="primary" size="mini" icon="el-icon-printer" circle></el-button>312-316-6511</em> Mon-Fri 9am-6pm EST</p>
    </page>
</template>

<script>
    export default {
        name: "ServiceCommitment"
    }
</script>

<style lang="scss" scoped>
    h2{
        font-size: 28px;
        color: #fff;
    }
    p{
        font-size: 16px;
        color: #ccc;
        &.small{
            font-size: 12px;
            margin-left: 20px;
            em .btn{
                margin: 5px 10px;
            }
        }
        .btn{
            margin: 0 20px;
        }
        em{
            color: #fff;
            font-weight: 700;
        }
    }
</style>