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
        <hr/>
        <br>
        <br>
        <input type="checkbox" v-model="anlasma" />
        <label>kabul ediyorum</label>
        <hr/>
        <p>Anlaşma Kabulu {{ anlasma ? 'Ediyorum': 'Etmiyorum'}}</p>
        <hr/>
        <div>
            <input type="checkbox" value="yönetim" v-model="istekler"/>
            <label>Yönetim</label>
        </div>
        <div>
            <input type="checkbox" value="erişim" v-model="istekler"/>
            <label>Erişim</label>
        </div>
        <div>
            <input type="checkbox" value="silme" v-model="istekler"/>
            <label>Silme</label>
        </div>
        <p>İstekler: {{ istekler }}</p>

        
    </form>
</template>
//value ile option yapıldığında yeki value olacak eğer value olmazsa option içindeki değer value olacak
<script>
    export default{
        data(){
            return{
                email: '',
                yetki: '1',
                anlasma: false,
                istekler: []
            }
        },
    }
</script>

<style>

</style>