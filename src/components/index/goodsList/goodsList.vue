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
            <el-form-item label="名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="价格">
              <span>{{ props.row.price }}</span>
            </el-form-item>
            <el-form-item label="详情">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="库存">
              <span>{{ props.row.count }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="价格"
        prop="price">
      </el-table-column>
      <el-table-column
        label="库存"
        prop="count">
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
    created() {
      this.getList();
    },
    watch: {
      showEdit(value) {
        // 清空校验结果
        !value && this.$refs.editForm.clearValidate();
      },
    },
    methods: {
      // 获取列表
      getList() {
        const reqData = {
          pageNum: 1,
          pageSize: 100,
        };
        this.$post('/goods/getList', reqData)
          .then(json => {
            console.log(json);
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
          this.$post('/goods/delete', {id})
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
            this.$post('/goods/edit', this.editData)
              .then(json => {
                const {index} = this.editData;
                this.list.splice(index, 1, this.editData);
                this.showEdit = false;
                this.$message();
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
