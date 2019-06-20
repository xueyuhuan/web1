<template>
    <page title="Contact Us">
        <el-form :model="form" ref="form" :rules="rules" label-position="top">
            <el-form-item label="Name" prop="Name">
                <el-input v-model="form.Name" placeholder="Name"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="Email">
                <el-input v-model="form.Email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item label="Telephone" prop="Telephone">
                <el-input v-model.number="form.Telephone" placeholder="Telephone"></el-input>
            </el-form-item>
            <el-form-item label="Comment" prop="Comment">
                <el-input type="textarea" :rows="4" v-model="form.Comment" placeholder="Comment"></el-input>
            </el-form-item>
        </el-form>
    </page>
</template>

<script>
    export default {
        name: "ContactUs",
        data(){
            return{
                form:{
                    Name:'',
                    Email:'',
                    Telephone:null,
                    Comment:'',
                },
                rules:{
                    Name:{required:true,message:'Please enter',trigger:'blur'},
                    Email:[
                        { required: true, message: 'Please enter your email address', trigger: 'blur' },
                        { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
                    ],
                    Telephone:[
                        {required:true,message:'Please enter',trigger:'blur'},
                        { type: 'number', message: 'Please enter the correct telephone number'}
                    ],
                    Comment:{required:true,message:'Please enter',trigger:'blur'},
                }
            }
        }
    }
</script>

<style lang="scss">
    .el-form-item__label{
        color: #fff;
    }
</style>