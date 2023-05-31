<template>
  <!-- <h3>{{baslik}}</h3>
  <input type="text" ref="isim" />
  <input type="text" ref="parola" />
  <button @click="handleClick">Tıkla</button>
  {{ sonuc }}
  <br/> -->
  <!-- propsun değişken olarak gönderilmesi için -->
  <!-- <Header :baslik="yazi" /> -->
 

  <!-- <h1>CLI ile proje geliştirme</h1> -->

  <Header @temizle="sil" />
  <input ref="metin"/>
</template>


<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  data() {
    return {
      //baslik: 'Merhaba Vue 3',
      //sonuc: ''
      yazi: 'merhaba bu props değişken olarak gönderildi'
    };
  },
  // methods:{
  //   handleClick(){
  //     //this.sonuc = this.$refs.isim.value + ' ' + this.$refs.parola.value;
  //     //console.log(this.sonuc);
  //     console.log(this.$refs.isim.value + ' ' + this.$refs.parola.value);
  //   }
  // }

  methods:{
    sil(){
      this.$refs.metin.value = '';
    }
  },
  
  components: {
    Header
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>