<template>
    <page title="My Account" class="account">
        <template v-if="!has">
            <el-divider content-position="left">Create an account</el-divider>
            <el-form :model="form" ref="form" :rules="rules" label-width="140px">
                <el-form-item label="First Name" prop="FirstName">
                    <el-input v-model="form.FirstName" placeholder="First Name"></el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="LastName">
                    <el-input v-model="form.LastName" placeholder="Last Name"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="Email">
                    <el-input v-model="form.Email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="Password">
                    <el-input v-model="form.Password" placeholder="Password" show-password></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="checkPass">
                    <el-input v-model="form.checkPass" placeholder="Confirm Password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">Create</el-button>
                    <el-button @click="resetForm('form')">Reset</el-button>
                </el-form-item>
            </el-form>
        </template>
        <template v-else>
            <el-divider content-position="left">Sign In</el-divider>
            <el-form :model="form" ref="form" :rules="rules" label-width="140px">
                <el-form-item label="Email" prop="Email">
                    <el-input v-model="form.Email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.Password" placeholder="Password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">Sign In</el-button>
                </el-form-item>
            </el-form>
        </template>
        <el-divider></el-divider>
    </page>
</template>

<script>
    export default {
        name: "MyAccount",
        data(){
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input a password'));
                } else {
                    if (this.form.checkPass !== '') {
                        this.$refs.form.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.form.Password) {
                    callback(new Error('Two inconsistencies in password input!'));
                } else {
                    callback();
                }
            };
            return{
                has:false,
                form:{
                    FirstName:'',
                    LastName:'',
                    Email:'',
                    Password:'',
                    checkPass:''
                },
                rules:{
                    FirstName:[
                        {required:true,message:'Please enter',trigger:'blur'}
                    ],
                    LastName:[
                        {required:true,message:'Please enter',trigger:'blur'}
                    ],
                    Email:[
                        { required: true, message: 'Please enter your email address', trigger: 'blur' },
                        { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
                    ],
                    Password:[
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass:[
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
            }
        },
        created(){
            this.has = !!localStorage.getItem('account');
            console.log(this.has)
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('account', JSON.stringify(this.form));
                        this.$message.success('success!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let account=JSON.parse(localStorage.getItem('account'));
                        if(account.Email===this.form.Email&&account.Password===this.form.Password){
                            this.$router.push('/');
                            this.$message.success('success!');
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    .account{
        .el-divider__text{
            background: #14151b;
            font-size: 16px;
            color: #fff;
        }
        .el-form{
            width: 80%;
            margin: 40px 0 0 60px;
            .el-form-item__label{
                color: #fff;
            }
        }
    }

</style>