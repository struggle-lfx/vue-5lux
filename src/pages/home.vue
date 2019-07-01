<template>
  <div>
    <Header></Header>index
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="stylus">.index-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>