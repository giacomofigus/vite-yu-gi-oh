<script>

    import YugiList from '../components/YugiList.vue'

    export default{
        name: "YugiMain",

        components:{
            YugiList
        }
    }
</script>

<template>
    <main>

        <div class="container">
            <select>
                <option>Alien</option>
            </select>
            
            <div id="container-card">
                <YugiList/>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
    main{
        margin-top:10px;

        div:first-child{
            select{
                padding-inline: 20px;
                padding-block: 5px;
            }

            #container-card{
                margin-top:50px;
                background-color: white;
                padding: 10px;
            }
        }
    }
</style>