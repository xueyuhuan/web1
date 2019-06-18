<template>
    <el-form class="form" :model="form" size="small">
        <el-form-item>
            <el-select class="width230" v-model="form.position" clearable placeholder="Select Position">
                <el-option v-for="(i,index) in positionList" :value="i" :key="index"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-date-picker class="width230" v-model="form.year" type="year" placeholder="Select Year"></el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-select class="width230" v-model="form.make" clearable placeholder="Select Make">
                <el-option v-for="(i,index) in makeList" :value="i" :key="index"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-select class="width230" v-model="form.model" clearable placeholder="Select Model">
                <el-option v-for="(i,index) in modelList" :value="i" :key="index"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-select class="width230" v-model="form.subModel" clearable placeholder="Select SubModel">
                <el-option v-for="(i,index) in subModelList" :value="i" :key="index"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">Search</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "SearchForm",
        data(){
            return{
                form:{
                    position:'',
                    year:null,
                    make:'',
                    model:'',
                    subModel:''
                },
                positionList:['Front','Rear'],
                makeList:['Audi','Buick','Genesis','Jeep','Lincoln','Volkswagen'],
                modelList:['A4','A5','A5 Quattro','R8'],
                subModelList:['318mm Front Disc','338mm Front Disc|330mm Rear Disc']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form{
        width: 268px;
        background: #333333;
        text-align: center;
        padding: 18px 20px 0;
        border: 1px solid #d7dae2;
        overflow: hidden;
    }
</style>