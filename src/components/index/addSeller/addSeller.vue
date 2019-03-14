<template>
  <div class="add-container">
    <p class="title">添加商家</p>
    <el-form
      class="add-form"
      :model="form"
      :rules="rules"
      ref="form"
      label-width="70px"
    >
      <el-form-item label="用户名" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
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
          address: '',
        },
        rules: {
          account: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
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
