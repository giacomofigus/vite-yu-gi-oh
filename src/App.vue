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
        store,
        cardTotal: ""
      }
    },
    methods:{
      getCards(){

        store.loading = true

        axios
          .get(store.apiUrl) 
          .then(response => {
            // console.log(response.data.data)
            
            store.arrayCard = response.data.data
            store.loading = false

            this.cardTotal = response.data.data.length
            
          })
      },
      getArchetype(){
        axios.get(store.ApiUrlArc).then((res) =>{
          store.arrayArc = res.data
        })
      }
    },
    mounted() {
      this.getCards()
      this.getArchetype()
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
