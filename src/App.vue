<script>

  import YugiHeader from './components/YugiHeader.vue'
  import YugiMain from './components/YugiMain.vue'

  import { store } from './store'
  import axios from 'axios'
 
  export default{
    components: {
      YugiMain,
      YugiHeader
    },
    
    data(){
      return{
        store
      }
    },
    methods:{
      getCards(){

        store.loading = true

        axios
          .get(store.apiUrl) 
          .then(response => {
            // console.log(response.data)

            store.arrayCard = response.data.data

            store.loading = false
          })
      }
    },
    mounted() {
      this.getCards()
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
