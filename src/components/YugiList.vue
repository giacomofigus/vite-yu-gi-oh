<script>

    import YugiCard from '../components/YugiCard.vue'
    import { store } from '../store'

    export default{
        name: "YugiList",
        components: {
            YugiCard
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div id="containerCard" class="d-flex flex-wrap justify-content-center">
        <YugiCard 
        v-for="(element, index) in store.arrayCard"
        :key="index"
        :propsElement="element"
        
        />
    </div>
    
</template>

<style lang="scss" scoped>
    
</style>