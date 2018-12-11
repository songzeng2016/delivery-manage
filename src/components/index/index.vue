<template>
  <el-container class="index">
    <el-header class="header">
      <v-header></v-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="menu"
          router
          default-active="/goodsList"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="/goodsList">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="/goodsList">商品列表</el-menu-item>
            <el-menu-item index="1-2">商户列表</el-menu-item>
            <el-menu-item index="1-3">订单列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">添加数据</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
  import VHeader from 'base/header/header';

  export default {
    components: {
      VHeader,
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .index
    height: 100%
    .header, .main
      padding: 0
    .menu
      height: 100%
      overflow-x: hidden
      overflow-y: auto
</style>
