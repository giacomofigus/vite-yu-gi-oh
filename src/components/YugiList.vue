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
    <div id="cardCounter" class="border p-2"> Found: {{ store.arrayCard.length }} cards</div>
    <div id="containerCard" class="d-flex flex-wrap">
        
        <YugiCard 
        v-for="(element, index) in store.arrayCard"
        :key="index"
        :propsElement="element"
        
        />
    </div>
    
</template>

<style lang="scss" scoped>
    #cardCounter{
        background-color: #313131;
        color: white;
        font-weight: bold;
    }
</style>