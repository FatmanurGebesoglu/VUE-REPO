const app = Vue.createApp({
  template: `
        <h2>İçecek Seçiniz</h2>
        <ul>
            <li v-for="i in icecekler" class="li" :class="{secilen:i.sec}" @click="icecekSec(i)" > {{i.isim}} </li>
        </ul>

        <button @click="secilenIceceklerGetir">Seçilenleri Göster</button>
        <hr/>
        <h3>Seçilen İçecekler </h3>
        <ul>
          <li v-for="i in secilenIcecekler" class="secilen">
              {{i.isim}}
          </li>
        </ul>
        
    `,
  data() {
    return {
        icecekler:[
          {isim:"Su", sec:true},
          {isim:"Ayran", sec:false},
          {isim:"Kola", sec:false},
          {isim:"Şalgam", sec:false},
        ]
    };
  },
  methods: {
    icecekSec(icecek){
      icecek.sec = !icecek.sec;
    },
    secilenIceceklerGetir(){
      const secilenler=this.icecekler.filter(i=>i.sec==true);
      console.log(secilenler);
    },
  },
  computed:{
    secilenIcecekler(){
      console.log("değişiklikler algılandı");
      return secilenler= this.icecekler.filter(i=>i.sec);
    },
  },

});

app.mount(".uygulama");
