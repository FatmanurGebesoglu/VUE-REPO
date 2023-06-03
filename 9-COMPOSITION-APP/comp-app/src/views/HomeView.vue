<template>
  <div class="home">
    <p>{{ name }}--{{ surname }}</p>
    <button @click="buttonTiklandi">Tıkla</button>
  </div>
</template>

<script>


//önce setup çalışır daha sonra created en son mounted çalışır
//setup bütün bütün fonksiyonların üzerinde bir fonksiyondur o yüzden önce o çalışır
//setup içindeki değişkenler kullanılmak için return ile döndürülmelidir
export default {
  name: 'HomeView',
  setup() {
    console.log('setup yüklendi')

    let name = 'Mehmet';
    let surname = 'Kara';

    const buttonTiklandi=()=>{
      console.log('tıklandı')
    }
    return { name, surname, buttonTiklandi }
  },
  mounted() {
    console.log('onMounted yüklendi')
  },
  created() {
    console.log('created yüklendi')
  },
}

</script>
