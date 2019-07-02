<template>
  <nav>
    <ul class="nav">
      <router-link to="/home" tag="li" active-class="active">
        <i class="yo-ico">&#xe628;</i>
        <b>首页</b>
      </router-link>

      <router-link to="/shop" tag="li" active-class="active">
        <i class="yo-ico">&#xe7e4;</i>
        <b>商城</b>
      </router-link>

      <router-link to="/overseas" tag="li" active-class="active">
        <i class="yo-ico">&#xe60e;</i>
        <b>海外服务</b>
      </router-link>

      <router-link to="/arrival" tag="li" active-class="active">
        <i class="yo-ico">&#xe766;</i>
        <b>到店</b>
      </router-link>

      <router-link to="/my" tag="li" active-class="active">
        <i class="yo-ico">&#xe78c;</i>
        <b>我的</b>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="stylus">
nav {
  height: 0.48rem;

  ul {
    height: 0.48rem;
    display: flex;
    background: black;
    color: grey;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      &.active {
        color: white;
      }

      i {
        font-size: 0.2rem;
        font-weight: 100;
      }

      b {
        font-size: 0.1rem;
        font-weight: 100;
      }
    }
  }
}
</style>
