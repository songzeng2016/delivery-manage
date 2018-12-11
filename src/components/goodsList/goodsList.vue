<template>
  <div class="goodsList">
    <el-table
      :data="list"
      class="table"
      header-cell-class-name="table-header"
    >
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
            size="mini">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mock from 'mockjs';

  const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-50': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name|1': 'name',
      'price|+8': 10,
      'count|+2': 0,
    }]
  });

  export default {
    data() {
      return {
        list: data.list,
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .goodsList
    padding: 20px
    .table
      border: 1px solid #dfe6ec
      border-bottom: none
      >>> .table-header
            background: #eef1f6
            color: #1f2d3d
</style>
