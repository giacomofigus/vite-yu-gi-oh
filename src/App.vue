<script>

  import YugiHeader from './components/YugiHeader.vue'
  import YugiMain from './components/YugiMain.vue'

  export default{
    components: {
      YugiMain,
      YugiHeader
    }
  }
</script>

<template> 
  <YugiHeader/>
  <YugiMain/>
</template>

<style lang="scss"> 
  @use './styles/general.scss'


</style>
