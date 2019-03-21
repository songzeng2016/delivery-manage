<template>
  <div class="add-container">
    <p class="title">添加店铺</p>
    <el-form
      class="add-form"
      :model="form"
      :rules="rules"
      ref="form"
      label-width="80px"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="店铺名称" prop="store">
        <el-input v-model="form.store"></el-input>
      </el-form-item>
      <el-form-item label="负责人" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址" prop="address">
        <el-input v-model="form.address" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" type="primary" @click="submitForm('form')">确定添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        form: {
          account: '',
          password: '',
          store: '',
          name: '',
          phone: '',
          address: '',
        },
        rules: {
          account: [
            {required: true, message: '账号不能为空', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
          ],
          store: [
            {required: true, message: '名称不能为空', trigger: 'blur'},
          ],
          name: [
            {required: true, message: '负责人不能为空', trigger: 'blur'},
          ],
          phone: [
            {required: true, message: '电话不能为空', trigger: 'blur'},
          ],
          address: [
            {required: true, message: '地址不能为空', trigger: 'blur'},
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('/user/add', this.form)
              .then(json => {
                this.$message();
                this.$refs[formName].resetFields();
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .add-container
    padding: 50px 0
    .title
      text-align: center
    .add-form
      width: 60%
      margin: 0 auto
      padding: 10px 10px 0
      border: 1px solid #eaeefb
      &:hover
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)
        border-radius: 6px
        transition: all .4s
</style>
