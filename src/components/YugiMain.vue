<script>

    import YugiList from '../components/YugiList.vue'
    import {store} from "../store"

    export default{
        name: "YugiMain",

        components:{
            YugiList
        },

        data(){
            return{store}
        }
    }
</script>

<template>
    <main>

        <div class="container">
            <select v-model="store.selectValue">
                <option 
                v-for="(element, index) in store.arrayArc"
                :value="element.archetype_name"
                >
                    {{ element.archetype_name }}
                </option>
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
                margin-top:20px;
                background-color: white;
                padding: 10px;
            }
        }
    }
</style>