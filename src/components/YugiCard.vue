<script>
    export default{
        name: "YugiCard",
        props: [ 
            "propsElement"
        ], 
    }
</script>

<template>

    <div id="card" class="col-2 mx-3 my-2">
        <div class="border">
            <img :src="propsElement.card_images[0].image_url" alt="" class="w-100">
        </div>
        <p class="text-center pt-2 text-uppercase text-white text-bold px-2">{{ propsElement.name }}</p>
        <p class="">{{ propsElement.type }}</p>
    </div>

</template>

<style lang="scss" scoped>
    #card{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
        background-color: #D48F38;

        div{
            width: 100%;
        }
    }
</style>