<template>
    <div>
        <h1>{{ baslik }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baslik: 'Merhaba Vue',
        };
    }
}


</script>

<!-- eğer style kısmında scoped kullanırsak sadece bu componentteki style geçerli olur. -->

<style scoped>
h1{
    color: red;
    font-size: 40px;
}
</style>