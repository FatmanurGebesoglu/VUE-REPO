<template>
  <p>Comp1</p>
  <Formcomp />
  <hr/>
  <hr/>
  <br>
  <p>Comp2</p>
  <Formcomp2 />
  <hr/>
  <hr/>
  <br>
  <p>Comp3</p>
  <Formcomp3 />
  <hr/>
  <hr/>
  <br>
  <p>Comp4</p>
  <Formcomp4 />
</template>

<script>
 import Formcomp from './components/FormComp.vue'
 import Formcomp2 from './components/FormComp2.vue'
 import Formcomp3 from './components/FormComp3.vue'
 import Formcomp4 from './components/FormComp4.vue'

export default {
  
  name: 'App',
  components: {
    Formcomp,
    Formcomp2,
    Formcomp3,
    Formcomp4
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
