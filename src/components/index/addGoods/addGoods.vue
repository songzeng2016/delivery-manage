<template>
  <div class="add-container">
    <p class="title">添加商品</p>
    <el-form
      class="add-form"
      :model="form"
      :rules="rules"
      ref="form"
      label-width="60px"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input-number :min="0" v-model="form.price"></el-input-number>
      </el-form-item>
      <el-form-item label="库存" prop="count">
        <el-input-number :min="0" v-model="form.count"></el-input-number>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          action=""
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onChange">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
        imageUrl: '',
        form: {
          name: '',
          price: '',
          count: '',
          file: '',
        },
        rules: {
          name: [
            {required: true, message: '名称不能为空', trigger: 'blur'},
          ],
          price: [
            {required: true, message: '价格不能为空', trigger: 'blur'},
          ],
          count: [
            {required: true, message: '数量不能为空', trigger: 'blur'},
          ],
        }
      };
    },
    methods: {
      onChange(file, fileList) {
        this.form.file = file.raw;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const formData = new FormData();
            for (let key in this.form) {
              formData.append(key, this.form[key]);
            }

            this.$post('/goods/add', formData, 'FormData')
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

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

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
