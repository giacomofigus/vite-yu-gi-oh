<script>
    export default{
        name: "YugiCard",
        props: [
            propsElement
        ],
    }
</script>

<template>

    <div id="card">
        <h1>ds</h1>
    </div>

</template>

<style lang="scss" scoped>
    #card{
        gap: 10px;
        flex-basis: calc(100% / 5 - 10px);

        border: 1px solid lime;
    }
</style>