<template>
  <Formcomp />
  <Formcomp2 />
</template>

<script>
 import Formcomp from './components/FormComp.vue'
 import Formcomp2 from './components/FormComp2.vue'

export default {
  
  name: 'App',
  components: {
    Formcomp,
    Formcomp2
  },
  
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
