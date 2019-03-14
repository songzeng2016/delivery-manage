<template>
  <div class="list-container">
    <el-table
      :data="list"
      class="table"
      header-cell-class-name="table-header"
    >
      <el-table-column
        label="用户名"
        prop="account">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="password">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row, scope.$index)">
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id, scope.$index)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="修改信息"
      :visible.sync="showEdit"
      width="500px">
      <el-form
        :model="editData"
        :rules="editRules"
        ref="editForm"
        label-width="60px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="editData.name"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input-number :min="0" v-model="editData.price"></el-input-number>
        </el-form-item>
        <el-form-item label="库存" prop="count">
          <el-input-number :min="0" v-model="editData.count"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="showEdit = false">取 消</el-button>
        <el-button size="medium" type="primary" @click="submitForm('editForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: [],
        showEdit: false,
        editData: {},
        editRules: {
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
    watch: {
      showEdit(value) {
        // 清空校验结果
        !value && this.$refs.editForm.clearValidate();
      },
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
        this.$post('/user/getList')
          .then(json => {
            this.list = json.data.list;
          });
      },
      // 编辑
      handleEdit(row, index) {
        row.index = index;
        this.editData = JSON.parse(JSON.stringify(row));
        this.showEdit = true;
      },
      // 删除
      handleDelete(id, index) {
        this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.list.splice(index, 1);
          console.log(id);
        }).catch(() => {

        });
      },
      // 提交修改
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const {index} = this.editData;
            this.list.splice(index, 1, this.editData);
            this.showEdit = false;
          }
        });
      },
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~common/stylus/dataList.styl"
</style>
