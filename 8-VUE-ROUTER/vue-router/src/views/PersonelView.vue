<template>
    <h1>Personeller</h1>
    <div v-for="personel in personeller" :key="personel.id">
        <router-link :to="{name:'personeldetay',params:{id:personel.id}}">
          <p>{{ personel.ad }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'PersonelView',
  data () {
    return {
        personeller : [
            {id:1, ad:'Ali', gorev:'Muhasebe'},
            {id:2, ad:'Veli', gorev:'İnsan Kaynakları'},
            {id:3, ad:'Ayşe', gorev:'Satın Alma'},
        ]
    }
  }
}
</script>

<style>

</style>