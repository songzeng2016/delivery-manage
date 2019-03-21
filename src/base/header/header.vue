<template>
  <div class="v-header">
    <div class="companyInfo">
      <img class="logo" src="./logo.jpg" alt="">
      <span class="companyName">{{userInfo.companyName}}</span>
    </div>
    <el-dropdown placement="bottom">
      <img class="avatar" src="./avatar.jpg" alt="">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script type="text/ecmascript-6">
  import {$local} from 'common/js/util';

  export default {
    data() {
      return {
        userInfo: $local('userInfo') || {},
      };
    },
    methods: {
      logout() {
        this.$post('/mange/logout').then(json => {
          this.$router.replace('/login');
        });
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .v-header
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
    background: linear-gradient(to bottom, #395376, #4c6d9a)
    .companyInfo
      display: flex
      align-items: center
      .logo
        width: 45px
        height: 45px
        margin: 0 10px
      .companyName
        color: white
    .el-dropdown
      margin-right: 37px
      .avatar
        width: 36px
        height: 36px
        border-radius: 50%
        cursor: pointer
</style>
