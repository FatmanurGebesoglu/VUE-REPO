<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'personel' }">Person</router-link>
    <br>
    <br>
    <button @click="anasayfa">Anasayfa</button>
    <button @click="geri">Geri</button>
    <button @click="ileri">İleri</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    anasayfa() {
      this.$router.push({ name: 'home' });
    },
    geri() {
      this.$router.go(-1);
    },
    ileri() {
      this.$router.go(1);
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-size: 20px;
}
</style>
