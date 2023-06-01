<template>
    <form>
        <label>Email:</label>
        <input type="email" v-model="email" />
        {{ email  }}
    </form>
</template>

<script>
    export default{
        data(){
            return{
                email: ''
            }
        },
    }
</script>

<style>

</style>