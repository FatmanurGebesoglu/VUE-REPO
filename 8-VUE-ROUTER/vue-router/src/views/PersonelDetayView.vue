<template>
    <h1>Personel Detay Sayfası</h1>
    <p>Personel id: {{ route }}</p>
    
</template>

<script>
    export default {
        data() {
            return {
                route:this.$route
            }
        },
    }

</script>

<style>

</style>