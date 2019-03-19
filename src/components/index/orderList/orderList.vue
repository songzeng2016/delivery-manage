<template>
  <div class="list-container">
    <el-table
      :data="list"
      class="table"
      header-cell-class-name="table-header"
    >
      <el-table-column
        label="订单 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="总价格"
        prop="amount">
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="status">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="createdTime">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {$local} from 'common/js/util';

  export default {
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.userInfo = $local('userInfo');
      this.getList();
    },
    methods: {
      getList() {
        this.$post('/order/getList', {
          companyId: this.userInfo.companyId
        }).then(json => {
          this.list = json.data.list;
        });
      },
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~common/stylus/dataList.styl"
</style>
