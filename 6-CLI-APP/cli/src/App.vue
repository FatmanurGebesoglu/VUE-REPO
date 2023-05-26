<template>
  <!-- <h3>{{baslik}}</h3>
  <input type="text" ref="isim" />
  <input type="text" ref="parola" />
  <button @click="handleClick">Tıkla</button>
  {{ sonuc }}
  <br/> -->
  <Header />
</template>

<script>

import Header from './components/Header.vue';

export default {
name: 'App',
// data(){
//   return{
//     baslik: 'Merhaba Vue',
//     sonuc: ''
//   };
// },
// methods:{
//   handleClick(){
//     //this.sonuc = this.$refs.isim.value + ' ' + this.$refs.parola.value;
//     //console.log(this.sonuc);
//     console.log(this.$refs.isim.value + ' ' + this.$refs.parola.value);
//   }
// }
components:{
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