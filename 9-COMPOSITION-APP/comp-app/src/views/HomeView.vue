<template>
  <div class="home">
    <!-- <p>{{ name }}--{{ surname }}</p>
    <button @click="buttonTiklandi">Tıkla</button> -->

    <button @click="buttonTiklandi">Tıkla</button>
    <p>{{ ad }}-- {{ yetenekNesnesi.yetenek }}</p>
    <input type="text" v-model="ad" />

  </div>
</template>

<script>


//önce setup çalışır daha sonra created en son mounted çalışır
//setup bütün bütün fonksiyonların üzerinde bir fonksiyondur o yüzden önce o çalışır
//setup içindeki değişkenler kullanılmak için return ile döndürülmelidir


import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // console.log('setup yüklendi')

    // let name = 'Mehmet';
    // let surname = 'Kara';

    // const buttonTiklandi=()=>{
    //   console.log('tıklandı')
    // }
    // return { name, surname, buttonTiklandi }

    // const bilgiler =ref(null);

    // const buttonTiklandi=()=>{
    //   console.log(bilgiler, bilgiler.value);
    // }
    
    //reactive genellikle nesneler için kullanılır
    //ref ise string, number, boolean için kullanılır

    let ad = ref("Fatmanur");
    //let yetenek = reactive("Yemek yapmak"); ====>>>> bu şekilde kullanılmaz!


    let yetenekNesnesi = reactive({
      yetenek: "Yemek yapmak"
    });

    const buttonTiklandi=()=>{
      ad.value="Mehmet";
      yetenekNesnesi.yetenek="Kod yazmak";
    }


    return { ad, buttonTiklandi, yetenekNesnesi }

  },
  mounted() {
    console.log('onMounted yüklendi')
  },
  created() {
    console.log('created yüklendi')
  },
}

</script>
