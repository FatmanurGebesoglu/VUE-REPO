const app = Vue.createApp({
  template: `
        <div v-bind:style="style">Kırmızı</div>
        
  `,
  data() {
    return {
      style:"color:red"
    };
  },
  methods: {},
});

app.mount(".uygulama");
