<script>

    import YugiCard from '../components/YugiCard.vue'

    export default{
        name: "YugiList",

        components: {
            YugiCard
        }
    }
</script>

<template>
    <div id="containerCard" class="d-flex flex-wrap">
        <YugiCard/>
    </div>
    
</template>

<style lang="scss" scoped>
    #containerCard{
        border: 1px solid red;
        padding: 10px;
    }
</style>