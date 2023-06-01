<template>
    <form>
        <label>Email:</label>
        <input type="email" v-model="email" />
        <br>
        <br>
        <label>Yetki</label>
        <select v-model="yetki">
            <option value="1">Admin</option>
            <option value="2">User</option>
        </select>
        {{ yetki }}
    </form>
</template>
//value ile option yapıldığında yeki value olacak eğer value olmazsa option içindeki değer value olacak
<script>
    export default{
        data(){
            return{
                email: '',
                yetki: '1'
            }
        },
    }
</script>

<style>

</style>