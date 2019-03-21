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
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
          <ul class="goods">
            <li class="list" v-for="item in props.row.list" :key="item.id">
              <img class="img" :src="item.img" alt="">
              <span>{{item.name}} x {{item.num}}</span>
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column
        label="订单 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品数量"
        prop="num">
      </el-table-column>
      <el-table-column
        label="总金额"
        prop="amount">
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
  .goods
    display: flex
    .list
      display: flex
      flex-direction: column
      align-items: center
      .img
        max-width: 100px
        max-height: 100px
</style>
