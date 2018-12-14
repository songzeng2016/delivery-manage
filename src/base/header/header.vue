<template>
  <div class="v-header">
    <div class="companyInfo">
      <img class="logo" src="./logo.png" alt="">
      <span class="companyName">后台管理系统</span>
    </div>
    <img class="avatar" src="./avatar.jpg" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
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
      .companyName
        color: white
    .avatar
      width: 36px
      height: 36px
      margin-right: 37px
      border-radius: 50%
</style>
