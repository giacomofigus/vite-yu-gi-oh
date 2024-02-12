import { reactive } from "vue";

export const store = reactive({
    arrayCard: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    loading: true,
    ApiUrlArc: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    arrayArc: [],
    selectValue: ""
})