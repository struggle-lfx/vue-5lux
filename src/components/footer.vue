<template>
  <nav>
    <ul class="nav">
      <li class="active">
        <a href="#/index/home/main">
          <i class="yo-ico">&#xe628;</i>
          <b>首页</b>
        </a>
      </li>
      <li>
        <a href="#/index/home/shop">
          <i class="yo-ico">&#xe7e4;</i>
          <b>商城</b>
        </a>
      </li>
      <li>
        <a href="#/index/home/server">
          <i class="yo-ico">&#xe60e;</i>
          <b>海外服务</b>
        </a>
      </li>
      <li>
        <a href="#/index/home/arrival">
          <i class="yo-ico">&#xe766;</i>
          <b>到店</b>
        </a>
      </li>
      <li>
        <a href="#/index/home/my">
          <i class="yo-ico">&#xe78c;</i>
          <b>我的</b>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus">
nav
  height .48rem      
  ul
    height .48rem
    display flex
    background black        
    li        
      flex 1
      display flex
      height 100%              
      &.active
        // a
        //   color white
        //   i
        //   font-weight 800
      a
        color grey        
        flex 1
        display flex
        justify-content center
        align-items center
        flex-direction column        
        i
          font-size .2rem
          font-weight 100        
        b
          font-size .1rem
          font-weight 100
</style>
