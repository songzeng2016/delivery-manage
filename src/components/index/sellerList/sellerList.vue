<template>
  <div class="list-container">
    <el-table
      :data="list"
      class="table"
      header-cell-class-name="table-header"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline>
            <el-form-item label="店铺名称">
              <span>{{ props.row.store }}</span>
            </el-form-item>
            <el-form-item label="负责人">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺名称"
        prop="store">
      </el-table-column>
      <el-table-column
        label="负责人"
        prop="name">
      </el-table-column>
      <el-table-column
        label="电话"
        prop="phone">
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
        label-width="80px"
      >
        <el-form-item label="店铺名称" prop="store">
          <el-input v-model="editData.store"></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="name">
          <el-input v-model="editData.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="editData.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址" prop="address">
          <el-input v-model="editData.address" type="textarea"></el-input>
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
          this.$post('/user/delete', {id})
            .then(json => {
              this.$message();
              this.list.splice(index, 1);
            });
        }).catch(() => {

        });
      },
      // 提交修改
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('/user/edit', this.editData)
              .then(json => {
                this.$message();
                const {index} = this.editData;
                this.list.splice(index, 1, this.editData);
                this.showEdit = false;
              });
          }
        });
      },
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~common/stylus/dataList.styl"
</style>
