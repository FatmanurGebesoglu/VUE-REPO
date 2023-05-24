const app = Vue.createApp({
  template: `
        <ul>
            <li v-for="sayi in sayilar" :key="sayi"> {{sayi}} </li>
        </ul>
        
        <ul>
            <li v-for="karakter in karakterler" :key="karakter"> {{karakter}} </li>
        </ul>

        <ul>
            <li v-for="karakter in karakterler" :key="karakter"> {{karakter.isim}}-{{karakter.meslek}} </li>
        </ul>
        
      `,
  data() {
    return {
      sayilar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      karakterler: [
        { isim: "Ali", meslek: "Mühendis" },
        { isim: "Veli", meslek: "Doktor" },
        { isim: "Ayşe", meslek: "Öğretmen" },
        { isim: "Fatma", meslek: "Avukat" },
        { isim: "Mehmet", meslek: "Mimar" },
        { isim: "Ahmet", meslek: "Mühendis" },
        { isim: "Ayşe", meslek: "Doktor" },
      ],
    };
  },
  methods: {},
});

app.mount(".uygulama");
