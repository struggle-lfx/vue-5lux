<template>
    <div class="index-container">
        <Header></Header>
        <main>main</main>
        <Footer></Footer>

        
    </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
    components:{
        Header,
        Footer

        

    }
}
</script>
<style lang="stylus">
.index-container
    height 100%
    display flex
    flex-direction column
    
    main 
        flex 1



</style>