<template>
    <div @click = "temizle">
        <h1>Temizle</h1>
    </div>
</template>

<script>
export default {
    props:['baslik'],
    data() {
        return {
            //baslik: 'Merhaba Vue',
        };
    },
    methods: {
    temizle() {
      this.$emit('temizle');
    }
  },
   
}


</script>

<!-- eğer style kısmında scoped kullanırsak sadece bu componentteki style geçerli olur. -->

<style scoped>
h1{
    color: red;
    font-size: 40px;
}
</style>