<template>
  <ul class="nav">
    <router-link to="/index/home/new" tag="li" active-class="active">
      <i class="yo-ico">&#xe7e5;</i>
      <b>上新</b>
    </router-link>
    <router-link to="/index/home/foreign" tag="li" active-class="active">
      <i class="yo-ico">&#xf025a;</i>
      <b>海外馆</b>
    </router-link>
    <router-link to="/index/home/buy" tag="li" active-class="active">
      <i class="yo-ico">&#xe62f;</i>
      <b>值得买</b>
    </router-link>
    <router-link to="/index/home/flash" tag="li" active-class="active">
      <i class="yo-ico">&#xe7e5;</i>
      <b>闪购</b>
    </router-link>
    <router-link to="/index/home/brand" tag="li" active-class="active">
      <i class="yo-ico">&#xe664;</i>
      <b>品牌</b>
    </router-link>
  </ul>
</template>

<style lang="stylus" scoped>
.nav 
  position sticky
  top 0
  display flex
  color #7e8c8d
  height 0.82rem
  li
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    b 
      font-size 0.12rem
    i 
      font-size 0.2rem
</style>