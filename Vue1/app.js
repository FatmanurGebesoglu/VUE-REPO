const app = Vue.createApp({
    template: `
    <h1>Merhaba Dünya</h1>
    <h2>{{ baslik }}</h2>
    <p>{{ icerik }}</p>
    <p>Uygulama Adet: {{ appAdet }}</p>
    <button v-on:click="appEkle()">Uygulama Ekle</button>
    <p @click="appEkle()">{{ metin }}</p>
    `,
    data(){
        return {
            baslik: 'Vue 3',
            icerik: 'Vue 3 ile geliştirme yapmak çok kolay',
            appAdet: 4,
            metin: 'Metin eklemek için tıklayınız'
        }
    },
    methods:{
        appEkle(){
            console.log('Uygulama eklendi');
            this.appAdet++;
            this.metin = `Şu anda ${this.appAdet} uygulama var.`;
        }
    }
});
  
app.mount('.uygulama');