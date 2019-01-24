<template>
  <div class="login">
    <div class="form-wrapper">
      <p class="title">后台管理系统</p>
      <el-form class="form" :model="form" :rules="rules" ref="form">
        <el-form-item prop="account">
          <el-input v-model="form.account" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('form')">登 陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        form: {
          account: '',
          password: '',
        },
        rules: {
          account: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const reqData = {
              ...this.form,
            };
            this.$post('/mange/login', reqData)
              .then(json => {
                this.$router.replace('/goodsList');
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
  .login
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    background: #324057
    .title
      margin-top: 0
      text-align: center
      font-size: 30px
      color: white
    .form
      width: 350px
      padding: 30px 20px
      background: white
      border-radius: 5px
      box-sizing: border-box
      .button
        width: 100%
</style>
